const User = require('../models/User');
const VerificationToken = require('../models/VerificationToken');
const mailService = require("../utils/mail");
const { validateOtp, validateUserId } = require('../utils/validation');
const { generateOTP, mailTransport } = require("../utils/mail");

const verifyEmail = async (req, res) => {
    const { body } = req;
    const { error } = validateOtp(body);
    //if invalid, return 400 - Bad request
    if (error) return res.status(400).send(error.details[0].message);

    //Getting the user id 
    const foundUser = await User.findOne({ _id: body.userId }).exec();
    if (!foundUser) return res.status(404).json('User does not exist!');

    //Check email verification status
    if (foundUser.verified) res.status(409).json("This account is already verified");

    //Getting the token delivery from the input if it is matches with the user
    const token = await VerificationToken.findOne({ owner: foundUser._id }).exec();
    if (!token) return res.status(404).json('Otp does not exist!');;

    //Comparing the token delivered with one in the database
    const isMatched = await token.compareToken(body.otp).exec();
    if (!isMatched) res.status(400).json("Please provide a valid token");

    /*
        if all goes well we update the email verication status
        Delete the token
        Send email to the user
    */

    try {
        foundUser.verified = true;
        await VerificationToken.findByIdAndDelete(token._id);
        await foundUser.save;

        mailService.mailTransport().sendMail({
            from: 'emailverification@email.com',
            to: foundUser.email,
            subject: "Welcome email",
            html: "Email verified successful"
        });

        res.status(200).json({ 'success': `${foundUser.username}, your email has been verified` });
    }
    catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

const resendToken = async (req, res) => {
    const { body } = req;
    const { error } = validateUserId(body);
    //if invalid, return 400 - Bad request
    if (error) return res.status(400).send(error.details[0].message);

    //Getting the user id 
    const foundUser = await User.findOne({ _id: body.userId }).exec();
    if (!foundUser) return res.status(404).json('User does not exist!');

    //Check email verification status
    if (foundUser.verified) res.status(409).json("This account is already verified");

    //Getting the token delivery from the input if it is matches with the user
    const token = await VerificationToken.findOne({ owner: foundUser._id }).exec();
    if (token) {
        await VerificationToken.findByIdAndDelete(token._id);

        OTP = generateOTP();

        const verificationToken = new VerificationToken({
            owner: foundUser._id,
            token: OTP
        });

        try {
            await verificationToken.save();

            mailTransport().sendMail({
                from: 'emailverification@email.com',
                to: foundUser.email,
                subject: "Verify your email",
                html: `<h2>${OTP}</h2>`
            });

            console.log(verificationToken);
            res.status(201).json({ 'success': 'OTP has been reset successfully' });
        }
        catch (error) {
            res.status(500).json({ 'message': error.message });
        }
    }
    else {
        OTP = generateOTP();

        const verificationToken = new VerificationToken({
            owner: foundUser._id,
            token: OTP
        });

        try {
            await verificationToken.save();

            mailTransport().sendMail({
                from: 'emailverification@email.com',
                to: foundUser.email,
                subject: "Verify your email",
                html: `<h2>${OTP}</h2>`
            });

            console.log(verificationToken);
        }
        catch (error) {
            res.status(500).json({ 'message': error.message });
        }
    }
}


module.exports = {
    verifyEmail,
    resendToken
}
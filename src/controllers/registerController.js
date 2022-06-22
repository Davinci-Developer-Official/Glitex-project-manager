const User = require('../models/User');
const VerificationToken = require('../models/VerificationToken');
const bcrypt = require('bcrypt');
const { validateRegisterUser } = require('../utils/validation');
const {generateOTP, mailTransport} = require("../utils/mail");

const registerNewUser = async (req, res) => {
    const { body } = req;
    const { error } = validateRegisterUser(body);
    //if valid, return 400 - Bad request
    if (error) return res.status(400).json(error.details[0].message);

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ email: body.email }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(body.password, 10);

        //create and store the new user
        const newUser = new User({
            "username": body.name,
            "email": body.email,
            "password": hashedPwd,
            "status": true
        });

        OTP = generateOTP()

        const verificationToken = new VerificationToken({
            owner: newUser._id,
            token: OTP
        });

        try {
            await verificationToken.save();
            await newUser.save();

            mailTransport().sendMail({
                from: 'emailverification@email.com',
                to: newUser.email,
                subject: "Verify your email",
                html: `<h2>${OTP}</h2>`
            });

            console.log(verificationToken);
            console.log(newUser);
        }
        catch(error){
            res.status(500).json({ 'message': error.message });
        } 
        


        res.status(201).json({  'foundUser': newUser });
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}



module.exports = { registerNewUser };
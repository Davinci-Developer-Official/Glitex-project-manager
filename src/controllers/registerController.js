const User = require('../models/User');
const Role = require('../models/Role');
const VerificationToken = require('../models/VerificationToken');
const bcrypt = require('bcrypt');
const { validateRegisterUser } = require('../utils/validation');
const { generateOTP, mailTransport } = require("../utils/mail");

const registerNewUser = async (req, res) => {
    const { body } = req;
    const { error } = validateRegisterUser(body);
    //if valid, return 400 - Bad request
    if (error) return res.status(400).json({ message: error.details[0].message });

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ email: body.email }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        const SupperAdminRole = await Role.findOne({name: 'SuperAdmin'}); 
        //encrypt the password
        const hashedPwd = await bcrypt.hash(body.password, 10);

        //create and store the new user
        const newUser = new User({
            username: body.name,
            email: body.email,
            password: hashedPwd,
            status: false,
            role: SupperAdminRole._id
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

            return res.status(201).json({ success: 'Account has been created successfully!' });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



module.exports = { registerNewUser };
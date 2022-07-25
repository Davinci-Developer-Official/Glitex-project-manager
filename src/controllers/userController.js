const User = require('../models/User');
const Role = require('../models/Role');
const VerificationToken = require('../models/VerificationToken');
const bcrypt = require('bcrypt');
const { validateUser } = require('../utils/validation');
const { generateOTP, mailTransport } = require("../utils/mail");

const getAllUsers = async (req, res) => {
    try {
        //Get all users
        const users = await User.find();
        //Users not found
        if (!users) return res.status(204).json({ message: 'No users found' });
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getUser = async (req, res) => {
    return res.status(200).json(res.user);
}

const addUser = async (req, res) => {
    const { body } = req;
    const { error } = validateUser(body);
    //if valid, return 400 - Bad request
    if (error) return res.status(400).json(error.details[0].message);

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ email: body.email }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(body.password, 10);

        const userRole = await Role.findOne({name: body.role});

        //create and store the new user
        const newUser = new User({
            username: body.name,
            email: body.email,
            password: hashedPwd,
            role: userRole._id
        });

        //Generate opt
        OTP = generateOTP()

        //create and assign otp to new user
        const verificationToken = new VerificationToken({
            owner: newUser._id,
            token: OTP
        });

        try {
            //Save verificationToken
            await verificationToken.save();
            //Save new user
            await newUser.save();

            //Send email
            mailTransport().sendMail({
                from: 'emailverification@email.com',
                to: newUser.email,
                subject: "Verify your email",
                html: `<h2>${OTP} and your password ${body.password} login to verify your email and access you account.</h2>`
            });

            console.log(verificationToken);
            console.log(newUser);

            return res.status(201).json({ success: "User has been created successfully" });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }

        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    const { body } = req;

    try {
        //update user status
        res.user.status = body.status;

        //Update user status in db
        const updatedUser = await res.user.save();
        return res.status(200).json(updatedUser);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser
};
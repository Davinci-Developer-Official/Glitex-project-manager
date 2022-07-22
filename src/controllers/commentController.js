const Comment = require('../models/Comment');
const User = require('../models/User');
const { validateComment } = require('../utils/validation');
const { mailTransport } = require("../utils/mail");
const fs = require("fs");

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();

        return res.status(200).json(comments);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getSingleComment = async (req, res) => {
    return res.status(200).json(res.comment)
}

const uploadComment = async (req, res) => {
    const { body } = req;
    const { error } = validateComment(body);
    //if valid, return 400 - Bad request
    if (error) return res.status(400).json({ message: error.details[0].message });


    try {
        const sender = await User.findOne({ from: body.from });

        const recipient = await User.findOne({ to: body.to });

        const newComment = new Comment({
            from: sender._id,
            to: recipient._id,
            message: body.message,
        });

        await newComment.save();

        mailTransport().sendMail({
            from: 'servicedocument@email.com',
            to: recipient.email,
            subject: "Document Comment",
            html: `<h2>${newComment.message}</h2>`
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateComment = async (req, res) => {
    const { body } = req;

    if (res.comment.from === body.from) {
        try {
            res.comment.message = body.message;

            const updateComment = await res.comment.save();

            const recipient = await User.findOne({ to: updateComment.to });

            mailTransport().sendMail({
                from: 'servicedocument@email.com',
                to: recipient.email,
                subject: "Document Comment",
                html: `<h2>${updateComment.message}</h2>`
            });

            return res.status(200).json(updateComment);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    else {
        return res.sendStatus(401); //Unauthorized 
    }
}

module.exports = {
    getComments,
    getSingleComment,
    uploadComment,
    updateComment
}
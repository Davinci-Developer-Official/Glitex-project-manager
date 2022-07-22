const Document = require('../models/Document');
const User = require('../models/User');
const { validateDocument } = require('../utils/validation');
const { mailTransport } = require("../utils/mail");
const fs = require("fs");

const getDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        return res.status(200).json(documents)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getSingleDocument = async (req, res) => {
    return res.status(200).json(res.document)
}

const uploadDocument = async (req, res) => {
    const { body } = req;
    const { error } = validateDocument(body);
    //if valid, return 400 - Bad request
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const sender = await User.findOne({ from: body.from });

        const recipient = await User.findOne({ to: body.to });

        const newDocument = new Document({
            from: sender._id,
            to: recipient._id,
            file: req.file.path,
        });

        await newDocument.save();

        mailTransport().sendMail({
            from: 'servicedocument@email.com',
            to: recipient.email,
            subject: "New document",
            html: `<h2>${req.file}</h2>`
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateDocument = async (req, res) => {
    const { body } = req;


    try {
        if (res.document.file !== req.file.path) {
            fs.unlinkSync(res.document.file);
        }
        else {
            res.document.file = req.file.path;

            const updatedDocument = await res.document.save();
            return res.status(200).json(updatedDocument)
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const approveDocument = async (req, res) => {
    const { body } = req;

    try {
        res.document.approved = req.body

        const updatedDocument = await res.document.save();
        return res.status(200).json(updatedDocument)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteDocument = async (req, res) => {
    try {
        await res.document.remove();
        return res.status(204).json({ success: "Document deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getDocuments,
    getSingleDocument,
    uploadDocument,
    updateDocument,
    approveDocument,
    deleteDocument
}
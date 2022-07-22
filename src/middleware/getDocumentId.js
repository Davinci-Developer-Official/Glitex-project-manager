const Document = require("../models/Document");

const getDocumentId = async (req, res, next) => {
    const {
        params: {documentId },
    } = req;

    let document

    if (!documentId) {
        return res.status(400).json({ message: "Parameter ':documentId' can not be empty"});
    }
    try {
        document = await Document.findById(documentId);
        if (document === null) return res.status(404).json({ message: "This document is not available" })
    }
    catch (error) {
        return res.status(error?.status || 500).json({message: error.message});
    }

    res.document = document;
    next()
}

module.exports = getDocumentId;
const express = require('express');
const router = express.Router();
const documentController = require('../../controllers/documentContoller');
const getDocument = require("../../middleware/getDocumentId");
const uploadDocument = require('../../middleware/documentUpload');

router.get('/', documentController.getDocuments);

router.get('/:documentId', getDocument, documentController.getSingleDocument);

router.post('/', uploadDocument.single("file"), documentController.uploadDocument);

router.patch('/:documentId', uploadDocument.single("file"), getDocument, documentController.updateDocument);

router.patch('approve/:documentId', getDocument, documentController.approveDocument);

router.delete('/:documentId', getDocument, documentController.deleteDocument);

module.exports = router;
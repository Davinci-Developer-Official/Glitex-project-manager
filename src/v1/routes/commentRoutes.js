const express = require('express');
const router = express.Router();
const commentController = require('../../controllers/commentController');
const getComment = require("../../middleware/getCommentId");


router.get('/', commentController.getComments);

router.get('/:commentId', getComment, commentController.getSingleComment);

router.post('/', commentController.uploadComment);

router.patch('/:commentId', getComment, commentController.updateComment);


module.exports = router;
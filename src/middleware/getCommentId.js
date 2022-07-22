const Comment = require("../models/Comment");

const getCommentId = async (req, res, next) => {
    const {
        params: {commentId },
    } = req;

    let comment

    if (!commentId) {
        return res.status(400).json({ message: "Parameter ':commentId' can not be empty"});
    }
    try {
        comment = await Comment.findById(commentId);
        if (comment === null) return res.status(404).json({ message: "This comment is not available" })
    }
    catch (error) {
        return res.status(500).json({message: error.message});
    }

    res.comment = comment
;
    next()
}

module.exports = getCommentId;
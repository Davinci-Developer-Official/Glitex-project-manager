const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        require: true
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        require: true
    },
    message: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('comments', commentSchema); 
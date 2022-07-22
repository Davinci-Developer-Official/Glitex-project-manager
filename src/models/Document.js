const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const documentSchema = new Schema({
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
    file: {
        type: String,
        require: true
    },
    approved: {
        type: Boolean,
        require: true,
        default: false
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

module.exports = mongoose.model('documents', documentSchema); 
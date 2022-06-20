const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
       type: Number,
       default: 2000,
       required: true
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

module.exports = mongoose.model('roles', roleSchema); 
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roleSchema = new Schema({
    role: {
        User: {
            type: Number,
            default: 2000
        },
        Admin: Number,
        SuperAdmin: Number
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
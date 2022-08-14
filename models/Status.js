const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Status name must be provided']
    },
    label: {
        type: String,
        trim: true,
        required: [true, 'Status label must be provided']
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Status', schema)
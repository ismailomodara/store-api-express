const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
        type: Number,
        trim: true,
        required: [true, 'Product name must be provided']
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Product name must be provided']
    },
    label: {
        type: String,
        trim: true,
        required: [true, 'Product name must be provided']
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
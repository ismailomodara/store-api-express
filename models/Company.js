const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Company name must be provided']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Company email must be provided']
    },
    status_id: {
        type: Number,
        default: 5
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

module.exports = mongoose.model('Company', schema)
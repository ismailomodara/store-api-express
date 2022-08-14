const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Product name must be provided']
    },
    price: {
        type: Number,
        required: [true, 'Product price must be provided']
    },
    rating: {
        type: Number,
        default: 0
    },
    status_id: {
        type: Number,
        default: 2
    },
    company_id: {
        type: Number,
        required: [true, 'Product company is required']
    },
    tag: {
        type: String,
        enum: {
            values: ['clothes', 'leather', 'shoes', 'trousers', 'jackets', 'shirts'],
            message: '{VALUE} is not a valid tag'
        }
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: Date,
        default: null
    }
})

module.exports = mongoose.model('Product', schema)
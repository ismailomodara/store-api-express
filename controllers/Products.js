const Product = require('../models/Product');

const index = async (req, res) => {
    const companies = await Product.find({ status_id: { $ne: 3 }})
    return res.status(200).json({
        status: true,
        message: 'Products fetched.',
        data: companies
    })
}

const store = async (req, res) => {
    const company = await Product.create({
        ...req.body
    })
    return res.status(200).json({
        status: true,
        message: 'Product created.',
        data: company
    })
}

const show = async (req, res) => {
    const company = await Product.findOne({ id: req.params.id })
    if(!company) {
        return res.status(404).json({
            status: false,
            message: "Product does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Product fetched.',
        data: company
    })
}

const update = async (req, res) => {
    const payload = {
        ...req.body,
        updated_at: Date.now()
    }
    const company = await Product.findOneAndUpdate({ id: req.params.id }, payload, {
        new: true,
        runValidators: true
    })

    if(!company) {
        return res.status(404).json({
            status: false,
            message: "Product does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Product updated.',
        data: company
    })
}

const destroy = async (req, res) => {
    const payload = {
        status_id: 3,
        deleted_at: Date.now()
    }
    const company = await Product.findOneAndUpdate({ id: req.params.id }, payload)
    if(!company) {
        return res.status(404).json({
            status: false,
            message: "Company does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Company deleted.',
        data: null
    })
}

module.exports = { index, store, show, update, destroy }
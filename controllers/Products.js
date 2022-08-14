const Product = require('../models/Product');

const index = async (req, res) => {
    const { page, limit, sort, fields, search } = req.query;

    /**
     * By default, only return products that have not been deleted.
     * Deleted products have status_id of 3.
     */
    const filter = {
        status_id: { $ne: 3 }
    }

    /**
     * If 'search' is part of the query params, set it up as a
     * filter property.
     */
    if (search) {
        filter['name'] = { $regex: search, $options: 'i'}
    }

    /**
     * Store the returned promise in  [response] after performing filter
     * on the product collection.
     */
    const response = Product.find(filter)

    /**
     * Logic for pagination.
     * page = set default of 1 is none is passed.
     * limit = set default of 10 is none is passed.
     */
    if (page) {
        const pageInt = page ? Number(page) : 1
        const limitInt = limit ? Number(limit) : 10
        const skip = (pageInt - 1) * limitInt

        response.limit(limitInt).skip(skip)
    }

    /**
     * Logic for sorting is available in query params
     */
    if (sort) {
        response.sort(sort.split(',').join(' '))
    }

    /**
     * Logic for specifying required properties to be returned
     */
    if (fields) {
        response.select(fields.split(',').join(' '))
    }

    const products = await response

    return res.status(200).json({
        status: true,
        message: 'Products fetched.',
        data: {
            page,
            total: products.length,
            products
        }
    })
}

const store = async (req, res) => {
    const product = await Product.create({
        ...req.body
    })
    return res.status(200).json({
        status: true,
        message: 'Product created.',
        data: product
    })
}

const show = async (req, res) => {
    /**
     * Logic for specifying required properties to be returned
     */
    const response = Product.findOne({ _id: req.params.id })
    if (req.query.fields) {
        response.select(req.query.fields.split(',').join(' '))
    }
    const product = await response
    if(!product) {
        return res.status(404).json({
            status: false,
            message: "Product does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Product fetched.',
        data: product
    })
}

const update = async (req, res) => {
    const payload = {
        ...req.body,
        updated_at: Date.now()
    }
    const product = await Product.findOneAndUpdate({ id: req.params.id }, payload, {
        new: true,
        runValidators: true
    })

    if (!product) {
        return res.status(404).json({
            status: false,
            message: "Product does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Product updated.',
        data: product
    })
}

const destroy = async (req, res) => {
    const payload = {
        status_id: 3,
        deleted_at: Date.now()
    }
    const product = await Product.findOneAndUpdate({ _id: req.params.id }, payload)
    if (!product) {
        return res.status(404).json({
            status: false,
            message: "Product does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Product deleted.',
        data: null
    })
}

module.exports = { index, store, show, update, destroy }
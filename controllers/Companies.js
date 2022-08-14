const Company = require('../models/Company');

const index = async (req, res) => {
    const companies = await Company.find({ status_id: { $ne: 3 }})
    return res.status(200).json({
        status: true,
        message: 'Companies fetched.',
        data: companies
    })
}

const store = async (req, res) => {
    const company = await Company.create({
        ...req.body
    })
    return res.status(200).json({
        status: true,
        message: 'Company created.',
        data: company
    })
}

const show = async (req, res) => {
    const company = await Company.findOne({ id: req.params.id })
    if(!company) {
        return res.status(404).json({
            status: false,
            message: "Company does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Company fetched.',
        data: company
    })
}

const update = async (req, res) => {
    const company = await Company.findOneAndUpdate({ id: req.params.id }, req.body, {
        new: true,
        runValidators: true
    })

    if(!company) {
        return res.status(404).json({
            status: false,
            message: "Company does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Company updated.',
        data: company
    })
}

const destroy = async (req, res) => {
    const company = await Company.findOneAndUpdate({ id: req.params.id }, { status_id: 3 })
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
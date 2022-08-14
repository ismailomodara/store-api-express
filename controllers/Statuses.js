const Status = require('../models/Status');

const index = async (req, res) => {
    const statuses = await Status.find({})
    return res.status(200).json({
        status: true,
        message: 'Statuses fetched.',
        data: statuses
    })
}

const store = async (req, res) => {
    const status = await Status.create({
        ...req.body
    })
    return res.status(200).json({
        status: true,
        message: 'Status created.',
        data: status
    })
}

const show = async (req, res) => {
    const status = await Status.findOne({ id: req.params.id })
    if(!status) {
        return res.status(404).json({
            status: false,
            message: "Status does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Status fetched.',
        data: status
    })
}

const update = async (req, res) => {
    const status = await Status.findOneAndUpdate({ id: req.params.id }, { ...req.body, updated_at: Date.now() }, {
        new: true,
        runValidators: true
    })

    if(!status) {
        return res.status(404).json({
            status: false,
            message: "Status does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Status updated.',
        data: status
    })
}

const destroy = async (req, res) => {
    const status = await Status.findOneAndDelete({ id: req.params.id })
    if(!status) {
        return res.status(404).json({
            status: false,
            message: "Status does not exist"
        })
    }
    return res.status(200).json({
        status: true,
        message: 'Status deleted.',
        data: null
    })
}

module.exports = { index, store, show, update, destroy }
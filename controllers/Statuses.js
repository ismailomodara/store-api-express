const index = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Statuses fetched",
        data: []
    })
}

const store = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Status created",
        data: {}
    })
}

const show = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Status fetched",
        data: {}
    })
}

const update = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Status updated",
        data: {}
    })
}

const destroy = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Status deleted",
        data: {}
    })
}

module.exports = { index, store, show, update, destroy }
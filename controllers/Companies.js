const index = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Companies fetched",
        data: []
    })
}

const store = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Company created",
        data: {}
    })
}

const show = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Company fetched",
        data: {}
    })
}

const update = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Company updated",
        data: {}
    })
}

const destroy = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Company deleted",
        data: {}
    })
}

module.exports = { index, store, show, update, destroy }
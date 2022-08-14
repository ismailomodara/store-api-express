const index = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Products fetched",
        data: []
    })
}

const store = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Product created",
        data: {}
    })
}

const show = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Product fetched",
        data: {}
    })
}

const update = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Product updated",
        data: {}
    })
}

const destroy = async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Product deleted",
        data: {}
    })
}

module.exports = { index, store, show, update, destroy }
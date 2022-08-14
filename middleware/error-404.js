const error404 = (req, res) => {
    return res.status(404).json({
        error: true,
        message: "Route does not exist"
    })
}

module.exports = error404
const error404 = (res, req) => res.status(404).json({
    error: true,
    message: "Route does not exist"
})

module.exports = error404
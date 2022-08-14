require('dotenv').config()
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const error404 = require('./middleware/error-404')
const errorHandlerMiddleware = require('./middleware/error-handler')

const products = require('./routes/products');


app.use(express.json())

app.get("/api/v1", (req, res) => {
    res.status(200).json({
        message: 'API Warehouse'
    })
})

app.use('/api/v1/products', products)

app.use(errorHandlerMiddleware)
app.use(error404)

const port = process.env.PORT || 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
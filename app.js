require('dotenv').config()

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const error404 = require('./middleware/error-404')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

app.get("/", (req, res) => {
    res.send('<h1>Store API</h1>')
})

app.use(error404)
app.use(errorHandlerMiddleware)

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
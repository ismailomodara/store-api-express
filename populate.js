require('dotenv').config()

const connectDB = require('./db/connect');
const Product = require('./models/Product');

const jsonProducts = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        const tags = ['clothes', 'leather', 'shoes', 'trousers', 'jackets', 'shirts']
        const newJsonProducts = jsonProducts.map((product, index) => {
            return {
                ...product,
                id: index + 1,
                tag: tags[Math.floor(Math.random() * tags.length)]
            }
        })
        await Product.deleteMany();
        await Product.create(newJsonProducts)
        console.log('Products loaded!')
        process.exit(0)
    } catch (error) {
        console.log(error)
    }
}

// start()
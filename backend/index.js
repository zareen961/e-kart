const dotenv = require('dotenv')
const express = require('express')
const connectDB = require('./config/db.js')
const { notFound, errorHandler } = require('./middleWare/errorMiddleWare')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)

app.use('/api/users', userRoutes)

app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})

app.use(notFound)

app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('<<<----Shopping Cart Server---->>>')
})

app.listen(
    process.env.PORT || 5000,
    console.log(`<<<----Server running in ${process.env.NODE_ENV} mode---->>>`)
)

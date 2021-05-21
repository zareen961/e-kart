require('dotenv').config()
const mongoose = require('mongoose')
const users = require('./data/users')
const products = require('./data/products')
const User = require('./models/userModel')
const Order =require('./models/orderModel')
const Product = require('./models/productModel')
const connectDB = require('./config/db.js')

connectDB()

const importData = async() => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => (
            { ...product, user: adminUser }
        ))

        await Product.insertMany(sampleProducts)

        console.log("Data Imported");
        process.exit()
    }catch(error){
        console.error(`Error: ${error}`);
        process.exit(1)
    }
}

const destroyData = async() => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        
        console.log("Data Destroyed");
        process.exit()
    }catch(error){
        console.error(`Error: ${error}`);
        process.exit(1)
    }
}

process.argv[2] === '-d' ? destroyData() : importData() 
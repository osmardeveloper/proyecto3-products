const express = require("express")
const cors = require('cors')
require('dotenv').config()
const { port } = require('../config')

const productRouter = require('./products/products.router')


const db = require('./utils/database')
const initModels = require('./models/initModels')


// const PORT = process.env.PORT || 5000

const app = express()

db.authenticate()
.then(() => console.log('Database Autenticated!'))
.catch(err => console.log(err))

db.sync()
.then(() => console.log('Database Synced!'))
.catch(err => console.log(err))

initModels()



app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.json({
        message: 'Server OK', 
        myMessage: process.env.MESSAGE, 
        myPort: process.env.PORT
    })
}) 


app.use("/api/v1/products", productRouter);

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
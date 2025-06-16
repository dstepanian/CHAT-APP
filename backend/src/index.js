const express = require('express')
const {connectDB} = require('./lib/db')
const router = express.Router()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

connectDB();


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
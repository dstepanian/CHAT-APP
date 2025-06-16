const express = require('express')
const {connectDB} = require('./lib/db')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use('/', routes)

connectDB();


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
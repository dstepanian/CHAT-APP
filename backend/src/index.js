const express = require('express')
const {connectDB} = require('./lib/db')
const routes = require('./routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(cookieParser())
app.use(express.json())
app.use('/', routes)


connectDB();


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
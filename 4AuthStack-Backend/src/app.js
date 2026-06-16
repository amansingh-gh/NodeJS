const express = require('express')
const authRoutes = require('./routes/auth.routes')
const postRoute = require('./routes/post.routes')
const cookieParser = require('cookie-parser')
const cors = require("cors");



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use('/api/auth', authRoutes)
app.use('/api/auth', postRoute)

module.exports = app
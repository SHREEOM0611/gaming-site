require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const gamersRoutes = require('./routes/gamers')
const videosRoutes = require('./routes/videos')
const register = require('./routes/register')
const login = require('./routes/login')


const app = express()
app.use(cors());
app.use(express.json());


app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()
})

app.use('/api/gamers', gamersRoutes)

app.use('/api/videos', videosRoutes)

// app.use(express.urlencoded({ extended: true }));
app.use('/register', register)

app.use('/login', login)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })





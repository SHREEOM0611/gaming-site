require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const gamersRoutes = require('./routes/gamers')
const videosRoutes = require('./routes/videos')



const app = express()
app.use(cors())
app.use(express.json())


app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()
})

app.use('/api/gamers', gamersRoutes)


app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()
})

app.use('/api/videos', videosRoutes)



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })





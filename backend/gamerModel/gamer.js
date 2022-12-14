const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gamerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
     image:{
        type: String,
        required:true
    },
    rating:{
        type: Number,
        required:true
    },
    World_Championship:{
        type: String,
        required:true
    }

},{ timestamps: true })

module.exports = mongoose.model('Players', gamerSchema)
const mongoose = require('mongoose')
const User = require('../models/user')



const getUsers = async (req, res) => {
    const allUsers = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(allUsers)
}
const createUser = async (req, res) => {
    const {name, username, password } = req.body
    // add a user to db
    try {
        const newUser = await User.create({name, username, password })
        res.status(200).json(newUser)
        console.log("reached userControll")
    } catch (error) {
        res.status(404).json({ error: error.message })
    }   
}




module.exports = {
    getUsers,
    createUser
}
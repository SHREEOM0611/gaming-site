const express = require('express')
const { loginAuth} = require('../controllers/userController')
const User = require('../models/user')

const router = express.Router()

// get the form data
router.post('/', async (req, res) => {
    console.log(req.body)
    filledUsername=req.body.username
    filledPassword=req.body.password

    try {
        const userFound = await User.findOne({filledUsername})
    
        if(userFound.password === filledPassword){
            console.log("USer successfully login")
            res.status(200).redirect('/')
        }
    } catch (error) {
        res.send("password not match")
    }

})


module.exports = router
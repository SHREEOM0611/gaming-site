const { default: mongoose } = require('mongoose')
const Players = require('../gamerModel/gamer')



// get all gamers
const getPlayers = async (req, res) => {
    const allGamers = await Players.find({}).sort({ createdAt: -1 })
    res.status(200).json(allGamers)
}
// get a single gamer
const getPlayer = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such Gamer '})
    }
    
    const singleGamer = await Players.findById(id)
    
    if(!singleGamer){
        return res.status(404).json({error: ' No such Gamer '})
    }
    res.status(200).json(singleGamer)
}


// create a new gamer
const createPlayer = async (req, res) => {
    const { name, country, rating, image, World_Championship } = req.body
    // add a player to db
    try {
        const newGamer = await Players.create({ name, country, rating, image, World_Championship })
        res.status(200).json(newGamer)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
    
}


// delete a gamer

const deletePlayer = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such Gamer to delete'})
    }
    
    const delGamer = await Players.findOneAndDelete({_id:id})
    if(!delGamer){
        return res.status(404).json({error: ' No such Gamer to delete '})
    }
    res.status(200).json(delGamer)
}


//update a workout
const updatePlayer = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such Gamer to update'})
    }
    const updPlayer = await Players.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!updPlayer){
        return res.status(404).json({error: ' No such Gamer to update '})
    }
    res.status(200).json(updPlayer)
}




module.exports = {
    getPlayers,
    getPlayer,
    createPlayer,
    deletePlayer,
    updatePlayer
}
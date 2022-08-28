const { default: mongoose } = require('mongoose')
const Videos = require('../models/videos')



// get all gamers
const getVideos = async (req, res) => {
    const allVideos = await Videos.find({}).sort({ createdAt: -1 })
    res.status(200).json(allVideos)
}
// get a single Video
const getVideo = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such Stream '})
    }
    
    const singleVideo = await Videos.findById(id)
    
    if(!singleVideo){
        return res.status(404).json({error: ' No such Stream '})
    }
    res.status(200).json(singleVideo)
}


// create a new Video
const createVideo = async (req, res) => {
    const { video, title, owner, views} = req.body
    // add a player to db
    try {
        const newVideo = await Videos.create({ video, title, owner, views})
        res.status(200).json(newVideo)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
    
}


// delete a Video

const deleteVideo = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such Video to delete'})
    }
    
    const delVideo = await Videos.findOneAndDelete({_id:id})
    if(!delVideo){
        return res.status(404).json({error: ' No such Video to delete '})
    }
    res.status(200).json(delVideo)
}


//update a Video
const updateVideo = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such Video to update'})
    }
    const updVideo = await Videos.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!updVideo){
        return res.status(404).json({error: ' No such Video to update '})
    }
    res.status(200).json(updVideo)
}




module.exports = {
    getVideos,
    getVideo,
    createVideo,
    deleteVideo,
    updateVideo
}
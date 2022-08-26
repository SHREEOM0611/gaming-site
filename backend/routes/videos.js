const express = require('express')
const { getVideos,
        getVideo,
        createVideo,
        deleteVideo,
        updateVideo } = require('../controllers/videoController')


const router = express.Router()

// GET all Video
router.get('/', getVideos)

// GET a single Video
router.get('/:id', getVideo)

// POST a new Video
router.post('/', createVideo)

// DELETE a single Video
router.delete('/:id', deleteVideo)

// UPDATe a single Video
router.patch('/:id', updateVideo)


module.exports = router
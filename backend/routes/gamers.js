const express = require('express')
const { getPlayers, getPlayer, createPlayer, deletePlayer, updatePlayer } = require('../controllers/gamerController')


const router = express.Router()

// GET all gamer
router.get('/', getPlayers)

// GET a single gamer
router.get('/:id', getPlayer)

// POST a new gamer
router.post('/', createPlayer)

// DELETE a single workouts
router.delete('/:id', deletePlayer)

// UPDATe a single workouts
router.patch('/:id', updatePlayer)


module.exports = router
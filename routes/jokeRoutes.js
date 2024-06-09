const express = require('express');
const {
    createJoke,
    updateJoke,
    deleteJoke,
    getAllJokes,
    getJokeById,
    getRandomJoke,
} = require('../controllers/jokeController');

const router = express.Router();

router.post('/', createJoke);

router.put('/:id', updateJoke);

router.delete('/:id', deleteJoke);

router.get('/', getAllJokes);

router.get('/:id', getJokeById);

router.get('/random', getRandomJoke);

module.exports = router;

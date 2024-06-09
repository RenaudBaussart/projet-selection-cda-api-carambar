const express = require('express');
const {
  createJoke,
  updateJoke,
  deleteJoke,
  getAllJokes,
  getRandomJoke,
  getJokeById,
} = require('../controllers/jokeController');

const router = express.Router();

router.post('/', createJoke);

router.put('/:id', updateJoke);

router.delete('/:id', deleteJoke);

router.get('/', getAllJokes);

router.get('/random', getRandomJoke);

router.get('/:id', getJokeById);

module.exports = router;

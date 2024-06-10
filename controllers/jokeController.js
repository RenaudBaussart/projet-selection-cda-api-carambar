const { Sequelize, Joke } = require('../models');

// Récupérer toutes les blagues
const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Récupérer une blague aléatoire
const getRandomJoke = async (req, res) => {
  try {
    const joke = await Joke.findOne({ order: Sequelize.literal('RANDOM()') });
    if (joke) {
      res.json(joke);
    } else {
      res.status(404).json({ message: 'No jokes found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Récupérer une blague par ID
const getJokeById = async (req, res) => {
  try {
    const { id } = req.params;
    const joke = await Joke.findByPk(id);
    if (joke) {
      res.json(joke);
    } else {
      res.status(404).json({ message: 'Joke not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Ajouter une nouvelle blague
const createJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newJoke = await Joke.create({ question, answer });
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Mettre à jour une blague existante
const updateJoke = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;
    const joke = await Joke.findByPk(id);
    if (joke) {
      joke.question = question;
      joke.answer = answer;
      await joke.save();
      res.json(joke);
    } else {
      res.status(404).json({ message: 'Joke not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Supprimer une blague existante
const deleteJoke = async (req, res) => {
  try {
    const { id } = req.params;
    const joke = await Joke.findByPk(id);
    if (joke) {
      await joke.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Joke not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllJokes,
  getRandomJoke,
  getJokeById,
  createJoke,
  updateJoke,
  deleteJoke,
};

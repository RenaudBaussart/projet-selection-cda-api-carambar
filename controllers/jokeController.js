const { Sequelize, Joke } = require('../models');

// Add a joke
const createJoke = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const newJoke = await Joke.create({ question, answer });
        res.status(201).json(newJoke);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a joke
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

// Delete a joke
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

// Get all jokes
const getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.findAll();
        res.json(jokes);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get joke by ID
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

// Get random joke
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


module.exports = {
    createJoke,
    updateJoke,
    deleteJoke,
    getAllJokes,
    getJokeById,
    getRandomJoke,
};

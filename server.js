const express = require('express');
const { Sequelize, Joke } = require('./models');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route pour ajouter une nouvelle blague
app.post('/api/jokes', async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newJoke = await Joke.create({ question, answer });
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route pour mettre à jour une blague existante
app.put('/api/jokes/:id', async (req, res) => {
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
});

// Route pour supprimer une blague existante
app.delete('/api/jokes/:id', async (req, res) => {
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
});

// Route pour récupérer une blague aléatoire
app.get('/api/jokes/random', async (req, res) => {
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
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const { Sequelize, Joke } = require('./models');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

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

const express = require('express');
const { Sequelize, Joke } = require('./models');
const setupSwagger = require('./swagger');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Configurer Swagger
setupSwagger(app);

/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - question
 *         - answer
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the joke
 *         question:
 *           type: string
 *           description: The joke question
 *         answer:
 *           type: string
 *           description: The joke answer
 *       example:
 *         id: 1
 *         question: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?"
 *         answer: "Parce que sinon ils tombent encore dans le bateau."
 */

/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: The jokes managing API
 */

/**
 * @swagger
 * /api/jokes:
 *   get:
 *     summary: Returns the list of all the jokes
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: The list of the jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 */
app.get('/api/jokes', async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

/**
 * @swagger
 * /api/jokes/random:
 *   get:
 *     summary: Returns a random joke
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: A random joke
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 */
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

/**
 * @swagger
 * /api/jokes/{id}:
 *   get:
 *     summary: Get the joke by id
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The joke id
 *     responses:
 *       200:
 *         description: The joke d^

ReferenceError: pp isescription by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: The joke was not found
 */
app.get('/api/jokes/:id', async (req, res) => {
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
});

/**
 * @swagger
 * /api/jokes:
 *   post:
 *     summary: Create a new joke
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Joke'
 *     responses:
 *       201:
 *         description: The joke was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Some server error
 */
app.post('/api/jokes', async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newJoke = await Joke.create({ question, answer });
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

/**
 * @swagger
 * /api/jokes/{id}:
 *   put:
 *     summary: Update the joke by the id
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The joke id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Joke'
 *     responses:
 *       200:
 *         description: The joke was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: The joke was not found
 *       500:
 *         description: Some error happened
 */
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

/**
 * @swagger
 * /api/jokes/{id}:
 *   delete:
 *     summary: Remove the joke by id
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The joke id
 *     responses:
 *       204:
 *         description: The joke was deleted
 *       404:
 *         description: The joke was not found
 */
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

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

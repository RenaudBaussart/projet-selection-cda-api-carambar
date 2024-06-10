const express = require('express');
const {
  getAllJokes,
  getRandomJoke,
  getJokeById,
  createJoke,
  updateJoke,
  deleteJoke,
} = require('../controllers/jokeController');

const router = express.Router();

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
router.post('/', createJoke);

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
router.put('/:id', updateJoke);

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
router.delete('/:id', deleteJoke);

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
router.get('/', getAllJokes);

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
router.get('/random', getRandomJoke);

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
 *         description: The joke description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: The joke was not found
 */
router.get('/:id', getJokeById);



module.exports = router;

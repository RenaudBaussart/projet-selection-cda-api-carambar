const express = require('express');
const setupSwagger = require('./swagger/swagger');
const jokeRoutes = require('./routes/jokeRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
var cors = require('cors')

// Middleware to parse json
app.use(express.json());

//midelware to enable cors
app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

// Configure Swagger
setupSwagger(app);

//path to the landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Utiliser les routes de blagues
app.use('/api/jokes', jokeRoutes);
app.use(express.static('./'));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const path = require('path');
const setupSwagger = require('./swagger/swagger');
const jokeRoutes = require('./routes/jokeRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
var cors = require('cors')

// Middleware to parse json
app.use(express.json());

//middleware to enable cors
app.use(cors())

// Configure Swagger
setupSwagger(app);

//path to the landing page

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Utiliser les routes de blagues
app.use('/api/jokes', jokeRoutes);

//enable static link
app.use(express.static('./'));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

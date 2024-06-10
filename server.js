const express = require('express');
const setupSwagger = require('./swagger/swagger');
const jokeRoutes = require('./routes/jokeRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Configurer Swagger
setupSwagger(app);

// Utiliser les routes de blagues
app.use('/api/jokes', jokeRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


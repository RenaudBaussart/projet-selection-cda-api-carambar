const express = require('express');
const jokeRoutes = require('./routes/jokeRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Use jokes routes
app.use('/api/jokes', jokeRoutes);
pp.use(express.static("./"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

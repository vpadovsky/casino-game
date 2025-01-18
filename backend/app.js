const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { gamesRoutes } = require('./src/routes/games');
const { slotRoutes } = require('./src/routes/slots');
const { currencyRoutes } = require('./src/routes/currency');

const path = require('path');
const app = express();

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route to serve the frontend app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

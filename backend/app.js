const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { gamesRoutes } = require('./src/routes/games');
const { slotRoutes } = require('./src/routes/slots');
const { currencyRoutes } = require('./src/routes/currency');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/games', gamesRoutes);
app.use('/slot', slotRoutes);
app.use('/currency', currencyRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something broke!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});


const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/convert', async (req, res) => {
    const { amount, to } = req.query;
    try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
        const rate = response.data.rates[to.toUpperCase()];
        if (!rate) return res.status(400).send({ message: 'Invalid currency code' });

        const converted = (amount * rate).toFixed(2);
        res.send({ converted, rate });
    } catch (error) {
        res.status(500).send({ message: 'Currency conversion failed', error });
    }
});

module.exports = { currencyRoutes: router };

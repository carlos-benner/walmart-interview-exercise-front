const express = require('express');
const axios = require('axios');

const api = express.Router();

api.get('/:query', (req, res) => {
    const apiUrl = process.env.BACKEND_URL || 'http://localhost:3000';
    axios
        .get(`${apiUrl}/products/search/${req.params.query}`)
        .then((result) => {
            res.json(result.data);
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = api;

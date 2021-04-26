const express = require('express');
const axios = require('axios');

const api = express.Router();

api.get('/:query', (req, res) => {
    const apiUrl = process.env.BACKEND_URL || 'http://localhost:3000';

    if (req.params.query && !isNaN(req.params.query) && req.params.query > 0) {
        axios
            .get(`${apiUrl}/products/${req.params.query}`)
            .then((result) => {
                return res.json([result.data]);
            })
            .catch((err) => {
                return res.status(err.response.status).json(err.response.data);
            });
    } else {
        axios
            .get(`${apiUrl}/products/search/${req.params.query}`)
            .then((result) => {
                return res.json(result.data);
            })
            .catch((err) => {
                return res.status(err.response.status).json(err.response.data);
            });
    }
});

module.exports = api;

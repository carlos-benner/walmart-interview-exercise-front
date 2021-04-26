const express = require('express');
const axios = require('axios');

const api = express.Router();

const productsArray = [
    {
        id: 1,
        brand: 'Samsung',
        description: 'Plasma tv',
        image: './lider-logo.svg',
        price: 1000,
        original_price: 2000,
        discount: 50,
    },
];

api.get('/:query', (req, res) => {
    const apiUrl = process.env.BACKEND_URL || 'http://localhost:3000';
    return res.json(productsArray);
    // axios
    //     .get(`${apiUrl}/products/search/${req.params.query}`)
    //     .then((result) => {
    //         res.json(result.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
});

module.exports = api;

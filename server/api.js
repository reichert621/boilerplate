const express = require('express');

const {Router} = express;
const api = Router();

// To test that the server is up and running
api.get('/ping', (req, res) => res.json({message: 'pong'}));

module.exports = api;

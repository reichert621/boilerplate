require('dotenv').config();

const express = require('express');
const {public, port} = require('./config');
const api = require('./api');

const app = express();

app.use(express.static(public));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

app.listen(port, () => {
  console.log(`🚀  Server listening on port ${port}`);
});

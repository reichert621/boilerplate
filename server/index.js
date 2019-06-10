const express = require('express');
const bodyParser = require('body-parser');
const {public, port} = require('./config');
const api = require('./api');

const app = express();

app.use(express.static(public));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', api);

app.listen(port, () => {
  console.log(`🚀  Server listening on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = new express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/public', express.static('public'));

module.exports = app;
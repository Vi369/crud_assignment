require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', registration);


module.exports = app;
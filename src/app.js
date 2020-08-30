'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Carrega rotas
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(routes);

module.exports = app;
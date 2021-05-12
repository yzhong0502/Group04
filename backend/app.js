const express = require('express');
const app = express();
const db = require('./db');


const AuthController = require('./controllers/AuthController');
app.use('/api/auth', AuthController);

const NewsController = require('./controllers/NewsController');
app.use('/api/news', NewsController);


module.exports = app;

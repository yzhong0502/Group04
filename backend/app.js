const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const AuthController = require('./controllers/AuthController');
app.use('/api/auth', AuthController);

const NewsController = require('./controllers/NewsController');
app.use('/api/news', NewsController);

const QueryController = require('./controllers/QueryController');
app.use('/api/query',QueryController);

module.exports = app;

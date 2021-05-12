//control the news feed flow
const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
// For parsing form
const bodyParser = require('body-parser');
// For generating Token
const jwt = require('jsonwebtoken');
// For encrypting Password
const bcrypt = require('bcryptjs');
// For Secert Token
const config = require('../config');
// For User Schema
const news = require('../models/news');
const session = require('express-session');


router.use(session({secret: 'edurekaSecert1', resave: false, saveUninitialized: true}));

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//add news: api/news/addNews
router.post('/addNews',(req, res) =>{
    news.create()
})

//get news: api/news/getNews
router.get('/getNews',(req, res) =>{
    news.find()
})

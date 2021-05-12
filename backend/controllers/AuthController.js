//control the login/register flow
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
const admin = require('../models/admin');
const session = require('express-session');


router.use(session({secret: 'edurekaSecert1', resave: false, saveUninitialized: true}));

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// api/auth/register
router.post('/register',(req, res) =>{
    admin.findOne();
    admin.create();
})

// api/auth/login
router.post('/login',(req, res) =>{
    admin.findOne();
})

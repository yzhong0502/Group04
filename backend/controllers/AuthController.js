//control the login/register flow
const express = require('express');
const router = express.Router();

// For generating Token
const jwt = require('jsonwebtoken');
// For encrypting Password
const bcrypt = require('bcryptjs');
// For Secert Token
const config = require('../config');
// For admin Schema
const Admin = require('../models/admin');
//const session = require('express-session');


//router.use(session({secret: 'edurekaSecert1', resave: false, saveUninitialized: true}));

// api/auth/register
router.post('/register',(req, res) =>{
    const { name, email, password } = req.body;

    Admin.findOne({ email: email }, (error, doc) => {
        if (error) {
            res.json({ status: "error", message: "Error in DB connection." });
            return false;
        }
        if (doc) {
            res.json({ status: "error", message: "Email already exists" });
            return false;
        } else {
            bcrypt.hash(password, 5, (error, encrypted) => {
                if (error) {
                    res.json({ status: "error", message: "Error in saving record." });
                    return false;
                }
                Admin.create({ name, email, password: encrypted }, (err, doc) => {
                    if (err) {
                        res.json({ status: "error", message: "Error in database."});
                        return false;
                    }
                    //login
                    const token = jwt.sign({ id: doc._id}, config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    res.json({
                        status: "success",
                        message:"Successfully registered and logged in!",
                        data: {
                            _id: doc._id,
                            name: req.body.name,
                            email: req.body.email,
                            token: token
                        }
                    });
                });
            });
        }
    });
})

// api/auth/login
router.post('/login',(req, res) =>{
    const { email, password } = req.body;

    users.findOne({ email: email }, (error, doc) => {
        if (error) {
            res.json({
                status: "error",
                message: "Email and Password combination are incorrect.",
            });
            throw "Error in DB";
        }
        bcrypt.compare(password, doc.password, function (err, result) {
            if (err) {
                res.json({
                    status: "error",
                    message: "Email and Password combination are incorrect.",
                });
                throw "Email and Password combination are incorrect.";
            }
            const token = jwt.sign({ id: doc._id}, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.json({
                status: "success",
                message:"Successfully logged in!",
                data: {
                    _id: doc._id,
                    name: doc.name,
                    email: doc.email,
                    token: token
                },
            });
        });
    });
})

module.exports = router;

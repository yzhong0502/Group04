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
// For news Schema
const news = require('../models/news');
const session = require('express-session');


router.use(session({secret: 'edurekaSecert1', resave: false, saveUninitialized: true}));

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//add news: api/news/addNews
router.post('/addNews',(req, res) =>{
    //verify token
    const { authorization } = req.headers;
    jwt.verify(authorization, config.secret, (errorpayload, payload) => {
        console.log(errorpayload);
        if (errorpayload) {
            res.json({
                status: "error",
                message: "User needs to be logged in to create news.",
            });
            return false;
        }
        news.create(req.body, (err, docs) => {
            if (err) {
                res.json({
                    status: "error",
                    message: "Database error.",
                });
                throw "Error in DB";
            }
            res.json({
                status: "success",
                message: "Successfully created news!",
                data: docs
            });
        })
    })
})

//get news: api/news/getNews
router.get('/getNews',(req, res) =>{
    news.find((err, docs) => {
        if (err) {
            res.json({
                status: "error",
                message: "Database error.",
            });
            throw "Error in DB";
        }
        res.json({
            status:"success",
            message: "Successfully get news!",
            data: docs
        });
    })
})


//edit news: api/news/editNews
router.put('/editNews',(req, res) =>{
    //verify token
    const { authorization } = req.headers;
    jwt.verify(authorization, config.secret, (errorpayload, payload) => {
        console.log(errorpayload);
        if (errorpayload) {
            res.json({
                status: "error",
                message: "User needs to be logged in to edit news.",
            });
            return false;
        }
        const {id, title, description, url, imageUrl, publishedAt } = req.body;
        news.findOneAndUpdate({_id:id},{$set:{title, description, url, imageUrl, publishedAt}},(err, docs) => {
            if (err) {
                res.json({
                    status: "error",
                    message: "Database error.",
                });
                throw "Error in DB";
            }
            res.json({
                status:"success",
                message: "Successfully updated news!",
                data: docs
            });
        })
    })
})

//delete news: api/news/deleteNews
router.delete('/deleteNews',(req, res) =>{
    //verify token
    const { authorization } = req.headers;
    jwt.verify(authorization, config.secret, (errorpayload, payload) => {
        console.log(errorpayload);
        if (errorpayload) {
            res.json({
                status: "error",
                message: "User needs to be logged in to delete news.",
            });
            return false;
        }
        news.findOneAndDelete({_id:req.body._id},(err, docs) => {
            if (err) {
                res.json({
                    status: "error",
                    message: "Database error.",
                });
                throw "Error in DB";
            }
            res.json({
                status:"success",
                message: "Successfully deleted news!",
            });
        })
    })
})

module.exports = router;

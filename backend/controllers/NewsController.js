//control the news feed flow
const express = require('express');
const router = express.Router();
// For generating Token
const jwt = require('jsonwebtoken');
// For Secert Token
const config = require('../config');
// For news Schema
const news = require('../models/news');


//add news: api/news/addNews
// test-passed
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
                    message: "Invalid input.",
                });
                return false;
            }
            if (!docs) {
                res.json({
                    status: "error",
                    message: "Uable to create news.",
                });
                return false;
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
//test-passed
router.get('/getNews',(req, res) =>{
    news.find((err, docs) => {
        if (err) {
            res.json({
                status: "error",
                message: "Database error.",
            });
            return false;
        }
        res.json({
            status:"success",
            message: "Successfully get news!",
            data: docs
        });
    })
})


//edit news: api/news/editNews
// test-passed
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
        const {_id, title, description} = req.body;
        news.findOneAndUpdate({_id},{$set:{title:title, description:description}},(err, docs) => {
            if (err) {
                res.json({
                    status: "error",
                    message: "Database error.",
                });
                return false;
            }
            if (!docs) {
                res.json({
                    status: "error",
                    message: "Fail to edit the news.",
                });
                return false;
            }
            res.json({
                status:"success",
                message: "Successfully updated news!",
                data: req.body
            });
        })
    })
})

//delete news: api/news/deleteNews
//test-passed
router.delete('/deleteNews',(req, res) =>{
    //verify token
    const { authorization } = req.headers;
    jwt.verify(authorization, config.secret, (errorpayload, payload) => {
        //console.log(errorpayload);
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
                return false;
            }
            if (!docs) {
                res.json({
                    status: "error",
                    message: "Can't find such news.",
                });
                return false;
            }
            res.json({
                status:"success",
                message: "Successfully deleted news!",
            });
        })
    })
})

module.exports = router;

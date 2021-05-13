//control the query flow
const express = require('express');
const router = express.Router();

// For query Schema
const Query = require('../models/query');


// api/query/send
// test-passed
router.post('/send',(req, res) =>{
    const {email, query} = req.body;
    Query.create({email, query},(err, doc) => {
        if (err) {
            res.json({ status: "error", message: "Error in database."});
            return false;
        }
        res.json({
            status: "success",
            message: "Successfully sent query!",
            data: {
                id: doc._id,
                email: email,
                query: query,
                date: doc.date,
            },
        });
    })
});

module.exports = router;

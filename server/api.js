'use strict';
const express = require('express');
const router = express.Router();
const dbModels = require('./db.js');

router.get('/api/getArticleList', (req, res) => {
    dbModels.Articles.find(null, 'title date content', (err, doc) => {
        if(err) {
            console.log(err);
        } else if(doc){
            res.send(JSON.stringify(doc));
        }
    })
})
module.exports = router;

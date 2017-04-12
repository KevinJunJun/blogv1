'use strict';
const express = require('express');
const router = express.Router();
const dbModels = require('./db.js');
const querystring = require('querystring');
const url = require('url');

router.get('/api/getArticleList', (req, res) => {
    dbModels.Articles.find(null, 'title date content', (err, doc) => {
        if(err) {
            console.log(err);
        } else if(doc){
            res.send(JSON.stringify(doc));
        }
    })
});
router.get('/api/getArticleDetailById', (req, res) => {
    const query = url.parse(req.url).query;
    const id = querystring.parse(query).id;
    dbModels.Articles.find({_id: id}, 'title data content', (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(data[0]));
        }
    });
})
module.exports = router;

'use strict';
const express = require('express');
const router = express.Router();
const dbModels = require('./db.js');
const querystring = require('querystring');
const url = require('url');

router.get('/api/getArticleList.json', (req, res) => {
    dbModels.Articles.find(null, 'title date content').sort({_id: -1}).exec(
        (err, doc) => {
            if (err) {
                console.log(err);
            } else if (doc) {
                // res.send(JSON.stringify(doc));
                res.status(200).json({ state: 1, result: doc });
            }
        }
    );

});
router.get('/api/getArticleDetailById.json', (req, res) => {
    const query = url.parse(req.url).query;
    const id = querystring.parse(query).id;
    dbModels.Articles.find({ _id: id }, 'title data content', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // res.send(JSON.stringify(data[0]));
            res.status(200).json({ state: 1, result: data[0] });
        }
    });
})
router.post('/api/savePostingArticle.json', (req, res) => {
    if (!req.body.userId) {
        res.status(200).json({ state: 401, message: "用户id不存在，用户未登录。" });
    } else if (!req.body.artitleTitle) {
        res.status(200).json({ state: 402, message: "文章标题不能为空。" });
    } else if (!req.body.articleDetail) {
        res.status(200).json({ state: 403, message: "文章内容不能为空。" });
    } else {
        let article = new dbModels.Articles({ title: req.body.artitleTitle, content: req.body.articleDetail, date: Date.now() })
        article.save((err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("save to DB =============  " + querystring.stringify(req.body));
                res.status(200).json({ state: 1, message: "保存成功" });
            }
        });
    }
})



module.exports = router;

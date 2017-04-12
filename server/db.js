'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    title: String,
    content: String,
    date: Date
});
const Models = {
    Articles: mongoose.model('Articles', articleSchema)
};
mongoose.connect('mongodb://127.0.0.1/blogv1');
const connection = mongoose.connection;
connection.on('error', (err) => {console.log(err);});
connection.once('open', () => {
    console.log('database connected!');
    // let article = new Models.Articles({
    //     title: "title 1 from db",
    //     content: "content 1 from db",
    //     date: Date.now()
    // });
    // article.save((err, article) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log('save success!');
    //     }
    // })

});


module.exports = Models;

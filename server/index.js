'use strict';
const fs = require('fs');
const path = require('path');
const express = require('express');
const api = require('./api.js');
const db = require('./db.js');
const app = express();

app.set('port', (process.env.port || 3000));
app.use(api);
app.get('/', (req, res) => {
    fs.readFile(path.resolve(__dirname, '/index.html'), (err, data) => {
        if(err) {
            res.status(404).send('404 Not Found!');
        } else {
            res.send(data);
        }
    })
})
app.listen(app.get('port'), () => {
    console.log('listen on port: ' + app.get('port'));
})



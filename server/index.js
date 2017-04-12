'use strict';
const fs = require('fs');
const path = require('path');
const morgan =  require('morgan');
const express = require('express');
const api = require('./api.js');
const db = require('./db.js');
const app = express();

app.set('port', (process.env.port || 8888));
app.use(morgan('dev'));
app.use('/static', express.static(path.resolve(__dirname,'../dist/static')));
app.use(api);
app.get('*', (req, res) => {
    let rs = fs.createReadStream(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    rs.on('error', (err) => {
        console.log(err);
        res.status(404).send('404 Not Found!');
    });
    rs.pipe(res);


    // , (err, data) => {
    //     if(err) {
    //         console.log(err);
    //         res.status(404).send('404 Not Found!');
    //     } else {
    //         res.sendFile(data);
    //     }
    // })
});
app.listen(app.get('port'), () => {
    console.log('listen on port: ' + app.get('port'));
})



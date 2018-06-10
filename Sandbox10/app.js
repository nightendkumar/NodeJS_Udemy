'use strict';

const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const data = {
            name: 'Nishant',
            age: 29
        };
        res.end(JSON.stringify(data));
    }
    else if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(1339, '127.0.0.1');
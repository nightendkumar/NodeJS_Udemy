'use strict';

const http = require('http');

const fs = require('fs');

// the supplied callback becomes the event listener code inside
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Option 1
    // var htmlContent = fs.readFile(__dirname + '/index.htm', function(err, data){
    //     res.write(data);
    //     res.end();
    // });


    // Option 2
    // var htmlContent = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    // htmlContent = htmlContent.replace('{Message}', 'My name is Nishant Kumar');
    // res.end(htmlContent);


    // res.end('Hello World !!! \n');

    // Option 3
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
   
}).listen(1338, '127.0.0.1');
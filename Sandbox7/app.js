'use strict';
const fs = require('fs');

var readableStream = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8',
    highWaterMark: 32 * 1024
});

var writeableStream = fs.createWriteStream(__dirname + '/greetcopy.txt', {
    encoding: 'utf8',
    highWaterMark: 4 * 1024
});

// writeableStream.on('drain', function(){
//     console.log('data written event');
// });

readableStream.on('data', function (chunk) {
    console.log(chunk.length);

    writeableStream.write(chunk, function () {
        console.log('data written');
    })
});


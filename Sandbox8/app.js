'use strict';
const fs = require('fs');
const zlib =  require('zlib');

var readableStream = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8',
    highWaterMark: 32 * 1024
});

var writeableStream = fs.createWriteStream(__dirname + '/greetcopy.txt', {
    encoding: 'utf8',
    highWaterMark: 4 * 1024
});

var compressedWritableStream = fs.createWriteStream(__dirname + '/greetcopy.txt.gz', {
    encoding: 'utf8',
    highWaterMark: 4 * 1024
});

var gzip = zlib.createGzip();

// readableStream.pipe(writeableStream);
readableStream.pipe(gzip).pipe(compressedWritableStream);
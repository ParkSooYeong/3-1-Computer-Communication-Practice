/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 29 */

const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./3-1-3-28 readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./3-1-3-29 readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);

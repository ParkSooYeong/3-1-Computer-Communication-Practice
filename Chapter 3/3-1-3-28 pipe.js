/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 28 */

const fs = require('fs');

const readStream = fs.createReadStream('3-1-3-28 readme4.txt');
const writeStream = fs.createWriteStream('3-1-3-28 writeme3.txt');
readStream.pipe(writeStream);

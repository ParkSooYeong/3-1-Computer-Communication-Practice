/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 23 */

const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./3-1-3-22 readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./3-1-3-22 readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./3-1-3-22 readme2.txt');
console.log('3번', data.toString());
console.log('끝');

/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 14 */

const url = require('url');

const URL = url.URL;
const myURL = new URL('https://github.com/ParkSooYeong');
console.log('new URL() : ', myURL);
console.log('url.format() : ', url.format(myURL));
console.log('------------------------------');
const parsedUrl = url.parse('https://github.com/ParkSooYeong');
console.log('url.parse() : ', parsedUrl);
console.log('url.format() : ', url.format(parsedUrl));

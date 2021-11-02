/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 16 */

const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://github.com/ParkSooYeong');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse() : ', query);
console.log('querystring.stringify() : ', querystring.stringify(query));

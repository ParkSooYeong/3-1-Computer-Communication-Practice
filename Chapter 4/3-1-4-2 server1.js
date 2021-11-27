/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 4 , Number 2 */

const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
});

/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 4 , Number 3 */

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./3-1-4-3 server2.html', (err, data) => {
        if(err)
        {
            throw err;
        }
        res.end(data);
    });
}).listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
});

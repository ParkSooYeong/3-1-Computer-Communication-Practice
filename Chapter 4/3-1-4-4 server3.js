/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 4 , Number 4 */

const http = require('http');

/* 문자열 name=SooYoung;year=1998 ->
{name : 'SooYoung', year : '1998'} 객체 */

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200, { 'Set-Cookie' : 'mycookie=test' });
    res.end('Hello Cookie');
})
    .listen(8082, () => {
        console.log('8082번 포트에서 서버 대기중입니다!');
    });

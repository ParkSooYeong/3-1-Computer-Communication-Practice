/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 24 */

const fs = require('fs');

console.log('시작');
fs.readFile('./3-1-3-22 readme2.txt', (err, data) => {
    if(err)
    {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./3-1-3-22 readme2.txt', (err, data) => {
        if(err)
        {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./3-1-3-22 readme2.txt', (err, data) => {
            if(err)
            {
                throw err;
            }
            console.log('3번', data.toString());
        });
    });
});
console.log('끝');

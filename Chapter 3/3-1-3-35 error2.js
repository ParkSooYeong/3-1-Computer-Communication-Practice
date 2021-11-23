/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 35 */

const fs = require('fs');

setInterval(() => {
    fs.unlink('./3-1-3-35 abcdefg.js', (err) => {
        if(err)
        {
            console.error(err);
        }
    });
}, 1000);

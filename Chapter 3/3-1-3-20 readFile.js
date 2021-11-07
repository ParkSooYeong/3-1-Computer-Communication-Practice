/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 20 */

const fs = require('fs');

fs.readFile('./3-1-3-20 readme.txt', (err, data) => {
    if(err)
    {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

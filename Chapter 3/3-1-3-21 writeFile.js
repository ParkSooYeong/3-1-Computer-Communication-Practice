/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 21 */

const fs = require('fs');

fs.writeFile('./3-1-3-21 writeme.txt', '글이 입력됩니다.', (err) => {
    if(err)
    {
        throw err;
    }
    fs.readFile('./3-1-3-21 writeme.txt', (err, data) => {
        if(err)
        {
            throw err;
        }
        console.log(data.toString());
    });
});

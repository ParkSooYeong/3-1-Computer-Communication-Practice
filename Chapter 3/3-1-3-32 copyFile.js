/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 32 */

const fs = require('fs');

fs.copyFile('3-1-3-28 readme4.txt', '3-1-3-32 writeme4.txt', (error) => {
    if(error)
    {
        return console.error(error);
    }
    console.log('복사 완료');
});

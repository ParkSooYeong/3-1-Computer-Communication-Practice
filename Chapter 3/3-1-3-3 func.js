/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 3 */

const { odd, even } = require('./3-1-3-2 var');

function checkOddOrEven(num)
{
    if(num % 2) // 홀수면
    {
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;

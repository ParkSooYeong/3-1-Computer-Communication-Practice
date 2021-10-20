/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 4 */

const { odd, even } = require('./3-1-3-2 var');
const checkNumber = require('./3-1-3-3 func');

function checkStringOddOrEven(str)
{
    if(str.length % 2) // 홀수면
    {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('Hello'));

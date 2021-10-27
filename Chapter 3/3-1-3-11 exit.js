/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 11 */

let i = 1;
setInterval(() => {
    if(i === 5)
    {
        console.log('종료!');
        process.exit();
    }
    console.log(i);
    i += 1;
}, 1000);

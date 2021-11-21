/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 34 */

setInterval(() => {
    console.log('시작');
    try
    {
        throw new Error('서버를 고장내주마!');
    }
    catch(err)
    {
        console.error(err);
    }
}, 1000);

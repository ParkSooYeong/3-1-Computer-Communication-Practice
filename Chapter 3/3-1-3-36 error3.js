/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 36 */

process.on('uncaughtException', (err) => {
    console.log('예기치 못한 에러', err);
    console.log('서버 에러');
    // process.exit();
});

setInterval(() => {
    throw new Error('서버를 고장내주마!');
}, 1000);

/*
setTimeout(() => {
    console.log('실행됩니다.');
}, 2000);
*/

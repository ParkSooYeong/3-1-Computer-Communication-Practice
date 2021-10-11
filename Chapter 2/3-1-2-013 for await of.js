/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 2 , Number 13 */

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async() => {
    for await (promise of [promise1, promise2])
    {
        console.log(promise);
    }
})();

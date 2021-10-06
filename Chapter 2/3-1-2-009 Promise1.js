/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 2 , Number 9 */

const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if(condition)
    {
        resolve('성공');
    }
    else
    {
        reject('실패');
    }
});

promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
        // console.log(message); // 성공(resolve)한 경우 실행
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error(error); // 실패(reject)한 경우 실행
    });

/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 25 */

const buffer = Buffer.from('abcde\n');
console.log('from() : ', buffer);
console.log('length : ', buffer.length);
console.log('toString() : ', buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat() : ', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc() : ', buffer3);

/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 27 */

const fs = require('fs');

const writeStream = fs.createWriteStream('./3-1-3-27 writeme2.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\r\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();

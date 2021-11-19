/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 31 */

const fs = require('fs');

fs.readdir('./3-1-3-30 folder', (err, dir) => {
    if(err)
    {
        throw err;
    }
    console.log('폴더 내용 확인', dir);
    fs.unlink('./3-1-3-30 folder/3-1-3-30 newFile.js', (err) => {
        if(err)
        {
            throw err;
        }
        console.log('파일 삭제 성공');
        fs.rmdir('./3-1-3-30 folder', (err) => {
            if(err)
            {
                throw err;
            }
            console.log('폴더 삭제 성공');
        });
    });
});

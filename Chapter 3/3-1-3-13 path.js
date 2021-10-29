/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 3 , Number 13 */

const path = require('path');

const string = __filename;

console.log('path.sep : ', path.sep);
console.log('path.delimiter : ', path.delimiter);
console.log('------------------------------');
console.log('path.dirname() : ', path.dirname(string));
console.log('path.extname() : ', path.extname(string));
console.log('path.basename() : ', path.basename(string));
console.log('path.basename - extname : ', path.basename(string, path.extname(string)));
console.log('------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format() : ', path.format({
  dir : 'C:\\Users\\user\\VSC-workspace\\3-1 CCP',
  name : '3-1-3-13 path',
  ext : '.js',
}));
console.log('path.normalize() : ', path.normalize('C://Users\\\\user\\\VSC-workspace\\3-1 CCP'));
console.log('------------------------------');
console.log('path.isAbsolute(C:\\) : ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home) : ', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative() : ', path.relative('C:\\Users\\user\\VSC-workspace\\3-1 CCP\\3-1-3-13 path.js', 'C:\\'));
console.log('path.join() : ', path.join(__dirname, '..', '..', '/VSC-workspace', '.', '/3-1 CCP'));
console.log('path.resolve() : ', path.resolve(__dirname, '..', '..', 'VSC-workspace', '.', '/3-1 CCP'));

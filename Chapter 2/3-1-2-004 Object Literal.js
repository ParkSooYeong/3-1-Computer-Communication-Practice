/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 2 , Number 4 */

var sayNode = function()
{
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS : function()
    {
        console.log('JS');
    },
    sayNode : sayNode,
};
oldObject[es + 6] = 'Fantastic';

oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); // Fantastic

const newObject = {
    sayJS()
    {
        console.log('JS');
    },
    sayNode,
    [es + 6] : 'Fantastic',
};

newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic

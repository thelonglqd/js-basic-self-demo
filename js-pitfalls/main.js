// array index
var myArray = [];
console.log('length of array: ', myArray.length);
myArray[100] = 'some value';
console.log(myArray.length);
console.log(myArray[0]);
console.log('=====================');
// delete operator
// avoid to use delete operator on array, use splice/pop/shift instead
myArray = ['a', 'b', 'c', 'd'];
delete myArray[1];
console.log(myArray[1]); // output undefined
console.log(myArray.length); // output is still 4
myArray = [12, 13, 14, 15, 16];
myArray.splice(2, 1); // recommended to remove array element
console.log(myArray);
console.log(myArray.length);
console.log('=====================');
// array sorting issue
myArray = [80, 9, 34, 23, 5, 1];
myArray.sort(); // without compare function, all number in my array will be converted to string then comparing
console.log(myArray); // weird output [ 1, 23, 34, 5, 80, 9 ]
myArray = [80, 9, 34, 23, 5, 1];
myArray.sort(function (a, b) { // the right way
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
});
console.log(myArray);
console.log('=====================');
// typeof operator does not distinguish between an array and any other object
console.log(typeof []); // output 'object'
console.log(typeof {}); // output 'object'
function check_array (value) {
    return value && typeof value === 'object' && value.constructor === Array;
}
console.log(check_array([])); // true
console.log(check_array({})); // false
function check_array_toString (value) {
    return Object.prototype.toString.apply(value) === '[object Array]';
}
console.log(check_array_toString([])); // true
console.log(check_array_toString({})); // false
console.log('=====================');
// unexpected properties from the prototype chain
Array.prototype.foo = "bar";

myArray = [1, 2, 3];
var result = [];

for (var key in myArray) {
    console.log(key);
}
console.log('=====================');
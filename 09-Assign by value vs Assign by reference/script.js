var c = [1, 2, 3];
var d = c; // assign by reference: both of them are references to the same block in heap
d.push(4);

console.log(c); // [1,2,3,4]
console.log(d); // [1,2,3,4]

var a = 5;
var b = a; // assign by value: it creates a new copy of the value and stores it.

b++;
console.log(a); // 5
console.log(b); // 6

//---------------------------------------------------------

let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me',
  },
};
// 3 ways to clone an object
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));

console.log('original obj:', obj);
obj.c.deep = 'hahaha';
console.log('obj after change:', obj);
console.log('clone new obj with assign:', clone);
console.log('clone new obj with ...:', clone2);
console.log('clone new obj with json:', superClone);

//-----------------------------------------------------------

// note: JavaScript passes all arguments to a function by value.

const number = 100;
const string = 'Jay';
let obj1 = {
  value: 'a',
};
let obj2 = {
  value: 'b',
};
let obj3 = obj2;

function change(number, string, obj1, obj2) {
  // the arguments are new copy of original
  // when we change value that is no effect to variable in global
  number = number * 10;
  string = 'Pete';
  obj1 = obj2;
  obj2.value = 'c';
}

change(number, string, obj1, obj2);

//Guess the outputs here before you run the code:
console.log(number);
console.log(string);
console.log(obj1.value);

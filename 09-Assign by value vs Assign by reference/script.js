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

// primitive types pass by value and objects pass by reference

//---------------------------------------------------------

// clone an array
var c = [1, 2, 3];
var d = [].concat(c);
d.push(4);

console.log(c); // [1,2,3]
console.log(d); // [1,2,3,4]

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

console.log('original obj:', obj); // { a: 'a', b: 'b', c: { deep: 'try and copy me' } }
obj.c.deep = 'hahaha';
obj.a = 'aaaaa';
console.log('obj after change:', obj); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log('clone new obj with assign:', clone); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log('clone new obj with ...:', clone2); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log('clone new obj with json:', superClone); // { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

//-----------------------------------------------------------

// note: JavaScript passes all arguments to a function by value.
// https://www.javascripttutorial.net/javascript-pass-by-value/#:~:text=JavaScript%20pass%20by%20value%20or,arguments%20inside%20of%20the%20function.

const number = 100;
const string = 'Jay';
let obj1 = {
  value: 'a',
};
let obj2 = {
  value: 'b',
};
let obj3 = obj2;

let arr = [1, 2, 3, 4, 5];

function change(number, string, _obj1, _obj2, _arr) {
  // the arguments are new copy of original
  // when we change value that is no effect to variable in global
  number = number * 10;
  string = 'Pete';
  //_obj1 = _obj2;
  //_obj1.value = 'd';
  // _obj1 is a copy of obj1 in the next line we change the reference of _obj1 to another object in the heap
  _obj1 = {
    value: 'e',
  };
  // _obj2 is also a copy of obj2 but in the next line we change the value from original reference in the heap
  _obj2.value = 'c';
  console.log('obj1 inside function: ', _obj1); // { value: 'e' }
  _arr.push(6);
  console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
}

change(number, string, obj1, obj2, arr);

//Guess the outputs here before you run the code:
console.log(number); // 100
console.log(string); // Jay
console.log(obj1.value); // a
console.log(obj2.value); // c
console.log(obj3.value); // c
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

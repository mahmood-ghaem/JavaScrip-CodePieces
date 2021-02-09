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

console.log('original obj:', obj); // { a: 'a', b: 'b', c: { deep: 'try and copy me' } }
obj.c.deep = 'hahaha';
console.log('obj after change:', obj); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log('clone new obj with assign:', clone); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log('clone new obj with ...:', clone2); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log('clone new obj with json:', superClone); // { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

//-----------------------------------------------------------

// this part is not correct needs more research
// this part is not correct needs more research
// this part is not correct needs more research
// this part is not correct needs more research
// this part is not correct needs more research
// this part is not correct needs more research
// this part is not correct needs more research
// this part is not correct needs more research
// this part is not correct needs more research
// this part is not correct needs more research

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

let arr = [1, 2, 3, 4, 5];

function change(number, string, _obj1, _obj2, _arr) {
  // the arguments are new copy of original
  // when we change value that is no effect to variable in global
  number = number * 10;
  string = 'Pete';
  //_obj1 = _obj2;
  //_obj1.value = 'd';
  _obj1 = {
    value: 'e',
  };
  _obj2.value = 'c';
  console.log('obj1 inside function: ', _obj1); // { value: 'c' }
  _arr.push(6);
  console.log(arr); // { value: 'c' }
}

change(number, string, obj1, obj2, arr);

//Guess the outputs here before you run the code:
console.log(number);
console.log(string);
console.log(obj1.value);
console.log(obj2.value); // I can not understand this, that is effect to variable in global
console.log(obj3.value);
console.log(arr);

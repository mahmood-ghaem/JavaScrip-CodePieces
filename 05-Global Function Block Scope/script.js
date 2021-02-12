// Weird Javascript #1 - it asks global scope for height. Global scope says: ummm... no but here I just created it for you.
// ps this isn't allowed in strict mode. We call this leakage of global variables.
function weird() {
  height = 50;
}

var heyhey = function doodle() {
  // code here
};

heyhey();
doodle(); // Error! because it is enclosed in its own scope.

//----------------------------------------

//Function Scope
function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
loop();

//-----------------------------------------

//Block Scope
function loop2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // error because can not access to i
}
loop2();

//-----------------------------------------

// In JavaScript variable declared with var keyword scoped to nearest function not always to global
function testFunc() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('inside function', i);
}
console.log('outside function', i); // we have error here

testFunc();

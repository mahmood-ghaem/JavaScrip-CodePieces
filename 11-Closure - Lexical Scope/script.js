/*
The scope is what rules the accessibility of variables in JavaScript. There can be a function or a block scope.
The lexical scope allows a function scope to access statically the variables from the outer scopes.
Finally, a closure is a function that captures variables from its lexical scope. In simple words, 
the closure remembers the variables from the place where it is defined, no matter where it is executed.
Closures capture variables inside event handlers, callbacks. They’re used in functional programming. 
Moreover, you could be asked how closures work during a Frontend job interview.
Every JavaScript developer must know how closures work. Deal with it
*/

function a() {
  let grandpa = 'grandpa';
  return function b() {
    let father = 'father';
    return function c() {
      let son = 'son';
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

a();

//---------------------------------------------------------------------

//closures and higher order function
function boo(string) {
  return function (name) {
    return function (name2) {
      console.log(`hi ${name2}`);
    };
  };
}

const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`);

boo('hi')('john')('tanya');

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
booString = boo2('sing');
booStringName = booString('John');
booStringNameName2 = booStringName('tanya');

/*
Lexical Scope
JavaScript follows Lexical scoping for functions. 
Lexical scope means any child’s scope has access to the 
variables defined in parent’s scope i.e. inner functions 
can access the global variables.

Closure
The inner function holds the outerValue even after 
the outer function is closed, this is called closure.
*/
function outerFunction() {
  var variable1 = 'ney vatsa';
  const variable2 = 'shashank jha';
  let variable3 = 'huda';

  function innerFunction() {
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);
  }
  innerFunction();
}
outerFunction();

// ney vatsa
//shashank jha
//huda

//----------------------------------------------------------------------

function callMeMaybe() {
  const callMe = 'Hi!';
  setTimeout(function () {
    console.log(callMe);
  }, 4000);
}

callMeMaybe();

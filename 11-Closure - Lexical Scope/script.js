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
  //const callMe = 'Hi!';           It doesn't matter before or after, here is the same as top
}

callMeMaybe();

//----------------------------------------------------------------------
// Benefit of Closure
// 1-Memory Efficient
function heavyDuty(item) {
  const bigArray = new Array(7000).fill('😄');
  console.log('created!');
  return bigArray[item];
}

heavyDuty(699);
heavyDuty(699);
heavyDuty(699);
// here big array created 3 times

function heavyDuty2() {
  const bigArray = new Array(7000).fill('😄');
  console.log('created Again!');
  return function (item) {
    return bigArray[item];
  };
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(699);
getHeavyDuty(699);
getHeavyDuty(699);
// but here just one time big array created

// 2- Encapsulation
// example 1 part 1
const makeNuclearButton_withLaunchAccess = () => {
  let timeWithoutDestruction = 0;

  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;

  const launch = () => {
    timeWithoutDestruction = -1;
    console.log('💥');
    return '💥';
  };

  setInterval(passTime, 1000);

  return { totalPeaceTime, launch };
};

const ww3 = makeNuclearButton_withLaunchAccess();
ww3.totalPeaceTime();
ww3.launch(); // here we can call launch function

// example 1 part 2
const makeNuclearButton_withOutLaunchAccess = () => {
  let timeWithoutDestruction = 0;

  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;

  const launch = () => {
    timeWithoutDestruction = -1;
    console.log('💥');
    return '💥';
  };

  setInterval(passTime, 1000);

  return { totalPeaceTime };
};

const ww3 = makeNuclearButton_withOutLaunchAccess();
ww3.totalPeaceTime();
//ww3.launch(); // here we can not call launch function

//-------------------------------------------------------------------------

// example 2 part 1
const userStart = () => {
  let startVariable = false;
  const hideInit = () => {
    if (!startVariable) {
      console.log('web page started!');
      startVariable = true;
    }
  };
  const init = () => {
    console.log('init for user started!');
    hideInit();
  };
  return { init };
};
const startWeb = userStart();
startWeb.init();

// example 2 part 2
function userStart() {
  let startVariable = false;
  return function () {
    if (!startVariable) {
      console.log('web page started!');
      startVariable = true;
    } else {
      return;
    }
  };
}
const startWeb = userStart();
startWeb();

//-------------------------------------------------------------------------

// question 1 change the code to achieve:
// I am at index 0
// I am at index 1
// I am at index 2
// I am at index 3

const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('I am at index ' + i);
  }, 3000);
}

// use let instead var to change to block scope
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('I am at index ' + array[i]);
  }, 3000);
}

// use immediately run function and use closure
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log('I am at index ' + array[closureI]);
    }, 3000);
  })(i);
}

//--------------------------------------------------------------------

const closure = function () {
  let count = 55;
  return function getCounter() {
    return count;
  };
};

const getCounter = closure();
console.log(getCounter());

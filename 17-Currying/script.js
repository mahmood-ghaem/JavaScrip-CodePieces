// Currying
// currying says I expect one argument at a time.

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(5)(20);
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(20);

//-----------------------------------------------------

// Normal function
function greet(greeting, name) {
  return `${greeting} ${name}`;
}

// Curry function
function curryGreet(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

const welcomeGreeting = curryGreet('Welcome!');

welcomeGreeting('Mahmood');
welcomeGreeting('Reza');

greet('Welcome', 'Mahmood');
greet('Welcome', 'Reza');

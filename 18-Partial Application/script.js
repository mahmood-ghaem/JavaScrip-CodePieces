// Partial Application
// partial application says on the second call I expect all the arguments

const multiply = (a, b, c) => a * b * c;
//const curriedMultiply = (a) => (b) => (c) => a * b;
//curriedMultiply(5)(10)(20);
const partialMultiplyBy5 = multiply.bind(null, 5);
partialMultiplyBy5(10, 20);

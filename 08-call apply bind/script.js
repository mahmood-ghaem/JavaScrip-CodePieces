//call and apply are useful for borrowing methods from an object while bind is useful for us to call
//functions later on with a certain context or certain this keyword.

//That's pretty cool so choosing which one to use call or apply just depends on which one is easier to
//pass the arguments and just decide whether it's easier to pass array of parameters or comma separated
const wizard = {
  name: 'Merlin',
  health: 100,
  heal: function (num1, num2) {
    this.health += num1 + num2;
  },
};

const archer = {
  name: 'Mahmood',
  health: 50,
};

console.log(archer);
wizard.heal.call(archer, 50, 60);
console.log(archer);
wizard.heal.apply(archer, [20, 30]);
console.log(archer);

// function borrowing
const healArcher = wizard.heal.bind(archer, 50, 60);
console.log(archer);
healArcher();
console.log(archer);

//-----------------------------------------------------

const array = [1, 2, 3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
  //return Math.max.call(null, 1, 2, 3);
}

console.log(getMaxNumber(array));

//-----------------------------------------------------

//bind() and currying
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));

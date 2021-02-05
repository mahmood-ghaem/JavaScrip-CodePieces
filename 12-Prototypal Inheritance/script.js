let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard = {
  name: 'Kiki',
  fight() {
    return 1;
  },
};
// Don't do this, bad performance. Show with bind.
lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard);
console.log(lizard.fire);
console.log(lizard.sing());
const lizardFire = dragon.sing.bind(lizard);
console.log(lizardFire());

//---------------------------------------------------------------

//Every Prototype chain links to a prototype object{}
function multiplyBy5(num) {
  return num * 5;
}

// multiplyBy5.__proto__
// Function.prototype
// multiplyBy5.__proto__.__proto__
// Object.prototype
// multiplyBy5.__proto__.__proto__.__proto__
// typeof Object
// typeof {}

//---------------------------------------------------------------

let person = {
  name: '',
  walk() {
    console.log(`${this.name} is walking.`);
  },
  talk() {
    console.log(`${this.name} is talking.`);
  },
};

//let mahmood = Object.create(person);

let mahmood = {
  name: 'mahmood',
  sport() {
    console.log(`${this.name} is sporting.`);
  },
};

// mahmoodTalk = person.talk.bind(mahmood);
// mahmoodTalk();

mahmood.__proto__ = person;

mahmood.sport();
mahmood.talk();

console.log(person.isPrototypeOf(mahmood));

for (const key in mahmood) {
  //if (Object.hasOwnProperty.call(mahmood, key)) {
  const element = mahmood[key];
  console.log(element);
  //}
}

//---------------------------------------------------------------

// Create our own prototypes:
var human = { mortal: true };
var socrates = Object.create(human);
human.isPrototypeOf(socrates); // true
console.log(socrates.mortal);

//---------------------------------------------------------------

//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

Date.prototype.getLastYear = function () {
  return this.getFullYear() - 1;
};

const myDate = new Date('2020-10-10');

console.log(myDate.getLastYear());
//'1899'

Array.prototype.map = function () {
  const tmpArray = [];
  this.forEach((element) => {
    tmpArray.push(element + '🗺');
  });
  return tmpArray;
};
debugger;
console.log([1, 2, 3].map());

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
//console.log([1,2,3].map())
//1🗺, 2🗺, 3🗺

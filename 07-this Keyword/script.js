//this
//this refers to the object that the function is a property of
//benefit
// 1: gives methods access to their object
// 2: execute same code for multiple objects

const obj = {
  name: 'Billy',
  sing: function () {
    return 'llala ' + this.name + '!';
  },
  singAgain: function () {
    return this.sing();
  },
};

const objInstance1 = Object.create(obj);

objInstance1.name = 'Mahmood';

console.log(objInstance1.sing());
console.log(objInstance1.singAgain());

//--------------------------------------------------------------

function importantPerson() {
  console.log(this.name);
}

const name = 'Sunny';
const obj1 = { name: 'Cassy', importantPerson: importantPerson };
const obj2 = { name: 'Jacob', importantPerson: importantPerson };

obj1.importantPerson();
obj2.importantPerson();

//----------------------------------------------------------------

const a = function () {
  console.log('a', this); //refer to window
  const b = function () {
    console.log('b', this); //refer to window
    const c = {
      hi: function () {
        console.log('c', this); //refer to c object
      },
    };
    c.hi();
  };
  b(); // this is important who called b window.a(b());
};

a();

//------------------------------------------------------------------

//JS is weird:
const obj = {
  name: 'Billy',
  sing: function () {
    console.log('a', this); // here this refer to obj
    var anotherFunc = function () {
      console.log('b', this); // this points to windows!
    };
    anotherFunc();
    // who call this function that is sing function, by default js consider window
    // if there is not an object x.function if x is an object this refers to that object
    // else by default x is window
  },
};
obj.sing();

// to fix this issue
//1:
const obj = {
  name: 'Billy',
  sing: function () {
    console.log('a', this);
    var anotherFunc = () => {
      console.log('b', this);
    };
    anotherFunc();
  },
};
obj.sing();

//2:
const obj = {
  name: 'Billy',
  sing: function () {
    console.log('a', this);
    var anotherFunc = function () {
      console.log('b', this);
    };
    return anotherFunc.bind(this);
  },
};
obj.sing()();

//3:
const obj = {
  name: 'Billy',
  sing: function () {
    console.log('a', this);
    var self = this;
    var anotherFunc = function () {
      console.log('b', self);
    };
    return anotherFunc;
  },
};
obj.sing()();

//-----------------------------------------------------

var b = {
  name: 'jay',
  say() {
    console.log('b', this); // refer to b object
  },
};

var c = {
  name: 'jay',
  say() {
    return function () {
      console.log('c', this); // refer to global or window
    };
  },
};

var d = {
  name: 'jay',
  say() {
    return () => console.log('d', this); // refer to d object
  },
};

b.say();
c.say()();
d.say()();

//--------------------------------------------------------

//test:
const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

//solution 1:
const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log('?', giveMeTheCharacterNOW());

//solution 2:
const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter();

console.log('?', giveMeTheCharacterNOW);
console.log('?', character.getCharacter());

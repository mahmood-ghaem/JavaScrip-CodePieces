//factory functions

function createElf(name, weapon) {
  //we can also have closures here to hide properties from being changed.
  return {
    name,
    weapon,
    attack() {
      console.log('attack with ' + weapon);
      return 'attack with ' + weapon;
    },
  };
}
const peter = createElf('Peter', 'stones');
peter.attack();
const sam = createElf('Sam', 'fire');
sam.attack();

//=============================================================

// to avoid same functionality in Multiple object to efficient memory
// in previous sample if we have 1000 object, also we have thousand attack function in our memory
// While this method prevents the existence of the same and a lot of information in memory

const elfFunctions = {
  attack() {
    console.log('attack with ' + this.weapon);
    return 'attack with ' + this.weapon;
  },
};

function createElf(name, weapon) {
  return {
    name,
    weapon,
  };
}
const peter = createElf('Peter', 'stones');
peter.attack = elfFunctions.attack;
peter.attack();
const sam = createElf('Sam', 'fire');
sam.attack = elfFunctions.attack;
sam.attack();

//=============================================================

//Object.create()

const elfFunctions = {
  attack: function () {
    return 'attack with ' + this.weapon;
  },
};
function createElf(name, weapon) {
  newElf = Object.create(elfFunctions);
  console.log(newElf);
  console.log(newElf.__proto__);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');
console.log(sam.attack());
console.log(peter.attack());

//=============================================================

//Constructor Functions

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return 'attack with ' + this.weapon;
};
const sam = new Elf('Sam', 'bow');
const peter = new Elf('Peter', 'fire');
console.log(sam.attack());
console.log(peter.attack());

//=============================================================

// class
// in JavaScript, class keyword is still just prototype and inheritance.
// some people call this pseudo classical inheritance because it's not real classical inheritance.

class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'attack with ' + this.weapon;
  }
}

const fiona = new Elf('Fiona', 'ninja stars');
console.log(fiona instanceof Elf); // true
const ben = new Elf('Ben', 'bow');
console.log(fiona.attack());

//=============================================================

// Inheritance
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'attack with ' + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    // console.log('what am i?', this); this gives an error
    // because this keyword means after call super class constructor
    super(name, weapon);
    console.log('what am i?', this);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    // this is like extending our prototype.
    return 'strongest fort in the world made';
  }
}

const houseElf = new Elf('Dolby', 'cloth', 'house');
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green');
shrek.makeFort();

console.log(Ogre.isPrototypeOf(shrek)); // false
console.log(Ogre.prototype.isPrototypeOf(shrek)); //true

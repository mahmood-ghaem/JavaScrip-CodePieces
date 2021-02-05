const giveAccessTo = (name) => 'Access Granted to ' + name;

function authenticate(person) {
  let array = [];
  // you can add checks here for person.level
  for (let i = 0; i < 50000; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}

function letPerson(person, fn) {
  // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
  if (person.level === 'admin') {
    return fn(person);
  } else if (person.level === 'user') {
    return fn(person);
  }
}

function sing(person) {
  return 'la la la my name is ' + person.name;
}

letPerson({ level: 'user', name: 'Tim' }, sing);

//--------------------------------------------------------------

// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...
const multiplyBy = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4);

// same:
const multiplyBy = (num1) => (num2) => num1 * num2;

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
multiplyByTwo(4); // this line means multiplyBy(2)(4) so num1 is 2 and num2 is 4
multiplyByFive(3);

//--------------------------------------------------------------------

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
const time2p2 = 
timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func,val)=>{
let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry;
    } else {
        return 'This function returned inconsistent results';
    }
}

checkConsistentOutput(addTwo,5);

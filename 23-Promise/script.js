const executorFunc = (firstName) => (resolve, reject) => {
  if (firstName) {
    resolve(firstName);
  } else {
    reject(new Error("You didn't pass in a first name!"));
  }
};
const getAnonName = (firstName) => {
  const anonName = new Promise(executorFunc(firstName));
  return anonName;
};
getAnonName('jon').then(console.log);

//==========================================================================

const rollDice = (dice) => {
  return new Promise((resolve, reject) => {
    if (!dice) reject(new Error('Please select a number!'));
    else resolve(dice + 1);
  });
};

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  const promises = dices.map((dice) => rollDice(dice));
  return Promise.all(promises);
}

rollTheDices()
  .then((results) => console.log('Resolved!', results))
  .catch((error) => console.log('Rejected!', error.message));

//==========================================================================

function rollDice() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Dice scheduled for ${randomRollsToDo} rolls...`);
    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Dice value is now: ${value}`);
      if (roll > 6) {
        reject(new Error('Oops... Dice rolled off the table.'));
      }
      if (roll === randomRollsToDo) {
        resolve(`Success! Dice settled on ${value}.`);
      }
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };
    rollOnce(1);
  });
}

rollDice()
  .then(console.log)
  .catch((error) => console.log(error.message));

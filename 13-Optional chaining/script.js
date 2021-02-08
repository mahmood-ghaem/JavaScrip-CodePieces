const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

//---------------------------------------------------------------------

const charmander = {
  name: 'charmander',
  type: [
    {
      type: {
        name: 'fire',
        url: 'www.google.com',
      },
    },
  ],
};

console.log(charmander); // { name: 'charmander', type: [ { type: [Object] } ] }
console.log(charmander.name); // charmander
console.log(charmander.type[0].type.name); // fire
//console.log(charmander.type[1].type.name); // we get error!
console.log(charmander.type[1]?.type.name); // undefined
// if left side of ?. nullish then return undefined and program does not crash
// else return right side of ?.
console.log(charmander.move?.()); // undefined

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

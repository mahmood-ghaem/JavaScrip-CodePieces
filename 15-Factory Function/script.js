//factory functions
function createElf(name, weapon) {
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

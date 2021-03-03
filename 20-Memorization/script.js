// Memorization
function addTo80(n) {
  return n + 80;
}

addTo80(5);

let cache = {};
function memorizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

console.log(1, memorizeAddTo80(5));
console.log(1, memorizeAddTo80(5));
console.log(1, memorizeAddTo80(5));
console.log(cache);
console.log('-----------');
console.log(2, memorizeAddTo80(6));
console.log(2, memorizeAddTo80(6));
console.log(2, memorizeAddTo80(6));
console.log(cache);

//-----------------------------------------------------------------------

// let's make that better with no global scope. This is closure in javascript so.

function memorizeAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
}

const memorized = memorizeAddTo80();

console.log(1, memorized(5));
console.log(1, memorized(5));
console.log(1, memorized(5));
console.log('-----------');
console.log(2, memorized(6));
console.log(2, memorized(6));
console.log(2, memorized(6));

a();
console.log(one); // undefined
// we can use one but that is undefined until we assign a value for that there is no error because hoisting
// Hoisting bring all variable in scope (in this sample global) to the top so we can call but that is undefined.
// if we use let or const we can not call a variable before assign a value
var one = 1;
var one = 2;
function a() {
  console.log('hi');
}

function a() {
  console.log('bye');
}

//------------------------------------------

var favoriteFood = 'grapes';

var foodThoughts = function () {
  console.log('Original favorite food: ' + favoriteFood); // Original favorite food: undefined
  // in line 20 we declare favoriteFood so hoisting happened.
  // in this function we have favoriteFood but until line 20 that is undefined

  var favoriteFood = 'sushi';

  console.log('New favorite food: ' + favoriteFood); // Original favorite food: sushi
};

foodThoughts();

// P.s. when you change the 'var' to 'const' technically there is still hoisting happening.
//That is why you get a reference error instead of looking at the global favoriteFood variable.
//let and const hoist but you cannot access them before the actual declaration is evaluated at runtime.
//So the engine says, "ya there is a favoriteFood variable here but you can't access it yet"

//------------------------------------------

function bigBrother() {
  function littleBrother() {
    return 'it is me!';
  }

  return littleBrother();

  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
bigBrother();

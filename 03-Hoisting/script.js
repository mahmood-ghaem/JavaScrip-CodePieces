a();
console.log(one);
var one = 1;
var one = 2;
function a() {
  console.log('hi')
}

function a() {
  console.log('bye')
}
//------------------------------------------
var favouriteFood = "grapes";

var foodThoughts = function () {
     console.log("Original favourite food: " + favouriteFood);

     var favouriteFood = "sushi";

     console.log("New favourite food: " + favouriteFood);
};

foodThoughts()

// P.s. when you change the 'var' to 'const' technically there is still hoisting happening. That is why you get a reference error instead of looking at the global favouriteFood variable. let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. So the engine says, "ya there is a favouriteFood variable here but you can't access it yet"
//------------------------------------------
function bigBrother(){
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
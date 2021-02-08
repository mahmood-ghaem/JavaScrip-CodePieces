// Scope:
function sayMyName() {
  var a = 'a';
  return function findName() {
    var b = 'b';
    console.log(a);
    return function printName() {
      var c = 'c';
      return 'Mahmood';
    };
  };
}

sayMyName()()();

// when we call a variable JavaScript search in local scope if find return that
// but if doesn't find goes one step up until global scope.

//-------------------------------------

function findName() {
  var b = 'b';
  return printName();
}

function printName() {
  var c = 'c';
  return 'Mahmood';
}

function sayMyName() {
  var a = 'a';
  return findName();
}

sayMyName();

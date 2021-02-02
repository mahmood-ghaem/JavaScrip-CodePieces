function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}
func1(1, 2, 3);
//----------------------------------------------------------------
function longestString() {
  var longest = '';
  for (var i=0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  console.log(longest);
  debugger;
  return longest;

}
longestString("ali","taghi","reza");
//----------------------------------------------------------------
function myConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
// returns "red, orange, blue"
myConcat(', ', 'red', 'orange', 'blue');
// returns "elephant; giraffe; lion; cheetah"
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');
// returns "sage. basil. oregano. pepper. parsley"
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
//----------------------------------------------------------------
function employeeList(...employee){
  console.log(Array.from(arguments));
}
employeeList("emp1","emp2","emp3","emp4","emp5")
//----------------------------------------------------------------
function marry2(...args) {
  console.log(args)
  console.log(Array.from(arguments))
  console.log(`${arguments[0]} is now married to ${arguments[1]}`)
}
marry2('Tim', 'Tina')
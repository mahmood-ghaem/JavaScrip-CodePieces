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

function employeeList(...employee){
  console.log(Array.from(arguments));
}
employeeList("emp1","emp2","emp3","emp4","emp5")

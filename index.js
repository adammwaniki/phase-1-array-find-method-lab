// code your solution here
//Find the first Super Bowl win
//function superBowlWin takes the array called record as its argument
//we put in a callback funtion that uses the strict equality operator to find a win
//the find method will return once it finds the first win
//we can use an arrow function since there's just one parameter
//record.find(record => record.result === 'W').year;
//it needs an if statement because there's a condition for when there are no wins to return undefined
//it's better to use undefined rather than the string "undefined" as best practice
function superbowlWin(record) {
  const win = record.find(record => record.result === "W");
  if (win) {
    return win.year;
  } else {
    return undefined; // No Super Bowl win record found
  }
}

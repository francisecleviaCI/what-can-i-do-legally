const whatICanIDoLegally = require('./back-end.js')

//get user's input(age)
const age = getInput(0);

//get message based on the age from the back end
const message = whatICanIDoLegally(age);

//print it out for user
console.log(message);



function getInput(i) {
  return process.argv[i + 2];
}

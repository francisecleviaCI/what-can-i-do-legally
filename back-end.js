// user -> 6 -> main.js -> 'Fizz' -> user

// user -> 'orange' -> main.js -> 'red and yellow' -> user

function whatCanIDoLegally(age){
    // if it's under 18, they can't drive or drink
    if (age <18) {
        return "You can't do anything."
    //if it's between 18 and 20 inclusive, they can drive.
} else if (age >= 18 && age <= 20){
        return "You can drive, but not drink."
    // if it's at least 21, they can do both.
} else if (age >= 21){
        return "You can do either, but don't do both at the same time."
}

}

module.exports = whatCanIDoLegally;

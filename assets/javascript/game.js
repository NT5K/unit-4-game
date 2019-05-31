// generate random number between 19-120
function randomNumberGenerator () {
    randomNumber = Math.floor(Math.random() * 120) + 19;
    return randomNumber
    // return randomNumber;
}
// generate random number between 1-12
function randomNumberForButtons () {
    return Math.floor(Math.random() * 12) + 1;
}

// variables
let wins = 0;
let losses = 0;
let winOrLoose = false;
let randomNumber = " ";
let sumOfButtons = 0;
let numberEqualsAnswer = false;
let buttonsAddedTogether = [];
let button1Num = randomNumberForButtons();
let button2Num = randomNumberForButtons();
let button3Num = randomNumberForButtons();
let button4Num = randomNumberForButtons();

$("#sum-of-buttons").text(buttonsAddedTogether);


// $("#random-number").text(randomNumber)
console.log(randomNumberGenerator())

// random number you are trying to match
$("#random-number").text(randomNumber);

//buttons

// four buttons with random numbers then push them to 
$('#button-1').click(function () {
    //gives a button a new random number
    button1Num;
    //takes new random number and updates the id of said button
    $("#sum-of-buttons").text(button1Num);
    //look into array for testing
    $("#look-into-array").text(buttonsAddedTogether);
    // adds the number to the buttonsAddedTogether array
    buttonsAddedTogether.push(button1Num);
});



$('#button-2').click(function () {
    button2Num;
    $("#sum-of-buttons").text(button2Num);
    $("#look-into-array").text(buttonsAddedTogether);
    buttonsAddedTogether.push(button2Num);
});

$('#button-3').click(function () {
    button3Num;
    $("#sum-of-buttons").text(button3Num);
    $("#look-into-array").text(buttonsAddedTogether);
    buttonsAddedTogether.push(button3Num);
});

$('#button-4').click(function () {
    button4Num;
    $("#sum-of-buttons").text(button4Num);
    $("#look-into-array").text(buttonsAddedTogether);
    buttonsAddedTogether.push(button4Num);
});

console.log(buttonsAddedTogether)






/*

// takes the buttonsAddedTogether array, loops through it and adds the total to the var sumOfButtons
buttonsAddedTogether = function addButtonsTogetherFromArray () {
    for (var i = 0; i < buttonsAddedTogether.length; i++) {
        sumOfButtons += buttonsAddedTogether[i] << 0;
        // $.each(buttonsAddedTogether, function () { sumOfButtons += parseFloat(this) || 0; });
    }
}

console.log(buttonsAddedTogether)


function addButtonsTogetherFromArray () {
    sumOfButtons = button1Num + button2Num + button3Num + button4Num;
    return sumOfButtons;
}

console.log(addButtonsTogetherFromArray())


arr = [1, 2, 3, 4, 5];
var s = 0;
for (var i = 0; i < buttonsAddedTogether.length; i++)
    s += buttonsAddedTogether[i];

console.log(s)

var sum = 0
arr = [1, 2, 3, 4, 5];
for (var i = buttonsAddedTogether.length; !!i--;) {
    sum += buttonsAddedTogether[i];
}

console.log(sum)

var arrSum = function (arr) {
    arr = buttonsAddedTogether
    return arr.reduce(function (a, b) {
        return a + b
    }, 0);
}

console.log(arrSum)

function sumSalaries(buttonsAddedTogether) {

    let sum = 0;
    for (let salary of Object.values(buttonsAddedTogether)) {
        sum += salary;
    }

    return sum;
}

console.log(sumSalaries())
*/
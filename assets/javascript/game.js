$(document).ready(function () {


// variables
let randomNumber = Math.floor(Math.random() * 101) + 19;
let wins = 0;
let losses = 0;
let total = 0;
let button1Num = Math.floor(Math.random() * 11) + 1;
let button2Num = Math.floor(Math.random() * 11) + 1;
let button3Num = Math.floor(Math.random() * 11) + 1;
let button4Num = Math.floor(Math.random() * 11) + 1;

// update id's with vars
$("#random-number").html(randomNumber);
$("#loss-count").html(losses);
$('#win-count').text(wins);

//buttons
$('#button-1').click(function () {
    //add the randomly generated number to the total variable
    total += button1Num;
    //update the sum/total div with the buttons added together amount
    $("#sum-of-buttons").html(total);
    //check if you won or lost
    winOrLose()
    console.log("button 1 is " + button1Num + " new total is " + total)
})

$('#button-2').click(function () {
    total += button2Num;
    $("#sum-of-buttons").html(total);
    winOrLose()
    console.log("button 2 is " + button2Num + " new total is " + total)
})

$('#button-3').click(function () {
    total += button3Num;
    $("#sum-of-buttons").html(total);
    winOrLose()
    console.log("button 3 is " + button3Num + " new total is " + total)
})

$('#button-4').click(function () {
    total += button4Num;
    $("#sum-of-buttons").html(total);
    winOrLose()
    console.log("button 4 is " + button4Num + " new total is " + total)
})
    
function winOrLose() {
    if (total === randomNumber) {
        //add one to wins count
        wins++;
        //update win count text with updated win amount
        $('#win-count').text(wins);
        //alert box shows that you won with color green
        $('#win-or-loss').text("You Won!").css('color', 'green');
        console.log("You won " + wins + " times!")
        //pick new random numbers
        resetGame();
        
    }
    else if (total > randomNumber) {
        //add one to loss count
        losses++;
        //update loss count text with updated loss amount
        $('#loss-count').text(losses);
        //alert box shows that you lost with color red
        $('#win-or-loss').text("You Lost!").css('color', 'red');
        console.log("You lost " + losses + " times!")
        //pick new random numbers
        resetGame();
    }
}

function resetGame() {
    //new random number everytime a game starts
    randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log("New random number is " + randomNumber)
    //update random number div with new random number
    $('#random-number').text(randomNumber);
    //each button gets a new random number
    button1Num = Math.floor(Math.random() * 11) + 1;
    button2Num = Math.floor(Math.random() * 11) + 1;
    button3Num = Math.floor(Math.random() * 11) + 1;
    button4Num = Math.floor(Math.random() * 11) + 1;
    //clear the button click total
    total = 0;
    $('#sum-of-buttons').text(total);
}

})

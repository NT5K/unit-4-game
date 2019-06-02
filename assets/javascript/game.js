
// variables
let randomNumber = Math.floor(Math.random() * 101) + 19;
let wins = 0;
let losses = 0;
let total = 0;
let button1Num = Math.floor(Math.random() * 11) + 1;
let button2Num = Math.floor(Math.random() * 11) + 1;
let button3Num = Math.floor(Math.random() * 11) + 1;
let button4Num = Math.floor(Math.random() * 11) + 1;

//test
console.log(randomNumber)
console.log(wins)
console.log(losses)
console.log(button1Num)
console.log(button2Num)
console.log(button3Num)
console.log(button4Num)
console.log(total)


// update id's with vars
$("#random-number").html(randomNumber);
$("#loss-count").html(losses);
$('#win-count').text(wins);


//buttons
$('#button-1').click(function () {
    total += button1Num;
    $("#sum-of-buttons").html(total);
    winOrLose()
})

$('#button-2').click(function () {
    total += button2Num;
    $("#sum-of-buttons").html(total);
    winOrLose()
})

$('#button-3').click(function () {
    total += button3Num;
    $("#sum-of-buttons").html(total);
    winOrLose()
})

$('#button-4').click(function () {
    total += button4Num;
    $("#sum-of-buttons").html(total);
    winOrLose()
})
    
function winOrLose() {
if (total === randomNumber) {
    wins++;
    $('#win-count').text(wins);
    $('#win-or-loss').text("You Won!").css('color', 'green');
    resetGame();
    
}
else if (total > randomNumber) {
    losses++;
    $('#loss-count').text(losses);
    $('#win-or-loss').text("You Lost!").css('color', 'red');
    resetGame();
}
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $('#random-number').text(randomNumber);
    button1Num = Math.floor(Math.random() * 11) + 1;
    button2Num = Math.floor(Math.random() * 11) + 1;
    button3Num = Math.floor(Math.random() * 11) + 1;
    button4Num = Math.floor(Math.random() * 11) + 1;
    total = 0;
    $('#sum-of-buttons').text(total);
}

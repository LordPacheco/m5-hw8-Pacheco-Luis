// Create an Array of at least 3 losing messages
var messages = [
    'Almost had it!',
    'You tried so hard and got so far',
    'So close!'
]

// Create variables to count wins and losses
var wins = 0
var losses = 0
// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageEL = document.getElementById('message')
var winsEL = document.getElementById('wins')
var lossEl =  document.getElementById('losses')
// target all .box elements and attach a click event listener to each one using a loop
var boxElements = document.querySelectorAll('.box')
//console.log(boxelements)
for (var i = 0; i < boxElements.length; i++) {
    //0, 1, 2, 
    var boxElement = boxElements[i];
//console . log(boxElement[i])
console .log(boxElement)
boxElement . onclick = function(event){


// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

var boxNumWasClicked = event.target.textContent
var NumWasClicked = (parseInt(boxNumWasClicked, 10))



    

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
var randomNum = Math.floor(Math.random() * 3) + 1; 



// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
if (NumWasClicked === randomNum) {
    messageEL.textContent = "Congrats!"
    wins++
    winsEL.textContent = "Wins: " + wins
} else {
    messageEL.textContent = "You Lose"
    losses++
    lossEl.textContent = "Losses: " + losses
}
}}
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
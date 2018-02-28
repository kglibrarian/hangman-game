
let words = [ "wenceslas", "bethlehem", "angels", "jinglebells", "noel"];
// let guesses = 10;
let userGuess = document.getElementById("already-guessed"); 
let lettersGuessed = [];


//Number of guesses is displayed as 10. 
// Letters already guessed is cleared. 
// User presses letter and onkey event is listening. ---event starts
document.onkeyup = function(event) { 
  userText = event.key;  
  lettersGuessed.push(userText);
  console.log(lettersGuessed);
  document.getElementById("already-guessed").innerHTML = lettersGuessed;

  console.log(computerArray.includes(userText));
  
  // if (computerArray.includes(userText)) {
  //   console.log("it works!");
  //   document.getElementById("blanks").innerHTML = userText;
  // }
  
}



// On page load, Computer chooses a random word from array ---event starts 
//Method to create an array from computer's choice word 

var randomNumber = Math.floor((Math.random() * 5));
let computerChoice = words[randomNumber]; 
// console.log(Array.from(computerChoice));

let computerArray = Array.from(computerChoice);
console.log(computerArray);

window.onload = function() {
let numberSpaces = computerArray.fill("_");
console.log(computerArray.fill("_"));
document.getElementById("blanks").innerHTML = numberSpaces;
}

//str.replace(regexp|substr, newSubstr|function)
//loop until all letters filled in
 
//The computer checks to see if letter is in Array (is in array).



// Blank lines show up on page, number of lines equal word's length



//The letter the user pressed is saved in a variable 
 
//If true, get the array position of the letter, and display letter in appropriate blank space. 
// Number of guesses decreases by 1.
//If false, add the letter to the already guessed area. 
//Number of guesses decreases by 1.  
//If guessed array is complete, increase win by 1, and game starts again
// If guesses = 0, display "you lose"



















// create a random number 0-4 
var randomNum = Math.floor((Math.random() * 5) + 1);
 
var el = document.getElementById('info');

// create a variable to hold the word that is at the index number that was chosen


// use split to create an array of that word

// write a function that begins when typing a letter that captures the letter and checks it against the array 
//maybe "on key up" which is an event for the document

// //<script>
// var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];
// var arrayLength = myFarm.length;    

//     // for (var i = 0; i < arrayLength; i++) {
//     //     console.log(myFarm[i]);
//     // }

//     for (var i = 0; i < myFarm.length; i++) {
//         var firstLetter = myFarm[i].charAt(0);
//         if (firstLetter ==='c') {
//             console.log("I start with 'c'");
//         }
//         if (firstLetter ==='o') {
//             console.log("I start with 'o'");
//         }
//     }
//Then save the letter they entered: 

{/* <script type="text/javascript">
      // Let's start by grabbing a reference to the <span> below.
      var userText = document.getElementById("user-text");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        userText.textContent = event.key;
      };
    </script> */}
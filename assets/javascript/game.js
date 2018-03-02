
//Global variables and arrays: 
let words = [ "wenceslas", "bethlehem", "angels", "jinglebells", "noel"];
let userGuess = document.getElementById("already-guessed"); 
let lettersGuessed = [];
let numberSpaces = [];
// let userText = "e";
// let guesses = 10;

//Still need to figure out -----------------------------------------------

//Number of guesses is displayed as 10.
// Letters already guessed is cleared. 


//BEGIN HERE ---------------------------------------------------------------

//COMPUTER CHOOSES A RANDOM WORD: 
//Create a variable randomNumber that stores a random number between 0 and 4. 
//Create a variable computerChoice that stores the word from the words array that has the index value of the random number that was chosen above. 

var randomNumber = Math.floor((Math.random() * 5));
let computerChoice = words[randomNumber]; 
// console.log(Array.from(computerChoice));

//COMPUTER CREATES ARRAY OF RANDOM WORD: 
//Create a variable computerArray that holds a new array that was created from the computerChoice array above. 
//Console log the computerArray. It should be an array of the letters from the word that was chosen randomly from the words array. 

let computerArray = Array.from(computerChoice);
console.log(computerArray);

//CCOMPUTER MAKES BLANKS SPACES FOR WORD:
//Run this code as many times as is equal to the length of the computerArray.
//Push a blank _ into the previously empty numberSpaces array each tiem the code is run.
//In the HTML docoument, set the text of element with the id = to "blanks" to whatever is in the numberSpaces array (which should be blank lines).


for (var i=0; i < computerArray.length; i++) {
  numberSpaces.push("_");
  document.getElementById("blanks").innerHTML = numberSpaces;

}

//------------------------------------------------------
// OLD VERSION OF CODE ABOVE: problem is that we set the computerArray to _ so when checking for userText, it was always false. 
//Create a variable numberSpaces that fills _ in place of the values in the computerArray.
//Console log the computerArray filled with blanks. It should be an array of blanks the same length as the letters from the word
// that was randomly chosen from the words array. 
//In the HTML docoument, set the text of element with the id = to "blanks" to whatever is in the numberSpaces array (which should be blank lines).

//let numberSpaces = computerArray.fill("_");
//   console.log(computerArray.fill("_"));
//   document.getElementById("blanks").innerHTML = numberSpaces;

//-------------------------------------------------------

//COMPUTER LISTENS FOR KEY PRESS AND STORES AND DISPLAYS LETTER PRESSED:
//1. Onkey event is listening. User presses a key and the event function starts. 
//2. The key that was pushed is stored in the userText variable.
//3. The userText is pushed into the previously empty array called lettersGuessed.
//4. Console log the lettersGuessed array to make sure it contains the key that was pressed.
//5. In the HTML document, set the text of the element with the id "already-guessed" to whatever is in the lettersGuessed array. 
//6. Console log the a boolean true or false if the userText is in the array called computerArray. 

document.onkeyup = function(event) { 
  userText = event.key;  
  lettersGuessed.push(userText);
  console.log(lettersGuessed);
  document.getElementById("already-guessed").innerHTML = lettersGuessed;
  console.log(computerArray.includes(userText));

//COMPUTER CHECKS FOR LETTER IN WORD AND REPLACES BLANK

  for (var i=0; i < computerArray.length; i++) {
    if(computerArray.includes(userText) === true) {
      guessIndex = computerArray.indexOf(userText);
         
      numberSpaces[guessIndex] = userText;
      // numberString = numberSpaces.join(" ");
      // console.log(numberSpaces[guessIndex]) = userText;
      document.getElementById("blanks").textContent = numberSpaces;
    }
  }
}

// if (computerChoice.indexOf(userKey) === true) {
//   guessIndex = computerChoice.indexOf(userkey);
// }

// dashGuess[guessIndex] = userKey;

//Code below does this: 
//11. When the window loads, begin the event function. 
//12. Create a variable numberSpaces that fills _ in place of the values in the computerArray.
//13. Console log the computerArray filled with blanks. It should be an array of blanks the same length as the letters from the word
// that was randomly chosen from the words array. 
//14. In the HTML docoument, set the text of element with the id = to "blanks" to whatever is in the numberSpaces array (which should be blank lines).

// window.onload = function() {
//   let numberSpaces = computerArray.fill("_");
//   console.log(computerArray.fill("_"));
//   document.getElementById("blanks").innerHTML = numberSpaces;
// }


// for (var i=0; i< computerArray.length; i++) {
//   if(computerArray.includes(userText) === true) {
//     guessIndex = computerArray.indexOf(userText);
//     numberSpaces[guessIndex] = userText;
//     // console.log(numberSpaces[guessIndex]) = userText;
//     document.getElementById("blanks").innerHTML = userText;
//   }
// }

  







//str.replace(regexp|substr, newSubstr|function)
//use array splice to add letter in correct position
// index of  the letter guessed in the word 
//if apple, then if a in word let location = word.indexof("a"), location will be zero
//blanks index [0] = event.key
//convert array to string, .join("_")
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


//Scotts Solution: 

// let computerChoice = 'apple';
// let dashGuess = [];
// let userKey = 'a';
// let guessIndex = -1;

// //daish display
// for (var i=0; i < computerChoice.length; i++) {
//   dashGuess.push("_");
  

// }


// dashGuess = dashGuess.join(" ");
// console.log(dashGuess);

// if (computerChoice.indexOf(userKey) === true) {
//   guessIndex = computerChoice.indexOf(userkey);
// }

// dashGuess[guessIndex] = userKey;

// //Attempt to put this together: 

  
                    
                    
  // document.onkeyup = function(event) { 
  //     userText = event.key;  
  //     lettersGuessed.push(userText);
  //     console.log(lettersGuessed);
  //     document.getElementById("already-guessed").innerHTML = lettersGuessed;
                    

  //   console.log(computerArray.includes(userText));

  //   let numberSpaces = computerArray.fill("_");
  //     console.log(computerArray.fill("_"));
  //     document.getElementById("blanks").innerHTML = numberSpaces;
      
  //     for (var i=0; i< computerArray.length; i ++) {
  //       if(computerArray[i] == userText) {
  //       numberSpaces[i] = userText;
  //       console.log(numberSpaces);
  //       }
  //     }
  // }
                  
    

  

//Other ideas to keep in mind: 

// // create a random number 0-4 
// var randomNum = Math.floor((Math.random() * 5) + 1);
 
// var el = document.getElementById('info');

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

// {/* <script type="text/javascript">
//       // Let's start by grabbing a reference to the <span> below.
//       var userText = document.getElementById("user-text");

//       // Next, we give JavaScript a function to execute when onkeyup event fires.
//       document.onkeyup = function(event) {
//         userText.textContent = event.key;
//       };
//     </script> */}




 // for (var i=0; i< computerArray.length; i++) {
  //   if(computerArray.indexOf(userText) === true) {
  //     guessIndex = computerArray.indexOf(userText);
  //     numberSpaces[guessIndex] = userText;
  //     console.log(numberSpaces[guessIndex] = userText);
  //   }


  //------------------------------------------------------
  // Code in this section may be deleted: 
  // if (computerArray.includes(userText)) {
  //   console.log("it works!");
  //   document.getElementById("blanks").innerHTML = userText;
  // }
  //-------------------------------------------------------



  
  

  

  // for (var i=0; i< computerArray.length; i ++) {
  //   if(computerArray.indexOf(userText)) {
  //     numberSpaces[i] == userText;
  //     console.log(numberSpaces[i] == userText);
  //   }
  // }
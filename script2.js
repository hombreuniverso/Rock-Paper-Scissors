//TOP's Suggestions Incorporated

//Create variables to store querySelector values
const playerInput = document.querySelector("input");
const playerOutput = document.querySelector("#playerOutput");
const computerOutput = document.querySelector("#computerOutput");
const results = document.querySelector("#results");
const pScoreTag = document.querySelector("#playerScore");
const cScoreTag = document.querySelector("#computerScore");
const finalResultsTag = document.querySelector("#finalResults");

//Declare and assign player and computer scores;
let cScore = 0;
let pScore = 0;
let counter = 0;

//Call game function
game();


//Play game multiple times function
function game(){

  playRound();
  
  playRound();
}


//Create a playRound function
function playRound() {
//Create variables for player and computer choices to get to compareSelections
playerSelection = getPlayerInput();
computerSelection = getComputerChoice();



//Function call
randomNum();

console.log(playerSelection);
console.log(computerSelection);


console.log(compareSelections(playerSelection, computerSelection));

//Create getPlayerInput, getComputerChoice and compareSelections functions

//Get input/ choice of player
function getPlayerInput() {

  
  //Use prompt to get user input
  let playerInput = prompt("Type: 'rock' or 'paper', or 'scissors'.", "");

  //Error checking of input
  //Give message for cancel and no input
  if (playerInput === null) {
    results.textContent = "You exited the playRound!";
  } else if (playerInput === "") {
    results.textContent = "Enter 'rock' or 'paper' or 'scissors'!";
  }
  //Convert all input to lowercase for comparison
  else {
    playerInput = playerInput.toLowerCase();
    if (
      playerInput !== "rock" &&
      playerInput !== "paper" &&
      playerInput !== "scissors"
    ) {
      results.textContent = "Please enter 'rock' or 'paper' or 'scissors'!";
    }
  }
  return playerInput;
}

//Function: Generate random number
function randomNum() {
  //Generate random number between 0 and 2
  let computerNum = Math.floor(Math.random() * 3);
  return computerNum;
}

//Function: Get computer Choice
function getComputerChoice() {
  let computerNum = randomNum();
  let computerChoice;
  //Link each digit to a choice e.g. 0 is "rock" using if/else if/else
  if (computerNum === 0) {
    computerChoice = "rock";
  } else if (computerNum === 1) {
    computerChoice = "paper";
  } else if (computerNum === 2) {
    computerChoice = "scissors";
  }

  /*    
  //Link each digit to a choice e.g. 0 is "rock" using switch
  switch (true) {
    case computerNum === 0:
      return "rock";
      break;
    case computerNum === 1:
      return "paper";
      break;
    case computerNum === 2:
      return "scissors";
      break;
  }
*/
  return computerChoice;
}

//Function: play round - compare players (win/ draw)
function compareSelections(playerSelection, computerSelection) {
  //Count number of rounds
  counter = counter + 1; 
  if (playerSelection === "rock" && computerSelection === "paper") {
    playerOutput.textContent = "Player's Choice: " + playerSelection;
    computerOutput.textContent = "Computer's choice: " + computerSelection;
    console.log(results.textContent = "Computer wins! Paper covers Rock.");
    cScore = cScore + 1;    
    cScoreTag.textContent = cScore;
    pScoreTag.textContent = pScore;
    
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerOutput.textContent = "Player's Choice: " + playerSelection;
    computerOutput.textContent = "Computer's choice: " + computerSelection;
    console.log(results.textContent = "Congratulations! You win! Paper covers rock");
    pScore = pScore + 1;
    pScoreTag.textContent = pScore;
    cScoreTag.textContent = cScore;
    
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerOutput.textContent = "Player's Choice: " + playerSelection;
    computerOutput.textContent = "Computer's choice: " + computerSelection;
    console.log(results.textContent = "Congratulations! You win! Rock crushes scissors.");
    pScore = pScore + 1
    pScoreTag.textContent = pScore;
    cScoreTag.textContent = cScore;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    playerOutput.textContent = "Player's Choice: " + playerSelection;
    computerOutput.textContent = "Computer's choice: " + computerSelection;
    console.log(results.textContent = "Computer wins! Rock crushes Scissors");
    cScore = cScore + 1;
    cScoreTag.textContent = cScore;
    pScoreTag.textContent = pScore;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    playerOutput.textContent = "Player's Choice: " + playerSelection;
    computerOutput.textContent = "Computer's choice: " + computerSelection;
    console.log(results.textContent = "Computer wins! Scissors cuts paper");
    cScore = cScore + 1
    cScoreTag.textContent = cScore;
    pScoreTag.textContent = pScore;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerOutput.textContent = "Player's Choice: " + playerSelection;
    computerOutput.textContent = "Computer's choice: " + computerSelection;
    console.log(results.textContent = "Congratulations! You win! Scissors cuts Paper");
    pScore = pScore + 1;
    pScoreTag.textContent = pScore;
    cScoreTag.textContent = cScore;
  } else if (playerSelection === computerSelection) {
    playerOutput.textContent = "Player's Choice: " + playerSelection;
    computerOutput.textContent = "Computer's choice: " + computerSelection;
    console.log(results.textContent = "A draw");
    cScore = cScore + 1;
    pScore = pScore + 1;
    pScoreTag.textContent = pScore;
    cScoreTag.textContent = cScore;
    
  }
  return (
    playerOutput.textContent, computerOutput.textContent, results.textContent, cScore, pScore
  );
}

//Call function
calculateScore();

//Function to determine winner based on score
function calculateScore(){
  if(pScore === 0 && cScore === 0){
    finalResultsTag.textContent = "None! A game has not been played as yet!"
  }
  else if(pScore > cScore){
    finalResultsTag.textContent = "Congrats! You win with " + pScore + " out of " + counter + " rounds";
  }else if(cScore > pScore){
    finalResultsTag.textContent = "Computer wins with " + cScore + " out of " + counter + " rounds";
  }else{
    finalResultsTag.textContent = "A draw: " + pScore + " : " + cScore;
  }
  return finalResultsTag.textContent;
}

}




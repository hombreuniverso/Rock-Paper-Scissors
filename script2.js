//TOP Suggestions Incorporated

//Query html selector/ options
//const playerInput = document.querySelector("input");

//Use prompt to get user input
let playerInput = prompt("Type: 'rock' or 'paper', or 'scissors'.", "")
 
//Query html paragraphs for player, computer and results
const playerOutput = document.querySelector("#playerOutput");
const computerOutput = document.querySelector("#computerOutput");
const results = document.querySelector("#results");

//Error checking of input
//Give message for cancel and no input
if(playerInput === null){
  results.textContent = "You exited the game!";
 }else if(playerInput === ""){
results.textContent = "Enter 'rock' or 'paper' or 'scissors'!";
 }
 //Convert all input to lowercase for comparison
 else{
    playerInput = playerInput.toLowerCase(); 
    if(playerInput !== 'rock' && playerInput !== 'paper' && playerInput !== 'scissors'){
      results.textContent = "Please enter 'rock' or 'paper' or 'scissors'!"
    } 
 }


//Receive and send player input to function
//playerInput.addEventListener("change", getPlayerChoice);

//Create variables for player and computer choices to get to playRound 
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

//Function calls
getPlayerChoice();
console.log(getPlayerChoice());

getComputerChoice();
console.log(getComputerChoice());

playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));

//Function: Get player choice
function getPlayerChoice(){
 return playerInput;
 }


//Function: Get computer Choice
function getComputerChoice() {  

  //Generate random number between 0 and 2
  let computerNum = Math.floor(Math.random() * 3);

  //Link each digit to a choice e.g. 0 is "rock" using if/else if/else
  if (computerNum === 0) {
    return "rock";
  } else if (computerNum === 1) {
    return "paper";
  } else if(computerNum === 2){
    return "scissors";
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
}

//Function: play round - compare players (win/ draw)
function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === "paper") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerSelection
    computerOutput.textContent =
      "Computer's choice: " +
      computerSelection 
    results.textContent =
      "Computer wins! Paper covers Rock.";
      return;

  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerSelection
    computerOutput.textContent =
      "Computer's choice: " +
      computerSelection 
    results.textContent =
      "Congratulations! You win! Paper covers rock";
      return;

  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerSelection
    computerOutput.textContent =
      "Computer's choice: " +
      computerSelection 
    results.textContent =
      "Congratulations! You win! Rock crushes scissors.";
      return;

  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    playerOutput.textContent =
    "Player's Choice: " +
    playerSelection
  computerOutput.textContent =
    "Computer's choice: " +
    computerSelection 
  results.textContent =
      "Computer wins! Rock crushes Scissors";
      return;

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    playerOutput.textContent =
    "Player's Choice: " +
    playerSelection
  computerOutput.textContent =
    "Computer's choice: " +
    computerSelection 
  results.textContent =
      "Computer wins! Scissors cuts paper";
      return;

  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerSelection
    computerOutput.textContent =
      "Computer's choice: " +
      computerSelection 
    results.textContent =
      "Congratulations! You win! Scissors cuts Paper";
      return;

  } else if(playerSelection === computerSelection) {
    playerOutput.textContent =
      "Player's Choice: " +
      playerSelection
    computerOutput.textContent =
      "Computer's choice: " +
      computerSelection 
    results.textContent =
      "A draw";
      return;
  } 
}


const playerInput = document.querySelector("select");

const playerOutput = document.querySelector("#playerOutput");
const computerOutput = document.querySelector("#computerOutput");
const results = document.querySelector("#results");

playerInput.addEventListener("change", () => {

  //Get player choice
  let playerOption = playerInput.value;
console.log(playerOption)
  //Generate random number between 0 and 2
  let computerNum = Math.floor(Math.random() * 3);

  //Generate computer choice function call
  getComputerChoice();
console.log(getComputerChoice());

//Compare players
comparePlayers();

//Function: Get computer choice
function getComputerChoice() {  

  //Link each digit to a choice e.g. 0 is "rock" using if/else if/else
  if (computerNum === 0) {
    return "rock";
  } else if (computerNum === 1) {
    return "paper";
  } else if(computerNum === 2){
    return "scissors";
  }

     
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
}

//Function: Compare players (win/ draw)
function comparePlayers() {
  if (playerOption === "rock" && getComputerChoice() === "paper") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerOption
    computerOutput.textContent =
      "Computer's choice: " +
      getComputerChoice() 
    results.textContent =
      "Computer wins! Paper covers Rock.";
      return;

  } else if (playerOption === "paper" && getComputerChoice() === "rock") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerOption
    computerOutput.textContent =
      "Computer's choice: " +
      getComputerChoice() 
    results.textContent =
      "Congratulations! You win! Paper covers rock";
      return;

  } else if (playerOption === "rock" && getComputerChoice() === "scissors") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerOption
    computerOutput.textContent =
      "Computer's choice: " +
      getComputerChoice() 
    results.textContent =
      "Congratulations! You win! Rock crushes scissors.";
      return;

  } else if (playerOption === "scissors" && getComputerChoice() === "rock") {
    playerOutput.textContent =
    "Player's Choice: " +
    playerOption
  computerOutput.textContent =
    "Computer's choice: " +
    getComputerChoice() 
  results.textContent =
      "Computer wins! Rock crushes Scissors";
      return;

  } else if (playerOption === "paper" && getComputerChoice() === "scissors") {
    playerOutput.textContent =
    "Player's Choice: " +
    playerOption
  computerOutput.textContent =
    "Computer's choice: " +
    getComputerChoice() 
  results.textContent =
      "Computer wins! Scissors cuts paper";
      return;

  } else if (playerOption === "scissors" && getComputerChoice() === "paper") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerOption
    computerOutput.textContent =
      "Computer's choice: " +
      getComputerChoice() 
    results.textContent =
      "Congratulations! You win! Scissors cuts Paper";
      return;

  } else if(playerOption === getComputerChoice()) {
    playerOutput.textContent =
      "Player's Choice: " +
      playerOption
    computerOutput.textContent =
      "Computer's choice: " +
      getComputerChoice() 
    results.textContent =
      "A draw";
      return;
  }else{
    playerOutput.textContent = "";      
    computerOutput.textContent = "";     
    results.textContent = playerOption;
      return;
  } 
}

});





const playerInput = document.querySelector("select");

const playerOutput = document.querySelector("#playerOutput");
const computerOutput = document.querySelector("#computerOutput");
const results = document.querySelector("#results");

playerInput.addEventListener("change", () => {

  //Get player choice
  let playerOption = playerInput.value;

  //Generate random number between 0 and 2
  let computerNum = Math.floor(Math.random() * 3);

  //Generate computerChoice function call
  computerChoice();

//Function: Get computer Choice
function computerChoice() {  

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

  //Compare players (win/ draw) function call
  comparePlayers();

//Function: Compare players (win/ draw)
function comparePlayers() {
  if (playerOption === "rock" && computerChoice() === "paper") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerOption
    computerOutput.textContent =
      "Computer's choice: " +
      computerChoice() 
    results.textContent =
      "Computer wins!";
  } else if (playerOption === "paper" && computerChoice() === "rock") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerOption
    computerOutput.textContent =
      "Computer's choice: " +
      computerChoice() 
    results.textContent =
      "Congratulations! You win!";
  } else if (playerOption === "rock" && computerChoice() === "scissors") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerOption
    computerOutput.textContent =
      "Computer's choice: " +
      computerChoice() 
    results.textContent =
      "Congratulations! You win!";
  } else if (playerOption === "scissors" && computerChoice() === "rock") {
    playerOutput.textContent =
    "Player's Choice: " +
    playerOption
  computerOutput.textContent =
    "Computer's choice: " +
    computerChoice() 
  results.textContent =
      "Computer wins!";
  } else if (playerOption === "paper" && computerChoice() === "scissors") {
    playerOutput.textContent =
    "Player's Choice: " +
    playerOption
  computerOutput.textContent =
    "Computer's choice: " +
    computerChoice() 
  results.textContent =
      "Computer wins!";
  } else if (playerOption === "scissors" && computerChoice() === "paper") {
    playerOutput.textContent =
      "Player's Choice: " +
      playerOption
    computerOutput.textContent =
      "Computer's choice: " +
      computerChoice() 
    results.textContent =
      "Congratulations! You win!";
  } else if (playerOption === computerChoice()) {
    playerOutput.textContent =
      "Player's Choice: " +
      playerOption
    computerOutput.textContent =
      "Computer's choice: " +
      computerChoice() 
    results.textContent =
      "A draw";
  } 
}

});




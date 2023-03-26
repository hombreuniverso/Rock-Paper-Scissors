const playerInput = document.querySelector('input');

const pTag = document.querySelector('p');

playerInput.addEventListener('change', () => { 
    
//Generate computerChoice
  computerChoice();

//Get player choice
  playerChoice();

//Compare and choose winner or draw
  comparePlayers();
  
  console.log(playerChoice());
    
}) 

//Function: Get computer Choice
function computerChoice(){
    //Generate random number between 0 and 2   
    let computerNum = Math.floor(Math.random() * 3);
    
  /*
    //Link each digit to a choice e.g. 0 is "rock" using if/else if/else
    if(computerNum === 0){
        return 'rock';
    }else if(computerNum === 1){
        return 'paper';
    }else{
        return 'scissors';
    }
 */
//Link each digit to a choice e.g. 0 is "rock" using switch
    switch(true){
        case computerNum === 0:
            return 'rock';
            break;
        case computerNum === 1:
            return 'paper';
            break;
        case computerNum === 2: 
            return 'scissors';
            break;
    }
}

//Function: Get player choice 
function playerChoice(){
    let playerChoiceLc = playerInput.value.toLowerCase();
    //Check if player gives any of the three legitimate choices
    if(playerChoiceLc !== 'rock' && playerChoiceLc !== 'paper' && playerChoiceLc !== 'scissors'){
        alert("Choose either rock");
    }else{
        return playerChoiceLc;
    }
}

//Function: Compare players (win/ draw)
function comparePlayers(){
    
}

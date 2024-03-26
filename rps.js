function getPlayerChoice(){
    //Collects input, must be what's specified, turns it into lowercase
    let inputKey = false;
    let gameOption;
    while (inputKey == false){
        gameOption = prompt("Rock, Paper or Scissors?");
        gameOption = gameOption.toLowerCase();
        if (gameOption != "rock" && gameOption != "paper" && gameOption != "scissor")
        {
            console.log("Invalid input, try again.");
            inputKey = false;
        }
        else
        {
            inputKey = true;
        }
    } 
    return gameOption;
}

function getComputerChoice(){
    //Gens random int from 1-100, depending on range gets rock, paper, scissor.
    let rand = Math.floor(Math.random() * 100);
    let output;
    if (rand < 33){
        output = "rock";
    }
    else if (rand < 66){
        output = "paper";
    }
    else {
        output = "scissor";
    }
    console.log("Computer chooses " + output);
    return output;
}

function playRound(a, b){
    //If player has winning option, set winKey bool true
    let winKey = false;
    if (a == "rock" && b == "scissor"){
        winKey = true;
    }
    else if (a == "paper" && b == "rock"){
        winKey = true;
    }
    else if (a == "scissor" && b == "paper"){
        winKey = true;
    }
    if (a == b){
        console.log("It's a tie!");
    }
    else{
        if (winKey == true){
            console.log(a + " beats " + b + ", Congrats!");
        }
        else{
            console.log(a + " gets beaten by " + b + ", Womp womp!");
        }
    }
}

playRound(getPlayerChoice(), getComputerChoice());


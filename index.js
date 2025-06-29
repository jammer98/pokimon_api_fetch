const choice = ["rock","paper","scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultsdisplay  = document.getElementById("results");

function playgame(playerchoice){

    const computerchoice = choice[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoice === computerchoice){
        result = "IT'S A TIE !! 🤪";
    }
    else{
        switch(playerchoice){
            case "rock" :
                result = (computerchoice === "scissors") ? "YOU WIN 🥰!!" : "YOU LOOSE 😂";
            break; 

            case "paper" :
                result = (computerchoice === "rock") ? "YOU WIN 🥰!!" : "YOU LOOSE 😂";
            break; 

            case "scissors" :
                result = (computerchoice === "paper") ? "YOU WIN 🥰!!" : "YOU LOOSE 😂";
            break;   
        }
    }

    playerdisplay.textContent = `PLAYER CHOICE : ${playerchoice}`;
    computerdisplay.textContent = `COMPUTER CHOICE : ${computerchoice}`;
    resultsdisplay.textContent = result;
}
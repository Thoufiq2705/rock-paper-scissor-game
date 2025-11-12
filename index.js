const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const resultFinal = document.querySelector("#result");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
       const finalResult = playRound(button.id , computerPlay());
       resultFinal.textContent = finalResult;
    });    
});
//this is comment
let playerS = 0;
let computerS = 0;
let name = "Thoufiq";
let lastName = "Thajuden";
function computerPlay() {
    const options = ["rock", "paper", "scissor"];
    const optionsChoice = Math.floor(Math.random() * options.length);
   return options[optionsChoice];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "🙃Its a tie!";
    } else if (
            (playerChoice === "scissor" && computerChoice === "rock") || 
            (playerChoice === "paper" && computerChoice === "scissor") || 
            (playerChoice === "rock" && computerChoice === "paper")) {
                computerS++;
                computerScore.textContent = computerS;
                return " 🤦‍♂️You lose! " + computerChoice +  " beats " + playerChoice + "🤷‍♀️";
    } else {
        playerS++;
        playerScore.textContent = playerS; 
        return "😉You win ! " + playerChoice + " beats " + computerChoice + "👌";
    }
}

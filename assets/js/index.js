// Global Variables

// let battleOutcome = getLeaderBoard
let wins = 0
let loss = 0
let draw = 0
const userChoice = document.getElementsByClassName("userChoice")[0]
const rockChoice = document.getElementById("rockChoice")
const paperChoice = document.getElementById("paperChoice")
const scissorChoice = document.getElementById("scissorChoice")
const userButton = document.querySelectorAll(".userChoice button")

// Game function
function game() {
    // Add Event Listener to Button
    userButton.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Opponent Choice is random
            console.log(btn)
            let opponentsChoice = Math.floor(Math.random() * 3);
            console.log(opponentsChoice)
            if (opponentsChoice === 0) {
                opponentsChoice = rockChoice;
            }
            else if (opponentsChoice === 1) {
                opponentsChoice = paperChoice;
            }
            else {
                opponentsChoice = scissorChoice;
            }

            // User Choice of Rock/Paper/Scissor
            let battleOutcome = function (userChoice, opponentsChoice) {

            }
            if (btn === opponentsChoice) {
                draw++;
                return draw;
            }

            // User Rock Choice
            if (btn === rockChoice) {

                if (opponentsChoice === scissorChoice) {
                    wins++;
                    return wins;
                } else {
                    loss++;
                    return loss;
                }
            }

            // User Paper Choice
            if (btn === paperChoice) {
                if (opponentsChoice === rockChoice) {
                    wins++;
                    return wins;
                } else {
                    loss++;
                    return loss;
                }
            }

            // User Scissor Choice
            if (btn === scissorChoice) {
                if (opponentsChoice === paperChoice) {
                    wins++;
                    return wins;
                } else {
                    loss++;
                    return loss;
                }
            };
        })
    })
}

// Invoke Game
game()
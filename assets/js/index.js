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
const drawGameChoice = []

// Game function
function game() {
    // Add Event Listener to Button
    userButton.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Opponent Choice is random
            let opponentsChoice = Math.floor(Math.random() * 3);
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
                
                // if (opponentsChoice = rockChoice) {
                //     drawGameChoice = "rock"
                // } else if (opponentsChoice = paperChoice) {
                //     drawGameChoice = "paper"
                // }
                // else if (opponentsChoice = scissorChoice) {
                //     drawGameChoice = "scissors"

                // }
                draw++;
                alert("Opponent Chose " + drawGameChoice + ", it's a tie")
                return draw;
            }

            // User Rock Choice
            if (btn === rockChoice) {

                if (opponentsChoice === scissorChoice) {
                    wins++;
                    alert("Opponent chose scissors, user wins")
                    return wins;
                } else {
                    loss++;
                    alert("Opponent chose paper, user loses")
                    return loss;
                }
            }

            // User Paper Choice
            if (btn === paperChoice) {
                if (opponentsChoice === rockChoice) {
                    wins++;
                    alert("Opponent chose rock, user wins")
                    return wins;
                } else {
                    loss++;
                    alert("Opponent chose scissors, user loses")
                    return loss;
                }
            }

            // User Scissor Choice
            if (btn === scissorChoice) {
                if (opponentsChoice === paperChoice) {
                    wins++;
                    alert("Opponent chose paper, user wins")
                    return wins;
                } else {
                    loss++;
                    alert("Opponent chose rock, user loses")
                    return loss;
                }
            };
        })
    })
}
// Invoke Game
game()
// Alert on record
function alertRecord() {
    alert("Wins: " + wins + " Losses: " + loss + " Draws: " + draw)
}
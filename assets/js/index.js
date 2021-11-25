let wins = 0
let loss = 0
let draw = 0
const userChoice = document.getElementById(".userChoice")
const rockChoice = document.getElementById("#rockChoice")
const paperChoice = document.getElementById("#paperChoice")
const scissorChoice = document.getElementById("#scissorChoice")
const userButton = document.getElementById(".userChoice button")

function game() {
    userButton.forEach(btn => {
        
        let opponentsChoice = Math.random();
        if (opponentsChoice < .34) {
            opponent = rockChoice;
        }
        else if (opponentsChoice > .67) {
            opponentsChoice = paperChoice;
        }
        else {
            opponentsChoice = scissorChoice;
        }

        let battleOutcome = function (userChoice, opponentsChoice) {
            if (userChoice === opponentsChoice)
                return draw;
        }

        if (userChoice === rockChoice) {
            if (opponentsChoice === scissorChoice) {
                return wins;
            } else {
                return loss;
            }
        }
        if (userChoice === paperChoice) {
            if (opponentsChoice === rockChoice) {
                return wins;
            } else {
                return loss;
            }
        }
        if (userChoice === scissorChoice) {
            if (opponentsChoice === paperChoice) {
                return wins;
            } else {
                return loss;
            }
        };
    }
})
game()
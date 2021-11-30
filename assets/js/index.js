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
// 
// Opponent Image Array
var imgOpponentArray = new Array();
// Opponent 2
imgOpponentArray[0] = new Image();
imgOpponentArray[0].src = 'assets/images/opponents/opponent1.png';
// Opponent 3
imgOpponentArray[1] = new Image();
imgOpponentArray[1].src = 'assets/images/opponents/';
// Opponent 4
imgOpponentArray[2] = new Image();
imgOpponentArray[2].src = 'assets/images/opponents/';
// Opponent 5
imgOpponentArray[3] = new Image();
imgOpponentArray[3].src = 'assets/images/opponents/';
// Opponent 6
imgOpponentArray[4] = new Image();
imgOpponentArray[4].src = 'assets/images/opponents/';
// Opponent 7
imgOpponentArray[5] = new Image();
imgOpponentArray[5].src = 'assets/images/opponents/';
// Opponent 8
imgOpponentArray[6] = new Image();
imgOpponentArray[6].src = 'assets/images/opponents/';
// 
// For wording if there is a draw
function drawGame() {
    console.log(rockChoice)
    if (opponentsChoice = rockChoice) {
        drawGameChoice = "rock"
    } else if (opponentsChoice = paperChoice) {
        drawGameChoice = "paper"
    }
    else if (opponentsChoice = scissorChoice) {
        drawGameChoice = "scissors"
        console.log(drawGame)
    }
}
// Game function
function game() {
    // Add Event Listener to Button
    userButton.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Opponent Choice is random
            let opponentsChoice = Math.floor(Math.random() * 3);

            // Assigns  opponent values that are picked at random
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
                drawGame()
                alert("Opponent chose " + drawGameChoice + ", it's a tie")
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

// Change Opponent when win



/*------------------------------------*/

function nextOpponentImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0;i<imgOpponentArray.length;i++)
    {
        if(imgOpponentArray[i] == img)
        {
            if(i == imgOpponentArray.length)
            {
                var j = 0;
                document.getElementById(element).src = imgArray[j].src;
                break;
            }
            else
            var j = i + 1;
            document.getElementById(element).src = imgArray[j].src;
            break;
        }
    }   
}
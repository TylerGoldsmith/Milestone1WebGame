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
var imgOpponentArray = ["assets/images/opponents/opponent1.png",
    "assets/images/opponents/opponent2.png",
    "assets/images/opponents/opponent3.png",
    "assets/images/opponents/opponent4.png",
    "assets/images/opponents/opponent5.png",
    "assets/images/opponents/opponent6.png",
    "assets/images/opponents/opponent7.png"];

// Hero Image Array Idle
var heroIdleAnimationArray = ["assets/images/heroImages/Sprites/HeroKnight/BlockIdle/HeroKnight_Block Idle_0.png",
"assets/images/heroImages/Sprites/HeroKnight/BlockIdle/HeroKnight_Block Idle_1.png",
"assets/images/heroImages/Sprites/HeroKnight/BlockIdle/HeroKnight_Block Idle_2.png",
"assets/images/heroImages/Sprites/HeroKnight/BlockIdle/HeroKnight_Block Idle_3.png",
"assets/images/heroImages/Sprites/HeroKnight/BlockIdle/HeroKnight_Block Idle_4.png",
"assets/images/heroImages/Sprites/HeroKnight/BlockIdle/HeroKnight_Block Idle_5.png",
"assets/images/heroImages/Sprites/HeroKnight/BlockIdle/HeroKnight_Block Idle_6.png",
"assets/images/heroImages/Sprites/HeroKnight/BlockIdle/HeroKnight_Block Idle_7.png"]

// Hero Idle Animation
async function heroIdle() {
    var heroIdle = document.getElementById("userPicture");
    for (var i = 0; i < heroIdleAnimationArray.length; i++) {
        if (heroIdle.src.endsWith(heroIdleAnimationArray[i])) {
            if (i == heroIdleAnimationArray.length - 1) {
                var j = 0;
                heroIdle.src = heroIdleAnimationArray[j];
            }
            else
                var j = i + 1;
            heroIdle.src = heroIdleAnimationArray[j];
        }
    }
}

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

            if (btn === opponentsChoice) {
                draw++;
                drawGame();
                alert("Opponent chose " + drawGameChoice + ", it's a tie");
                return draw;
            }

            // User Rock Choice
            if (btn === rockChoice) {

                if (opponentsChoice === scissorChoice) {
                    wins++;
                    alert("Opponent chose scissors, user wins");
                    nextOpponentImage();
                    return wins;
                } else {
                    loss++;
                    alert("Opponent chose paper, user loses");
                    return loss;
                }
            }

            // User Paper Choice
            if (btn === paperChoice) {
                if (opponentsChoice === rockChoice) {
                    wins++;
                    alert("Opponent chose rock, user wins");
                    nextOpponentImage();
                    return wins;
                } else {
                    loss++;
                    alert("Opponent chose scissors, user loses");
                    return loss;
                }
            }

            // User Scissor Choice
            if (btn === scissorChoice) {
                if (opponentsChoice === paperChoice) {
                    wins++;
                    alert("Opponent chose paper, user wins");
                    nextOpponentImage();
                    return wins;
                } else {
                    loss++;
                    alert("Opponent chose rock, user loses");
                    return loss;
                }
            };
        })
    })
}
document.getElementById("opponentPictureMain").src = "assets/images/opponents/opponent1.png";
// Invoke Game
game()
// Alert on record
function alertRecord() {
    alert("Wins: " + wins + " Losses: " + loss + " Draws: " + draw)
}

// Change Opponent when win

function nextOpponentImage() {
    var imgOpponent = document.getElementById("opponentPictureMain");
    for (var i = 0; i < imgOpponentArray.length; i++) {
        if (imgOpponent.src.endsWith(imgOpponentArray[i])) {
            console.log("3")
            if (i == imgOpponentArray.length - 1) {
                var j = 0;
                imgOpponent.src = imgOpponentArray[j];
                break;
            }
            else
                var j = i + 1;
            imgOpponent.src = imgOpponentArray[j];
            break;
        }
    }
}


// High Scores API

const api_base_url = "<GET_THIS_FROM_INSTRUCTOR>"
const apiKey = "<GET_THIS_FROM_INSTRUCTOR>"

async function getHighScores() {
    let response = await fetch(api_base_url, {
        headers : {
            "x-api-key": apiKey
        }
    })
    let highscores = await response.json()
    return highscores;
}


async function sendHighScore(scoreData, UserId) {
    let response = await fetch(api_base_url, {
        method: "POST",
        headers : {
            "x-api-key": apiKey,
            "Content-Type": "application/json",   
        },
        body:  JSON.stringify({
            Data: scoreData,
            UserId: UserId
        })
    })
    let data = await response.json()
    //does new highscore show up?
    console.log('new',data)

    let highscores = await getHighScores();
    console.log(highscores)

}

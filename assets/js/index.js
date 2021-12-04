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
const userIdle = $("#userIdleAnimation")
const userLight = $("#userLightAnimation")
const userBlock = $("#userBlockAnimation")
const userHeavy = $("#userHeavyAnimation")
var detachedLight = userLight.detach();
var detachedBlock = userBlock.detach();
var detachedHeavy = userHeavy.detach();



// 
// Opponent Image Array
var imgOpponentArray = ["assets/images/opponents/opponent1.png",
    "assets/images/opponents/opponent2.png",
    "assets/images/opponents/opponent3.png",
    "assets/images/opponents/opponent4.png",
    "assets/images/opponents/opponent5.png",
    "assets/images/opponents/opponent6.png",
    "assets/images/opponents/opponent7.png"];

onload = function heroIdle() {
    var frames = document.getElementById("userIdleAnimation").children;
    var frameCount = frames.length;
    var i = 0;
    setInterval(function () {
        frames[i % frameCount].style.display = "none";
        frames[++i % frameCount].style.display = "block";
    }, 100);
}

// Hero Light Function
async function heroLight() {
    let frames = document.getElementById("userLightAnimation").children;
    let frameCount = frames.length;
    let i = 0;
    return await new Promise(resolve => {
        let interval = setInterval(function () {
            frames[i % frameCount].style.display = "none";
            frames[++i % frameCount].style.display = "block";
            if (i == 6) {
                clearInterval(interval);
                resolve();
            }
        }, 250);
    })
}

// Hero Block Function
async function heroBlock() {
    let frames = document.getElementById("userBlockAnimation").children;
    let frameCount = frames.length;
    let i = 0;
    return await new Promise(resolve => {
        let interval = setInterval(function () {
            frames[i % frameCount].style.display = "none";
            frames[++i % frameCount].style.display = "block";
            if (i == 5) {
                clearInterval(interval);
                resolve();
            }
        }, 250);
    })
}

// Hero Heavy Function
async function heroHeavy() {
    let frames = document.getElementById("userHeavyAnimation").children;
    let frameCount = frames.length;
    let i = 0;
    return await new Promise(resolve => {
        let interval = setInterval(function () {
            frames[i % frameCount].style.display = "none";
            frames[++i % frameCount].style.display = "block";
            if (i == 6) {
                clearInterval(interval);
                resolve();
            }
        }, 250);
    })
}

// For wording if there is a draw
function drawGame() {
    if (opponentsChoice = rockChoice) {
        drawGameChoice = "rock"
    } else if (opponentsChoice = paperChoice) {
        drawGameChoice = "paper"
    }
    else if (opponentsChoice = scissorChoice) {
        drawGameChoice = "scissors"
    }
}

// Animation for different types of attack
async function displayAnimation(btn) {
    var detachedIdle = userIdle.detach();
    // User
    // Scissor
    if (btn === scissorChoice) {
        detachedLight.appendTo("body");
        await heroLight();
        detachedLight = userLight.detach();
    }
    // Rock
    else if (btn === rockChoice) {
        detachedBlock.appendTo("body");
        await heroBlock();
        detachedBlock = userBlock.detach();
    }
    // Paper
    else if (btn === paperChoice) {
        detachedHeavy.appendTo("body");
        await heroHeavy();
        detachedHeavy = userHeavy.detach();
    }
    detachedIdle.appendTo("body");
}

// Game function
function game() {

    // Add Event Listener to Button
    userButton.forEach(btn => {
        btn.addEventListener('click', (e) => {
            displayAnimation(btn);
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
                // alert("Opponent chose " + drawGameChoice + ", it's a tie");
                return draw;
            }

            // User Rock Choice
            if (btn === rockChoice) {

                if (opponentsChoice === scissorChoice) {
                    wins++;
                    // alert("Opponent chose scissors, user wins");
                    nextOpponentImage();
                    return wins;
                } else {
                    loss++;
                    // alert("Opponent chose paper, user loses");
                    return loss;
                }
            }

            // User Paper Choice
            if (btn === paperChoice) {
                if (opponentsChoice === rockChoice) {
                    wins++;
                    // alert("Opponent chose rock, user wins");
                    nextOpponentImage();
                    return wins;
                } else {
                    loss++;
                    // alert("Opponent chose scissors, user loses");
                    return loss;
                }
            }

            // User Scissor Choice
            if (btn === scissorChoice) {
                if (opponentsChoice === paperChoice) {
                    wins++;
                    // alert("Opponent chose paper, user wins");
                    nextOpponentImage();
                    return wins;
                } else {
                    loss++;
                    // alert("Opponent chose rock, user loses");
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
        headers: {
            "x-api-key": apiKey
        }
    })
    let highscores = await response.json()
    return highscores;
}


async function sendHighScore(scoreData, UserId) {
    let response = await fetch(api_base_url, {
        method: "POST",
        headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Data: scoreData,
            UserId: UserId
        })
    })
    let data = await response.json()
    //does new highscore show up?
    console.log('new', data)

    let highscores = await getHighScores();
    console.log(highscores)

}

// Global Variables

var wins = 0
var loss = 0
var draw = 0
const userChoice = document.getElementsByClassName("userChoice")[0]
const blockChoice = document.getElementById("blockChoice")
const heavyChoice = document.getElementById("heavyChoice")
const lightChoice = document.getElementById("lightChoice")
const userButton = document.querySelectorAll(".userChoice button")
const userIdle = $("#userIdleAnimation")
const userLight = $("#userLightAnimation")
const userBlock = $("#userBlockAnimation")
const userHeavy = $("#userHeavyAnimation")
// const versus = $("#userVsOpponent")
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

// Hero Animations
// Hero Idle Animation Upon Page Load 
onload = function heroIdle() {
    let frames = document.getElementById("userIdleAnimation").children;
    let frameCount = frames.length;
    let i = 0;
    setInterval(function () {
        frames[i % frameCount].style.display = "none";
        frames[++i % frameCount].style.display = "block";
    }, 100);
};

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
};

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

// Enemy Animation
// Bat Animation
// onload = function batAnimationIdle() {
//     let frameWidth = 32;
//     let frames = 4;
//     let frame = 0;
//     let div = document.getElementById("batAnimationIdle");
//     setInterval(function () {
//         let frameOffset = (++frame % frames) * frameWidth;
//         div.style.backgroundPosition = "0px" + frameOffset + "px";
//     }, 100)
// }

// Animation for different types of attack
async function displayAnimation(btn) {
    let detachedIdle = userIdle.detach();
    // User
    // Light
    if (btn === lightChoice) {
        detachedLight.appendTo("#userVsOpponent");
        await heroLight();
        detachedLight = userLight.detach();
    }
    // Block
    else if (btn === blockChoice) {
        detachedBlock.appendTo("#userVsOpponent");
        await heroBlock();
        detachedBlock = userBlock.detach();
    }
    // Heavy
    else if (btn === heavyChoice) {
        detachedHeavy.appendTo("#userVsOpponent");
        await heroHeavy();
        detachedHeavy = userHeavy.detach();
    };
    detachedIdle.appendTo("#userVsOpponent");
};


function nextOpponentImage() {
    var imgOpponent = document.getElementById("opponentPictureMain");
    for (var i = 0; i < imgOpponentArray.length; i++) {
        if (imgOpponent.src.endsWith(imgOpponentArray[i])) {
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
                opponentsChoice = blockChoice;
            }
            else if (opponentsChoice === 1) {
                opponentsChoice = heavyChoice;
            }
            else {
                opponentsChoice = lightChoice;
            }

            if (btn === opponentsChoice) {
                draw++;
                drawGame();
                return draw;
            }

            // User Block Choice
            if (btn === blockChoice) {

                if (opponentsChoice === lightChoice) {
                    wins++;
                    nextOpponentImage();
                    return wins;
                } else {
                    loss++;
                    return loss;
                }
            }

            // User Paper Choice
            if (btn === heavyChoice) {
                if (opponentsChoice === blockChoice) {
                    wins++;
                    nextOpponentImage();
                    return wins;
                } else {
                    loss++;
                    return loss;
                }
            }

            // User Scissor Choice
            if (btn === lightChoice) {
                if (opponentsChoice === heavyChoice) {
                    wins++;
                    nextOpponentImage();
                    return wins;
                } else {
                    loss++;
                    return loss;
                }
            };
        })
    })
}
document.getElementById("opponentPictureMain").src = "assets/images/opponents/opponent1.png";
// // Invoke Game
game()
// // Alert on record
function alertRecord() {
    alert("Wins: " + wins + " Losses: " + loss + " Draws: " + draw)
}

// // Change Opponent when win

// function nextOpponentImage() {
let imgOpponent = document.getElementById("opponentPictureMain");
for (let i = 0; i < imgOpponentArray.length; i++) {
    if (imgOpponent.src.endsWith(imgOpponentArray[i])) {
        if (i == imgOpponentArray.length - 1) {
            let j = 0;
            imgOpponent.src = imgOpponentArray[j];
            break;
        }
        else
            var j = i + 1;
        imgOpponent.src = imgOpponentArray[j];
        break;
    }
}



// High Scores API

// const api_base_url = "<GET_THIS_FROM_INSTRUCTOR>"
// const apiKey = "<GET_THIS_FROM_INSTRUCTOR>"

// async function getHighScores() {
//     let response = await fetch(api_base_url, {
//         headers: {
//             "x-api-key": apiKey
//         }
//     })
//     let highscores = await response.json()
//     return highscores;
// }


// async function sendHighScore(scoreData, UserId) {
//     let response = await fetch(api_base_url, {
//         method: "POST",
//         headers: {
//             "x-api-key": apiKey,
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             Data: scoreData,
//             UserId: UserId
//         })
//     })
//     let data = await response.json()
//     //does new highscore show up?
//     console.log('new', data)

//     let highscores = await getHighScores();
//     console.log(highscores)

// }
// Global Variables

var wins = 0
var loss = 0
var draw = 0
const userChoice = document.getElementsByClassName("userChoice")[0]
const blockChoice = document.getElementById("blockChoice")
const heavyChoice = document.getElementById("heavyChoice")
const lightChoice = document.getElementById("lightChoice")
const userButton = document.querySelectorAll(".userChoice button")
const attributionButton = document.querySelector("#toAttributions button")
// User J Query Animations
const userIdle = $("#userIdleAnimation")
const userLight = $("#userLightAnimation")
const userBlock = $("#userBlockAnimation")
const userHeavy = $("#userHeavyAnimation")
const userDraw = $("#userDrawAnimation")
const userWin = $("#userWinAnimation")
const userDeath = $("#userDeathAnimation")
// Opponent J Query Animations
const opponentIdle = $("#opponentIdleAnimation")
const opponentLight = $("#opponentLightAnimation")
const opponentBlock = $("#opponentBlockAnimation")
const opponentHeavy = $("#opponentHeavyAnimation")
const opponentDraw = $("#opponentDrawAnimation")
const opponentWin = $("#opponentWinAnimation")
const opponentDeath = $("#opponentDeathAnimation")
// Detach Globals
var detachedUserLight = userLight.detach();
var detachedUserBlock = userBlock.detach();
var detachedUserHeavy = userHeavy.detach();
var detachedUserDraw = userDraw.detach();
var detachedUserWin = userWin.detach();
var detachedUserDeath = userDeath.detach();
var detachedOpponentLight = opponentLight.detach();
var detachedOpponentBlock = opponentBlock.detach();
var detachedOpponentHeavy = opponentHeavy.detach();
var detachedOpponentDraw = opponentDraw.detach();
var detachedOpponentWin = opponentWin.detach();
var detachedOpponentDeath = opponentDeath.detach();
// const versus = $("#userVsOpponent")

// 
// Opponent Image Array
// var imgOpponentArray = ["assets/images/opponents/Bat/bat_gif.gif",
//     "assets/images/opponents/opponent2.png",
//     "assets/images/opponents/opponent3.png",
//     "assets/images/opponents/opponent4.png",
//     "assets/images/opponents/opponent5.png",
//     "assets/images/opponents/opponent6.png",
//     "assets/images/opponents/opponent7.png"];

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
            if (i == 8) {
                clearInterval(interval);
                resolve();
            }
        }, 250);
    })
}
// Hero Draw Animation
async function heroDraw() {
    let frames = document.getElementById("userDrawAnimation").children;
    let frameCount = frames.length;
    let i = 0;
    return await new Promise(resolve => {
        let interval = setInterval(function () {
            frames[i % frameCount].style.display = "none";
            frames[++i % frameCount].style.display = "block";
            if (i == 3) {
                clearInterval(interval);
                resolve();
            }
        }, 250);
    })
}

// Hero Win Animation
async function heroWin() {
    let frames = document.getElementById("userWinAnimation").children;
    let frameCount = frames.length;
    let i = 0;
    return await new Promise(resolve => {
        let interval = setInterval(function () {
            frames[i % frameCount].style.display = "none";
            frames[++i % frameCount].style.display = "block";
            if (i == 8) {
                clearInterval(interval);
                resolve();
            }
        }, 250);
    })
}

// Hero Death Animation
async function heroDeath() {
    let frames = document.getElementById("userDeathAnimation").children;
    let frameCount = frames.length;
    let i = 0;
    return await new Promise(resolve => {
        let interval = setInterval(function () {
            frames[i % frameCount].style.display = "none";
            frames[++i % frameCount].style.display = "block";
            if (i == 10) {
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
    let detachedUserIdle = userIdle.detach();
    let detachedOpponentIdle = opponentIdle.detach();
    // User
    // Light
    if (btn === lightChoice) {
        detachedUserLight.appendTo("#userVsOpponent");
        await heroLight();
        if (draw++) {
            opponentLight();
            detachedOpponentLight = opponentLight.detach();
            detachedUserLight = userLight.detach();
            await userDraw();
            enemyDraw();
        } else if (loss++) {
            opponentBlock();
            detachedOpponentBlock =opponentBlock.detach();
            detachedUserLight = userLight.detach();
            await userDeath();
            opponentWin();
        } else if (win++) {
            opponentHeavy();
            detachedOppHeavy = opponentHeavy.detach();
            detachedUserLight = userLight.detach();
            await userWin();
            opponentDeath();
            detachedOpponentDeathAnimation = opponentDeath.detach();
        }
    }
// detachedUserLight = opponentLight.detach();
    
    // Block
    else if (btn === blockChoice) {
        detachedUserBlock.appendTo("#userVsOpponent");
        await heroBlock();
        if (draw++) {
            opponentBlock();
            detachedUserBlock = userBlock.detach();
        }

    }
    // Heavy
    else if (btn === heavyChoice) {
        detachedUserHeavy.appendTo("#userVsOpponent");
        await heroHeavy();
        detachedUserHeavy = userHeavy.detach();
    };
    detachedUserIdle.appendTo("#userVsOpponent");
    detachedOpponentIdle.appendTo("#userVsOpponent");
};


// Change Opponent Image to Next
// Define Image to source so it won't define as page source
document.getElementById("opponentIdleAnimation").src = "assets/images/opponents/Bat/bat_fly_gif.gif";
// Function to invoke to change image
// function nextOpponentImage() {
//     var imgOpponent = document.getElementById("opponentIdleAnimation");
//     for (var i = 0; i < imgOpponentArray.length; i++) {
//         if (imgOpponent.src.endsWith(imgOpponentArray[i])) {
//             if (i == imgOpponentArray.length - 1) {
//                 var j = 0;
//                 imgOpponent.src = imgOpponentArray[j];
//                 break;
//             }
//             else
//                 var j = i + 1;
//             imgOpponent.src = imgOpponentArray[j];
//             break;
//         }
//     }
// }




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
                // drawGame();
                // displayAnimation(btn);
                return draw;
            }

            // User Block Choice
            if (btn === blockChoice) {

                if (opponentsChoice === lightChoice) {
                    wins++;
                    nextOpponentImage();
                    // displayAnimation();
                    return wins;
                } else {
                    loss++;
                    // displayAnimation();
                    return loss;
                }
            }

            // User Heavy Choice
            if (btn === heavyChoice) {
                if (opponentsChoice === blockChoice) {
                    wins++;
                    nextOpponentImage();
                    // displayAnimation();
                    return wins;
                } else {
                    loss++;
                    // displayAnimation();
                    return loss;
                }
            }

            // User Light Choice
            if (btn === lightChoice) {
                if (opponentsChoice === heavyChoice) {
                    wins++;
                    // nextOpponentImage();
                    // displayAnimation(btn);
                    return wins;
                } else {
                    loss++;
                    // displayAnimation(btn);
                    return loss;
                }
            };
        })
    })
}

// // Invoke Game
game()
// // Alert on record
function alertRecord() {
    alert("Wins: " + wins + " Losses: " + loss + " Draws: " + draw)
}
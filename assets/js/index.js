
let wins = 0
let loss = 0
let draw = 0

let opponentsChoice = math.random();
if (opponentsChoice < .34) {
    opponent = "rockChoice";
}
else if (opponentsChoice > .67) {
    opponentsChoice = "paperChoice";
}
else {
    opponentsChoice = "scissorChoice";
}

let battleOutcome = function (userChoice, opponentsChoice) {
    if (userChoice === opponentsChoice)
        return draw;
}
if (userChoice === "rockChoice") {
    if (opponentsChoice === "scissorChoice") {
        wins++;
    } else {
        return loss
    }
}
if (userChoice === "paperChoice") {
    if (opponentsChoice === "rockChoice") {
        wins++;
    } else {
        return loss
    }
}
if (userChoice === "scissorChoice") {
    if (opponentsChoice === "paperChoice") {
        wins++;
    } else {
        return loss
    }
};
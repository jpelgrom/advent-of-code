"use strict";

const input = `5,1,9,18,13,8,0`;

function partOne() {
    let turns = input.split(",").map(Number); // because the first turns are just saying the input
    for (let i = turns.length; i < 2020; i++) {
        const turnsExceptLast = [...turns];
        const lastSpoken = turnsExceptLast.pop();
        const previouslySpokenAt = turnsExceptLast.lastIndexOf(lastSpoken);
        if (previouslySpokenAt == -1) {
            turns.push(0);
        } else {
            turns.push(i - (previouslySpokenAt + 1));
        }
    }
    return turns[2019];
}

function partTwo() {
    const turns = input.split(",").map(Number); // because the first turns are just saying the input
    let turnStatus = [];
    let lastSpoken = null;
    for (let i = 1; i <= turns.length; i++) { // use index 1 for easier human counting
        turnStatus[turns[i - 1]] = [i];
        lastSpoken = turns[i - 1];
    }
    for (let j = turns.length + 1; j <= 30000000; j++) { // to optimize, don't keep all turns, just the last 2x said
        let nowSpoken = 0;
        if (turnStatus[lastSpoken].length > 1) { // said before last, so check what to say
            nowSpoken = turnStatus[lastSpoken][0] - turnStatus[lastSpoken][1];
        } // else new number, so say 0
        if (typeof turnStatus[nowSpoken] === "undefined") {
            turnStatus[nowSpoken] = [j];
        } else {
            turnStatus[nowSpoken] = [j, turnStatus[nowSpoken][0]];
        }
        lastSpoken = nowSpoken;
    }
    return lastSpoken;
}

console.log(partOne());
console.log(partTwo());
"use strict";

const input = `653427918`;

function partOne() {
    let cups = input.split("").map(Number);
    for (let i = 0; i < 100; i++) {
        let cupsMoving = [...cups];
        let pickUp = cupsMoving.splice(1, 3);

        let lookingForCup = cupsMoving[0] - 1;
        let destinationCup = null;
        const cupsLowest = cups.sort((a, b) => a - b);
        while (destinationCup == null) {
            if (cupsMoving.indexOf(lookingForCup) != -1) {
                destinationCup = lookingForCup;
            } else {
                lookingForCup--;
                if (lookingForCup < cupsLowest[0]) {
                    lookingForCup = cupsLowest[cupsLowest.length - 1];
                }
            }
        }

        cupsMoving.splice(cupsMoving.indexOf(destinationCup) + 1, 0, ...pickUp); // insert cups next to found item
        const previousCurrent = cupsMoving.shift(); // remove current from start
        cupsMoving.push(previousCurrent); // add start to end
        cups = cupsMoving;
    }
    const beforeOne = cups.splice(0, cups.indexOf(1));
    cups.push(...beforeOne);
    cups.shift(); // remove one
    return cups.join("");
}

function partTwo() {
    // it's a circle! make an array which points to which number is the next one in order
    // prevents modifying the entire array all the time which won't provide good enough performance for this part
    // for even more optimization, leave the added numbers empty until they're used
    const cupNumbers = input.split("").map(Number);
    const highestCup = 1000000;
    let cups = [];
    for (let i = 0; i < cupNumbers.length; i++) {
        cups[cupNumbers[i]] = cupNumbers[i + 1];
    }
    cups[cupNumbers[cupNumbers.length - 1]] = Math.max(...cupNumbers) + 1; // point to first generated
    cups[highestCup] = cupNumbers[0]; // point back to start
    let currentCupIndex = cupNumbers[0];

    for (let j = 0; j < 10000000; j++) {
        const pickedUp = getNextThreeIndexes(cups, currentCupIndex);

        let lookingForCup = currentCupIndex - 1;
        if (lookingForCup < 1) lookingForCup = highestCup;
        let destinationCupIndex = null;
        while (destinationCupIndex == null) {
            if (pickedUp.indexOf(lookingForCup) == -1) {
                destinationCupIndex = lookingForCup;
            } else {
                lookingForCup--;
                if (lookingForCup < 1) {
                    lookingForCup = highestCup;
                }
            }
        }

        cups[currentCupIndex] = (typeof cups[pickedUp[2]] == "undefined" ? pickedUp[2] + 1 : cups[pickedUp[2]]);
        currentCupIndex = cups[currentCupIndex];
        cups[pickedUp[2]] = (typeof cups[destinationCupIndex] == "undefined" ? destinationCupIndex + 1 : cups[destinationCupIndex]);
        cups[destinationCupIndex] = pickedUp[0];
    }

    let nextIndex = cups[1];
    let nextNextIndex = cups[nextIndex];
    return nextIndex * nextNextIndex;
}

function getNextThreeIndexes(cups, currentIndex) {
    let excludeIndexes = [];
    let checkIndex = currentIndex;
    for (let i = 0; i < 3; i++) {
        if (typeof cups[checkIndex] == "undefined") {
            excludeIndexes.push(checkIndex + 1);
        } else {
            excludeIndexes.push(cups[checkIndex]);
        }
        checkIndex = excludeIndexes[i];
    }
    return excludeIndexes;
}

console.log(partOne());
console.log(partTwo());
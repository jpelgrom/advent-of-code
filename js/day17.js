"use strict";

const input = `#.......
.#..#..#
....#.#.
.##..#.#
#######.
#...####
###.##..
.##.#.#.`;

function partOne() {
    const initialLines = input.split("\n");
    let currentState = {};
    for (let i = 0; i < initialLines.length; i++) {
        const cubeStates = initialLines[i].split("");
        for (let j = 0; j < cubeStates.length; j++) {
            currentState[`z0y${i}x${j}`] = cubeStates[j];
        }
    }

    let [zLength, yLength, xLength] = [3, initialLines.length + 2, initialLines[0].split("").length + 2];
    let [zStart, yStart, xStart] = [-1, -1, -1];
    for (let k = 1; k <= 6; k++) {
        let newState = { ...currentState };
        for (let thisZ = zStart; thisZ < zStart + zLength; thisZ++) {
            for (let thisY = yStart; thisY <= yStart + yLength; thisY++) {
                for (let thisX = xStart; thisX <= xStart + xLength; thisX++) {
                    const thisKey = `z${thisZ}y${thisY}x${thisX}`;
                    const thisActive = thisKey in currentState && currentState[thisKey] == "#";
                    let stateAroundThis = {};
                    for (let checkZ = thisZ - 1; checkZ <= thisZ + 1; checkZ++) {
                        for (let checkY = thisY - 1; checkY <= thisY + 1; checkY++) {
                            for (let checkX = thisX - 1; checkX <= thisX + 1; checkX++) {
                                let checkXYZ = `z${checkZ}y${checkY}x${checkX}`;
                                if (checkXYZ != thisKey) {
                                    stateAroundThis[checkXYZ] = (checkXYZ in currentState && currentState[checkXYZ] == "#") ? "#" : ".";
                                }
                            }
                        }
                    }
                    const activeAroundThis = Object.values(stateAroundThis).filter(stateItem => stateItem == "#").length;
                    if (thisActive && !(activeAroundThis == 2 || activeAroundThis == 3)) {
                        stateAroundThis[thisKey] = ".";
                    } else if (!thisActive && activeAroundThis == 3) {
                        stateAroundThis[thisKey] = "#";
                    }
                    for (let l = 0; l < Object.keys(stateAroundThis).length; l++) {
                        const loopKey = Object.keys(stateAroundThis)[l];
                        if (!(loopKey in newState) || loopKey == thisKey) {
                            newState[loopKey] = stateAroundThis[loopKey];
                        }
                    }
                }
            }
        }
        zLength += 2;
        yLength += 2;
        xLength += 2;
        zStart -= 1;
        yStart -= 1;
        xStart -= 1;
        currentState = { ...newState };
    }
    return Object.values(currentState).filter(value => value == "#").length;
}

function partTwo() {
    const initialLines = input.split("\n");
    let currentState = {};
    for (let i = 0; i < initialLines.length; i++) {
        const cubeStates = initialLines[i].split("");
        for (let j = 0; j < cubeStates.length; j++) {
            currentState[`w0z0y${i}x${j}`] = cubeStates[j];
        }
    }

    let [wLength, zLength, yLength, xLength] = [3, 3, initialLines.length + 2, initialLines[0].split("").length + 2];
    let [wStart, zStart, yStart, xStart] = [-1, -1, -1, -1];
    for (let k = 1; k <= 6; k++) {
        let newState = { ...currentState };
        for (let thisW = wStart; thisW < wStart + wLength; thisW++) {
            for (let thisZ = zStart; thisZ < zStart + zLength; thisZ++) {
                for (let thisY = yStart; thisY <= yStart + yLength; thisY++) {
                    for (let thisX = xStart; thisX <= xStart + xLength; thisX++) {
                        const thisKey = `w${thisW}z${thisZ}y${thisY}x${thisX}`;
                        const thisActive = thisKey in currentState && currentState[thisKey] == "#";
                        let stateAroundThis = {};
                        for (let checkW = thisW - 1; checkW <= thisW + 1; checkW++) {
                            for (let checkZ = thisZ - 1; checkZ <= thisZ + 1; checkZ++) {
                                for (let checkY = thisY - 1; checkY <= thisY + 1; checkY++) {
                                    for (let checkX = thisX - 1; checkX <= thisX + 1; checkX++) {
                                        let checkWXYZ = `w${checkW}z${checkZ}y${checkY}x${checkX}`;
                                        if (checkWXYZ != thisKey) {
                                            stateAroundThis[checkWXYZ] = (checkWXYZ in currentState && currentState[checkWXYZ] == "#") ? "#" : ".";
                                        }
                                    }
                                }
                            }
                        }
                        const activeAroundThis = Object.values(stateAroundThis).filter(stateItem => stateItem == "#").length;
                        if (thisActive && !(activeAroundThis == 2 || activeAroundThis == 3)) {
                            stateAroundThis[thisKey] = ".";
                        } else if (!thisActive && activeAroundThis == 3) {
                            stateAroundThis[thisKey] = "#";
                        }
                        for (let l = 0; l < Object.keys(stateAroundThis).length; l++) {
                            const loopKey = Object.keys(stateAroundThis)[l];
                            if (!(loopKey in newState) || loopKey == thisKey) {
                                newState[loopKey] = stateAroundThis[loopKey];
                            }
                        }
                    }
                }
            }
        }
        wLength += 2;
        zLength += 2;
        yLength += 2;
        xLength += 2;
        wStart -= 1;
        zStart -= 1;
        yStart -= 1;
        xStart -= 1;
        currentState = { ...newState };
    }
    return Object.values(currentState).filter(value => value == "#").length;
}

console.log(partOne());
console.log(partTwo());
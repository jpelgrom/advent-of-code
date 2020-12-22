"use strict";

const input = `Player 1:
8
19
46
11
36
10
35
9
24
22
50
1
34
7
18
28
3
38
43
2
6
42
23
12
20

Player 2:
39
27
44
29
5
48
30
32
15
31
14
21
49
17
45
47
16
26
33
25
13
41
4
40
37`;

function partOne() {
    const decks = input.split("\n\n");
    const deckOne = decks[0].split("\n").slice(1).map(Number);
    const deckTwo = decks[1].split("\n").slice(1).map(Number);

    while (deckOne.length > 0 && deckTwo.length > 0) {
        const playsOne = deckOne.shift();
        const playsTwo = deckTwo.shift();
        if (playsOne > playsTwo) {
            deckOne.push(playsOne, playsTwo);
        } else {
            deckTwo.push(playsTwo, playsOne);
        }
    }

    const winningDeck = (deckOne.length > 0 ? deckOne.reverse() : deckTwo.reverse());
    let score = 0;
    for (let i = 1; i <= winningDeck.length; i++) {
        score += (i * winningDeck[i - 1]);
    }
    return score;
}

function partTwo() {
    const decks = input.split("\n\n");
    const deckOne = decks[0].split("\n").slice(1).map(Number);
    const deckTwo = decks[1].split("\n").slice(1).map(Number);
    const result = playRecursiveGame(deckOne, deckTwo);

    const winningDeck = (result.win == 1 ? result.decks[0].reverse() : result.decks[1].reverse());
    let score = 0;
    for (let i = 1; i <= winningDeck.length; i++) {
        score += (i * winningDeck[i - 1]);
    }
    return score;
}

function playRecursiveGame(deckOne, deckTwo) {
    let roundDecks = [[deckOne, deckTwo]]; // states of deck at beginning of round
    let playedRounds = 0;
    let win = null;
    let playing = true;
    outer: while (playing) {
        let thisRoundDecks = [[...roundDecks[playedRounds][0]], [...roundDecks[playedRounds][1]]];
        for (let i = 0; i < playedRounds; i++) {
            const oneSame = thisRoundDecks[0].length == roundDecks[i][0].length && thisRoundDecks[0].every((value, index) => value == roundDecks[i][0][index]);
            const twoSame = thisRoundDecks[1].length == roundDecks[i][1].length && thisRoundDecks[1].every((value, index) => value == roundDecks[i][1][index]);
            if (oneSame && twoSame) {
                win = 1;
                playing = false;
                continue outer;
            }
        }

        const playsOne = thisRoundDecks[0].shift();
        const playsTwo = thisRoundDecks[1].shift();
        const remainingOne = thisRoundDecks[0].length;
        const remainingTwo = thisRoundDecks[1].length;
        let gameWin = null;
        if (remainingOne >= playsOne && remainingTwo >= playsTwo) {
            gameWin = playRecursiveGame([...thisRoundDecks[0]].slice(0, playsOne), [...thisRoundDecks[1]].slice(0, playsTwo)).win;
        } else {
            gameWin = playsOne > playsTwo ? 1 : 2;
        }

        if (gameWin == 1) {
            thisRoundDecks[0].push(playsOne, playsTwo);
        } else if (gameWin == 2) {
            thisRoundDecks[1].push(playsTwo, playsOne);
        }

        roundDecks.push(thisRoundDecks); // save deck state/set up deck for next round
        playedRounds++;

        if (thisRoundDecks[0].length > 0 && thisRoundDecks[1].length == 0) {
            win = 1;
            playing = false;
        } else if (thisRoundDecks[1].length > 0 && thisRoundDecks[0].length == 0) {
            win = 2;
            playing = false;
        }
    }
    return { win: win, decks: roundDecks[playedRounds] };
}

console.log(partOne());
console.log(partTwo());
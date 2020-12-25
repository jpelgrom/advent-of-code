"use strict";

const input = `18499292
8790390`;

function partOne() {
    const cardPublicKey = parseInt(input.split("\n")[0]);
    const doorPublicKey = parseInt(input.split("\n")[1]);

    let cardValue = 1;
    const cardSubject = 7;
    let cardLoopSize = 0;
    while (cardValue != cardPublicKey) {
        cardValue *= cardSubject;
        cardValue = cardValue % 20201227;
        cardLoopSize++;
    }

    // Now we know the loop size, transform with the door public key
    let encryptionKey = 1;
    for (let i = 0; i < cardLoopSize; i++) {
        encryptionKey *= doorPublicKey;
        encryptionKey = encryptionKey % 20201227;
    }
    return encryptionKey;
}

console.log(partOne());
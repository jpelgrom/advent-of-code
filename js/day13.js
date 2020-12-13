"use strict";

const input = `1001798
19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,859,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,373,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37`;

function partOne() {
    const arrival = parseInt(input.split("\n")[0]);
    const services = input.split("\n")[1].split(",").filter(item => item != "x").map(Number);
    const departures = [];
    for (let i = 0; i < services.length; i++) {
        departures.push(Math.ceil(arrival / services[i]) * services[i]);
    }
    const nextDeparture = [...departures].sort((a, b) => a - b)[0]; // spread to keep original intact
    return services[departures.indexOf(nextDeparture)] * (nextDeparture - arrival);
}

function partTwo() {
    const services = input.split("\n")[1].split(",").map(service => service == "x" ? "x" : parseInt(service));
    const leastCommonMultiple = (a, b) => a / gcd(a, b) * b; // adapted from https://stackoverflow.com/a/41888395/4214819

    let timestamp = services[0];
    let tPlus = services[0];
    for (let i = 1; i < services.length; i++) {
        if (services[i] != "x") {
            // increase timestamp by tPlus until you find an option where both are good
            // next good option will be that timestamp + least common multiple of service IDs because the pattern repeats
            // so, tPlus should now be that least common multiple!
            let foundTimestamp = false;
            while (!foundTimestamp) {
                if ((timestamp + i) % services[i] == 0) { // good timestamp
                    foundTimestamp = true;
                    tPlus = leastCommonMultiple(tPlus, services[i]);
                } else {
                    timestamp += tPlus;
                }
            }
        }
    }
    return timestamp;
}

function gcd(a, b) {
    var t = 0;
    a < b && (t = b, b = a, a = t); // swap them if a < b
    t = a % b;
    return t ? gcd(b, t) : b;
}

console.log(partOne());
console.log(partTwo());
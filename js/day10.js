"use strict";

const input = `99
128
154
160
61
107
75
38
15
11
129
94
157
84
121
14
119
48
30
10
55
108
74
104
91
45
134
109
164
66
146
44
116
89
79
32
149
1
136
58
96
7
60
23
31
3
65
110
90
37
43
115
122
52
113
123
161
50
95
150
120
101
126
151
114
127
73
82
162
140
51
144
36
4
163
85
42
59
67
64
86
49
2
145
135
22
24
33
137
16
27
70
133
130
20
21
83
143
100
41
76
17`;

function partOne() {
    const adapters = input.split("\n").map(Number).sort((a, b) => a - b);
    let currentJolts = 0;
    let differenceJolts = {
        one: 0,
        two: 0,
        three: 0
    };
    for (let i = 0; i < adapters.length; i++) { // adapters are sorted so it's always the smallest increase possible
        const difference = adapters[i] - currentJolts;
        switch (difference) {
            case 1:
                differenceJolts.one++;
                break;
            case 2:
                differenceJolts.two++;
                break;
            case 3:
                differenceJolts.three++;
                break;
            default:
                throw "Difference that cannot be overcome";
        }
        currentJolts = adapters[i];
    }
    differenceJolts.three++; // the device's built-in adapter
    return differenceJolts.one * differenceJolts.three;
}

function partTwo() {
    const adapters = input.split("\n").map(Number).sort((a, b) => a - b);
    let currentJolts = 0;
    let mightBeSkippable = [];
    for (let i = 0; i < adapters.length; i++) { // adapters are sorted so it's always the smallest increase possible
        const difference = adapters[i] - currentJolts;
        if (i == adapters.length - 1 || (adapters[i + 1] - currentJolts) > 3) {
            mightBeSkippable[i] = false;
        } else {
            mightBeSkippable[i] = true;
        }
        if (difference < 1 || difference > 3) throw "Difference that cannot be overcome";
        currentJolts = adapters[i];
    }

    let currentBlock = [0];
    let skippableCombinations = [];
    const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n; // https://stackoverflow.com/a/38556645/4214819
    for (let j = 0; j < adapters.length; j++) {
        currentBlock.push(adapters[j]);

        if (!mightBeSkippable[j]) {
            const testLength = currentBlock.length - 2; // -2 to remove beginning and end which were not included
            if (testLength > 0) {
                let combinationOptions = []; // possible include or not options to test
                for (let opt = 0; opt < (1 << testLength); opt++) { // https://stackoverflow.com/a/39734979/4214819
                    let combinationOption = [];
                    for (let opti = testLength - 1; opti >= 0; opti--) {
                        combinationOption.push(Boolean(opt & (1 << opti)));
                    }
                    combinationOptions.push(combinationOption);
                }
                let okNumberOfCombinations = 0;
                for (let k = 0; k < combinationOptions.length; k++) {
                    let testBlock = [currentBlock[0]];
                    for (let l = 0; l < combinationOptions[k].length; l++) { // check if we need to add the skippable number in this test
                        if (combinationOptions[k][l]) testBlock.push(currentBlock[l + 1]);
                    }
                    testBlock.push(currentBlock[currentBlock.length - 1]);
                    let validTest = true;
                    for (let m = 1; m < testBlock.length; m++) {
                        if (testBlock[m] - testBlock[m - 1] > 3) validTest = false;
                    }
                    if (validTest) okNumberOfCombinations++;
                }
                if (okNumberOfCombinations != 0) skippableCombinations.push(okNumberOfCombinations);
            }
            currentBlock = [adapters[j]]; // set up for next
        }
    }
    return skippableCombinations.reduce((a, b) => a * b);
}

console.log(partOne());
console.log(partTwo());
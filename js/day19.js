"use strict";

const input = `66: 26 127 | 132 49
65: 99 132 | 100 26
40: 1 26 | 16 132
87: 16 26 | 49 132
124: 132 57 | 26 107
80: 1 26 | 53 132
52: 26 24
58: 43 132 | 26 26
72: 49 26 | 16 132
82: 26 132
63: 26 135 | 132 127
113: 25 26 | 134 132
50: 26 21 | 132 135
35: 26 12 | 132 106
78: 132 123 | 26 14
39: 49 26 | 82 132
104: 132 26 | 26 26
88: 3 132 | 127 26
90: 82 26 | 16 132
96: 104 26 | 16 132
98: 24 26 | 104 132
53: 43 43
27: 5 132 | 127 26
91: 93 26 | 135 132
57: 132 118 | 26 125
25: 49 26 | 21 132
22: 132 1 | 26 49
135: 132 132 | 26 132
120: 80 132 | 81 26
132: "a"
10: 26 60 | 132 124
97: 132 7 | 26 10
130: 103 132 | 66 26
41: 58 26 | 16 132
47: 81 26 | 18 132
111: 132 127 | 26 3
119: 132 62 | 26 36
126: 26 16 | 132 49
76: 4 26 | 30 132
17: 49 26 | 24 132
67: 26 58 | 132 53
131: 127 26 | 135 132
71: 26 112 | 132 115
15: 98 132 | 6 26
114: 74 26 | 101 132
60: 70 132 | 19 26
45: 132 27 | 26 40
105: 135 26 | 16 132
24: 43 26 | 132 132
18: 82 26 | 135 132
85: 135 132
56: 132 69 | 26 113
89: 13 26 | 122 132
37: 82 132 | 58 26
106: 26 49 | 132 21
125: 26 5 | 132 24
55: 37 26 | 2 132
8: 42
81: 26 16 | 132 21
107: 26 73 | 132 131
112: 26 67 | 132 90
84: 26 48 | 132 71
49: 132 26
44: 24 132 | 5 26
1: 132 26 | 26 132
28: 79 26 | 87 132
68: 9 26 | 89 132
7: 26 76 | 132 68
115: 26 128 | 132 72
79: 49 132 | 104 26
6: 26 21 | 132 16
136: 26 129 | 132 121
33: 132 116 | 26 110
116: 39 26 | 105 132
117: 56 132 | 136 26
16: 26 132 | 43 26
133: 132 5 | 26 1
86: 26 104 | 132 135
51: 86 132 | 137 26
127: 132 132 | 132 26
34: 132 130 | 26 83
94: 132 127 | 26 49
137: 132 135 | 26 53
100: 26 34 | 132 114
19: 26 85 | 132 64
12: 132 21
73: 93 132 | 93 26
2: 26 1 | 132 24
74: 132 126 | 26 95
62: 132 55 | 26 20
38: 26 84 | 132 119
14: 108 26 | 94 132
75: 82 132
61: 16 132 | 3 26
99: 132 33 | 26 109
59: 1 26 | 93 132
77: 132 117 | 26 102
21: 132 132
122: 26 127 | 132 93
31: 38 26 | 77 132
95: 135 132 | 1 26
36: 26 120 | 132 23
30: 61 132 | 41 26
54: 135 26 | 53 132
70: 96 132 | 54 26
26: "b"
29: 3 26 | 104 132
23: 132 52 | 26 88
9: 132 37 | 26 32
32: 24 132 | 53 26
103: 132 127 | 26 5
64: 104 43
5: 132 132 | 26 26
102: 78 132 | 46 26
123: 73 132 | 80 26
42: 97 132 | 65 26
3: 132 43 | 26 132
4: 132 92 | 26 29
134: 132 21 | 26 93
93: 26 26
20: 132 59 | 26 105
13: 26 58 | 132 5
43: 132 | 26
110: 125 26 | 12 132
109: 132 35 | 26 47
69: 22 26 | 44 132
83: 111 26 | 63 132
0: 8 11
11: 42 31
121: 132 17 | 26 75
128: 58 132 | 53 26
92: 53 26 | 93 132
108: 26 93 | 132 93
46: 132 45 | 26 51
118: 82 26 | 58 132
48: 15 132 | 28 26
129: 132 50 | 26 91
101: 132 131 | 26 133

abbbbaaabbbbaabbabbbaabaababbaababbbabbb
bbaaaabbaaabbbbaaaaaabab
baabaaabbaabbbaaaababaaaaaabbbababaaabaabbbbaabaaabbaabbbbaaabba
aaabaaabaabbabbabbabaaba
bbaaabbbbbbabaabaaabaabb
aaabaabaabaaaababaababba
aababbbbababbabbbabaaaaaaabbaabaaabbbaaa
baababababaabaaababbbaaa
aaabbaaaaababaabbbbabbba
baaabaaaabbbaabbbbbbbbbb
baaabaaabbaabbbabbbbababaabbaabb
aaabbbababbbbbaaaabbbabaaaabababbbaaabba
aaabaaaabbbabbbabbabaabb
aabaaabaaaabaabaabbbbabb
bbaabbbabababbbaabaaabaabbbbaaab
abbaaaaaaaaaabaabaababababbaaaba
babaaaaabaaababbabaabaaaabbababbaaaabbba
aabbbbbbbababbbbbabaabbbaabbabab
bbbabbbabbababbbabbbbbbabaaaabaaaaaabbba
aabbbbbaababbabbbbbabaabaabbabbaabbabbabbababbaa
aabaaaaabaaabbaaabaaabababbbabaaabbaaabababaabaa
ababbaaaabbaabaaaababaabbaaabbab
abbbbaaaabbaaaaababbbabbbaabaabaaababbbababbbbbbaabbbaabbbbbbbabbabbaaab
aabaaabaabbabababbbbabbbbaabbbab
babaabbaabbaabaababababa
abbbaaaaaaabaaababbababbbabbabba
bbabbbbaabababaababababb
babaaaaaabbbaaaabbbababa
aabbaaabbbaaabbbababaabb
aabbbbaabbbabbaababbbaab
ababbbbbabaabbaaaaaaabaabbabaabbaabbaaaa
aababaaabbaaababbbabbaaaabbabbbbbabbabaababaabab
aabbbabaaababbbabbababaaaaabbabbababbbbbbaababbb
bbabbaabbbaabaabbbaaabbbabbbabbabaaabaaababababbabbbaabbbbbabaab
abababaaaababaaaabaababb
bbbbababbbaabbbaabaaababbbabbbaa
aaabbaaababaaaababbabbab
bbaabbbabaaaaaababaabbabbbbaaabbbbbbbbabbaaaabbbaaaaaaba
abaaabbbbabbbabbaabababaaaaaaaaa
ababbabbabbababbbbbaabbbbbbbabbaababaabbbabbbaaaaaabaababbaaaabbbaabbabbbbbaababbbbaaaaa
aabbabaaabbbaaaabbbababb
bbaaababbbaaabbbabbabaab
aaaaabaaabbbbabaababbbbaabaabaaaaaabbbbb
abbbaabbaababbbbabaababb
baaababbbabaaabbbaabbaab
bababbbbbaababbaabaabbbaaaaabbbbabaabaabbabbbbab
abaabbbaabaaaabbababaabb
bbbaabbbababbbbbaababaaabababbbbbbbbbbabbabaabaa
aaabbbaaabbbaaaaabaabbaabbabbaab
bbabbaababababbaabaaabbb
bbbbbaaaabbabbbbaaabaaaa
abbbbbaababbbbaabbbababa
abbabbaabbabbbbababababa
aabbabbaabaabaaabbbaabaaaaaabbba
abbabbbaaaabbbaabaaaaaaaaabbaabb
aabbbbaaabaaaabbaabbaaba
aababaababaabaaabaaabbaabbbbaaabbbbbbabb
bababaaaabbbbbaaaabaabbb
babaaaabbabaaabbabaabbaaaaaaabbabababaaabaabbabb
aabbbbaaaaaaabbaaabbaaaa
abbbaabbbaaaaaaabaabbbaa
abababaabbabbaaabbbaabaaababaaaaaabaabbbababaabbabbaaaab
abbbabaaaababbbaabbbbbaaababaaba
bbbbbaaaaaabaaababababab
bbaaaabbaabaabbaaaabaaabbaabbbaa
abbbabbaaaaaaabbabbbaabbaaabaabb
aaaabaabaaaaabbabaabbaba
abbbbabaaaaaaabbbbbbaaaaaaaabaababaababa
bbaaabbbaabaababbbabbaab
ababbbbbabbbbbabbbaaaabbbbbbbaab
aaaaabaaaabaaaabbaaabaaaaababbab
abbabbaaabbbaaaabbabbaab
ababbabbaababbbbaababaaaabbaaaaa
abaaababaaabbabbbaaaaabbabaabbaaabbbabbaaaaababa
aabbbabababbbbbbaabbaaaa
ababbbababaaaabbbbbaabbbabbbabaabbbaabbbababaaab
aabbabbbbbabaaaabbaaaabbbababbaa
abaabbaabbbaaabbababaaaaabaabaaaabaabbababaababb
baaabaaaaaabbabbabbbabbb
abbbabbaabaabbaabbbaaabaaaabaababbaabaab
aababbbbabbaabbbaaaabbba
bbbbabbabbabbaabbbbaaaababaaabaabbaaaababbbaababaaababab
bbbbbaaaabaaaabbbaaaabbb
abbabababbbabbbbabbabaab
babaaaabbbaabbbbabaabbbb
bbbaabbbabbbbbaabbbaabab
abaabaaaabbbabbbbabaaaaaaaabbbbaabbaababaaaaababbaaaaaab
baaabaaabbbaaabaaaaabbbbaabbbbbaaaabbbaababbbbaaabababababbbbaab
aabaaaabbaaaaaabaabaaabbaabbbababbaaaaaa
baaabbabaabbbbbbbaaababbbabbabbb
baaabbababbabbaabbbaabbbbaabaabaaaaaabaabbababbbbabbabaabaaababb
aabbabbbbbbbbbabbaabbaab
aabbabbaaabbabaabababaab
babaaaaabbabaaaabbaaababaaabbaaabbaaaaabbaaabaab
abbaabababbabababbabbabababbaabb
abbbabaabbbaaabbabaabbbaaabababb
bbbbaaaaaabbbbaaaaabaaabababaaaaaabaabbbababbaab
aabbabbabaabbababbabbaab
abaaaaabaaaaaabbabaaababbbababbabbbbbbaa
abababbabbaaaaabbabbaabb
baababbabbaababaaaababbb
ababbabbaababaababaababb
baaaaabbabaabbaabbaabbbbaaaabbaa
abaaaabbaaabaababbabbaaaaaaaabaaabaaaabaaabbbbabaaaababa
aabbaaabaabaabaababbabab
ababaaaaaabbbabababaaabaaabababb
aabaaabbababbbababaaabaa
bbbbbbbababaaabbaaaabaaabbabbaabbbbbbaabaabbbbababbbaababaababaa
baaababababbbbaaaaababbabbaaaaaaaabbbabb
bbbbaabbababbbabbabaaaabbbbbbbbb
aaabaaababababaabaaaaaabbaaabbabbbbbbbbb
babbbbbabaaaaaababbbabbaababbbbbaaabbaba
aababaabbaaabbaabbbbabbbabaaaabaaabbabab
abbabababaaabbbbabbbbababbbababb
abbabbbbabbaabaabababbba
bbaaabaabababaaaaaaaabbb
aaabbbaabaabaababbbbbbbb
aabbaaabaababaaaabbaabaaaabababb
abbbaabbabaaababaabbaaaa
aaabbbbaaabaaabaabaabaaaaaaaaabbbbababaabbabbbaaabbaaababaabbbab
bbbaaaaaabaabbababbabbaaaaababbaabbabbbbabaaaaaabbaaaaba
aabbbbbaabbaababbbababbb
bababbbbababbababaaabbaaabbabbbbaaababbbbbbbbbaabaaaabbb
ababbbbaabbaabbbabbaabbabbabbaababaababb
abbbaaaababaabbbbabaaabaaaaaabab
aabbabbaabababbabaabababbbaaabba
aabbaabababbabbbbabbbaba
abababaaaabaaaaaababbbbababababa
abaabaaaaaabbbabaababaabababbaba
aabbabbaaababababaabbaaabaababbaaaaaabab
abaaabbaaababaaaaabbbabb
babbbbaaabaaaaababaabbbabbbbaabaaababbaaabbabbab
abbaabbabababbbbbabbbaab
baabbaaaaaaababbabbabbaabbababba
babaabbbbbabbaaabbaaaabbbbababbb
aaabbaaabbbaaabaaabbabbaaaabbabbbbbaaaababbbbbba
bbbaaaaaaaabbbaababaabbabaaaaaaaabaababbbaaaabbb
baaaaaaaabbababbbabbabaaabbbbaabaabaaabbabbabaabaaabbaabbbbabbbaabaababbabbaaabaaabaaaab
bbababaaababaaaaababbbaa
bbbbaaaabbabbabaabbaaaab
bbabbbaaabbabababbabbbbaaabbabbababbbbbbaabaaaba
babbbabaabbbbbbbbbbabbaabababaaa
bababbbbaaaaaabbbabaabbbaabbabbbbabbabab
abbabbaabbbbaabbaaaaaaba
abababaaaababbbbaababbab
abbbbbababaaaabbbbbbbbba
aabbabaaaabbaaabaaababbabbbaabbbbbabbaabbbbbbabb
abaaaaabbbabababbaabbbaabbbbaaaabbbbbabb
bbbaaaabbbaaabababaaabababaaabaa
bbaaabbbbaababbbbbabaaabaaaababaaaaabbab
bbbabbaaaababaabbbabbbab
abaaaababbbbbbaaababaaabbbbaabbbabbbbaabbabaabaaababaaaaabbabbaa
bbbaabaaabaaabbbbbaaaaaa
babaabbbabbbabbabbaaaabbabababbabaabbbaababbaaab
ababbbbaabbabbbbbabaabab
aaaabaabaababaaaabbbaaba
bbbabbaaaabaaaaabaababaa
abababbaaaabaababbabbabaabaaaaababbbbaaa
babaabbababbbbaaabbabbbb
bbbbaabbaaaaaabbbbbababa
aabaaabbaaaaaabbababaaab
bababbbbabbaabbaaaabbbbaaababaaabbbaaaabbbabbbbb
bbbabbaabbaabababababaaabaaabaabbbabbbab
bbaabababaababbabbabbaaaabaaabababbaaaab
ababaaaabbababaababaaabaabbaabbabbaaaaba
babbbbbababbbbbabbbabbababaabababbbaabba
abaabbaaabaaabbabbaaababbbbbaaaaabaababaaaaabbaa
bbbabbaabbaabbaabbaabbbbbbbbabaabaababbb
baaaaabbbbbabbbbbaaabbba
bbbabaababbbbbabbbababab
abbbaaaaabbabbaaaabaaabaabbbbaaa
abbbaabbbbbaaaabbbabbaaabbbabbbbbbababbbaaaababaabbbbaab
bbbaabbbabaaababbbbbaaab
abbbbbaaaabababababaabaa
abbaabbabaababaaababbababbaaabaaabbababbbbbbbbaababaaaaaaaabbbbbbbabaaba
bbbaaaaaabbababbbbababbb
aaabbbbaabaaabbaabbabaaaaaaaaaaa
aaaabbbbabbaabaabbabaaaaabaaaabbbbbbbbab
abbbabaaaabbabbaaaaabbaa
babbbabbaabbbbaabaaaaabbabaaabaa
bbaabbaabbbaaaaabbbababa
bbaabbaaabaabaaaaaaaaabbbaabbaba
bababbbbbbabbaaaaaaabaaa
bbabbaaaabbaaaaabbabaabb
bbbaaabbbabbabaaabababbbbbbababbbbbabaaa
babbbbbaababbbababbabbbabaaaabbbabaaabaa
bbaababbbbabbbbababaaabababababbaaababab
ababbabaabababaaaabaabaaaaaababb
babaabbabaaaaaabbaabbaba
aabaaabbaaaaabbababbbabbaabaaabbbababbababbabaabbbabbbab
abbababaababaaaabbaabaab
ababbbbabbbaabbbbbbbbabb
bbaababbbabaaaaabaabbaaabaaaabab
abaabbbaaabaaaaabaabaaaaababbaaabbbabaaaaaabaabb
aabaaaaabbbbbbabaabbabbbaabaaaaaabbbbaab
bbaaaaabbbaaababbbbbbbabaababbbabaaaaaba
aabbbaabaaabbaaaabbbabaaabaabbbabababaab
ababbbaaabbbbbaaabaabbbabbbabaaababababbabbabaabbabbbaabbbbaaabb
bbaaaaabaabaaaaaababaaab
aaabaaabaabaaaabaaabaabb
abbaaaaabbbabbaaaaaaabab
aabaaaabbbaaaabbbbbaaaaaabbaabaaabbabaabaaaabaaa
aaabaababbaabbaaababbbbbbaaaabab
bbaaaaabbababaaababbaaab
abaabbbaaaaabbaaababaaabbaabaabb
aababaabbbababaaabbaababbbbaabbaabbbbabb
abbaabbbaabaaabaaabababb
abbaababbabaabbbbbbaaabbbbbbaaab
aababababababaaabbbbbbba
ababbbbaabbaabbbbaaaabbb
baabaaabbbaaabbaaaaabbbabbbaaaabaabbabbb
abaabbbababaabbbbbbbabba
abbbbbababaabaaabbbaabaabbabbabb
bbbbbbabababbbababaabbabbaabbbbbaaabaabb
abbaabababbababbaabbbabaaaabbbbaabbaabbbbbbababbbbaaaaaa
babaaaaaaababbbabaabbaaabbabaaabababaaab
aaaaabbaaabbbbaabaaaaaaabbbaaabaabbaaaba
aabaababbabaaababaabbabb
aababbbbababbabbbbbaaaaabbbababaaabababb
bbabbabaabbbbabaabbbbbba
babaaabbaaaaaabaaababbabaaabbbbb
bbbbabaaaabaaabbaaaababbbbbbabaabbbaaaabababaabb
abaabbabbbbbaaaaaababbbbaababbaa
abbabababbbaaabaaaabbbbb
baaaaaababbaaaaabaabababbabbbbbaaabababb
bbbaaaababbbaaaababbbbab
bababbbbbaabaababbbabaababbbabababbbabab
aababababbbbaabababaaaaa
baaababbbababbbbaabaaabbaaaaaaab
abbabbbaabbbaaaaabbaabababaaabaa
abababaabbaabbbbbbbbbbabaaaabaaa
bbbbabbbaababbbbabbababbabaaaabaaabaabbb
bbaababbaabaaabababbaaabbaabaabbaaaaaaabbaabbbaabbbbbbbb
babbbabbbbabaaaabbbbbaaababbaaaa
aaaababbbaabbbbababbabab
aabbbbbabbbaaaaaabbaababbbabbababaabaababaabbabb
abbbbbaabababaaababbbaba
baabbaaabbabbaaaaaaababa
aabaabbbbabbbbaabbbbabbaaabaaabaabbaaabbaabaabbabbabaaaa
abbbbbaabbabbbbaabbaaaab
baabaabaababaaaaabbabaab
babaabbbaaaaabbababbbbab
aaaababbbbaabaaabbaaaababbbbbaab
babaaaaaabbabbbaaaaabaababbbabab
abababaabbbaaaaaaabbabaaaabbaaabaabbaabb
aabaaabbbbbabbbbbbabbabb
aaaaabbaaaaaaabbabbabababbbbbaaababbbaabbbabaabaabababab
babbbbaabbabaaaaabbaabbbabaabbabbabaabbabaababbb
babaaaaaabbabbbbbabbabab
aaaababbbaabbbbababbabba
bbaabbaabbaaabbbbbbaabbbaabbaaababaababaabaaaaabbaabaabaaababaab
babbaaabbaaaabbbbbaabbabbaabaabbaaaababa
babaaababbaababbabaabbaabbbabaabbbbababa
aaabbbaaaabaabaabaaaaaaabaabaabaaababaaabbbabbbababbbbbbbabababb
aabbabbbaabbbbbbabbaaaabbbabababaaaaabbb
bbbbababbaabbaaabbababaabbbbbbbaaaaaaaba
abaaaabbababbabbaabaaaaaabbaaababababbba
bbbabbbbabbabbbaaaabbbabbbaaabaabaaabaabababaaabaaabaabb
abbaabbbabbabbbabbaaabababbabaaaabbaaabb
aabbbaaaabaaabaaaaaaababbabbabaaabaaaaaaabbaaaba
abbaabbbaabaabbaaabbbabb
abbaabbbbaaabaaababbbaab
abaababaabbbbbaaabbaaaaabbabbbaabaabbaabbbbbbaabbaaaaaba
abababaababaabbbbaaaabbb
bbbaaaaabbaaababababbbbaaaababaa
baaabbaabbbaabbbababbaaababbabaababbabba
bbaabbaabaabababbbbbaabbaaababab
bbaaaabbabaabbabbabaabaabaabbbbbaaabbabbbaabbbbabaaabbbabababbabbbabaabbbabbbaaa
bbabbbaaaabaabbbabbbaababaaababbbababbbabaabbbaaaababaabbabbbbbbabaaaabbbabbbabbababaaba
abaaabbbbababbbbaabbabbabbbbabaaaaaaabbababbbbab
aaabbbabbbbbaabbabaababb
aabbbbbbaabaaaaabbbbbaab
baaababbbbbbaaaabbababaaaaaabbbababababa
ababaaaabbaabbaaababbbbbbbabbabaaabaabbbbaabbabb
bbaaaaababbaabbaaabaaabbbbbbbaab
bbaababbabaaababaaaabbbabaaaabbabababbaaabbaaabb
ababaaaaabbbbbababbbbaaa
abbabbbbbbbaaabaababaabb
bbababaaabbbabbaababbbbaaaabbaaaabbbaabb
abaabbabaabaaaaaaabaababaabbbbbaaaabbaba
aaaabaabbbbabbabbbaaaabbababaaba
bbbbaaaababbbbaabababbaa
bbababaabbababaabbaaaaaa
baaabaaaababbbaaaaaababaaabaaabbbabbbaab
abaabbaaaabaaaabbabbabbbaababbaabbabbabb
aaababbababaaaaaabaaaaba
baabbaaabbaaaabbbaaaaaaaabaaaabbbabbaabbabbaaaab
aaabaabbbabababbababbbaaabaababb
baabbbbaabbbaabbaabaabbb
bbbbbbababbbbbaaaabbbabb
bbbaaababbbaabaaaabababaaabaababbaaaabbaabbbbbbb
baaabbaaaaaaaabbbbaabaaa
abbabbbbaaabaababbaaabba
baabababaabbaaabababaabb
abbabababbbbabaabbaababaabbbabbbabaababa
babaaaaababaaaabaabaabbb
bbbbbaaabbabaaaabbaaaabbbbbaaababbbaababababababbababbaa
baabbaaabbababaaaababaaabbbbbbabaaabbbbaaaaaaabbababaabbbbabbbaa
bbaaabababbaaaaabbbaabab
bbbbbbabaabbabbaabbbbaaa
bbabaaaaaaababbaaababbaa
aaababbaaabaaaaabababbba
abaaaabbabbbabbaabbabbab
bbaaababaaabaabaaababaabbbaabbbb
bbbaabbbabbabaaaabbbaabaaabbbaabababbaabababaabbbbbbbabbbababaab
aaabbbababbbbababaaaabaa
bbabbababbaaabaaaaabbbabaaaababa
abbaaaaaaabababaaabaabbaabbbbaaa
bbabbbbaababbbbbbabaabbababababababbbbbb
abbabaaabababaaababbbaaa
babaaabaaabbbbaabaabbbbb
abbaaaaaabbabbbbbabbabaa
bbabaaaabababaaabaaabbab
baabaabaabbababababaabbabaabbaaaababaabbaaaaaaab
bbbaaaaabbabbbbabbbbbbba
abbbaaaaabababbaabbaabbbaabbababaabbbbab
aaabaaaabbbababbabbaaabbbabbabbbabbbaaba
abaaaaabaaabbbaaaaaaaaab
bbaaabbbbabaabbbbbbbabba
bbaabbbaababbabababaabbbaaabababbbbababb
bbbbaaaaaababaaaabaababa
baabaabaaaabbbabbabaaabbbababbbbabbbaabbbbaababaababbbaabbabbbaa
baaabbbbaabbabbbbbbbabaaabbbaaabbbbbabba
bbaababbbbbaaaabbbbbbbabbababaaaaabababb
baabaaaaabbabbaaaabbaaba
aabaaaaaababbaaaabbaaabb
aaabbbbabbbaaabbaabbaabb
baaaaaaaababaaaababbbbbabbaabbaaaabbbbaabaabaabbaaabaaaaabaababb
bababbbbabaababbaaaaaaaaabbabaabbaabbbbb
babaaaabbbaaababbbabbaaaabbbbbbb
bbababaaabbaaaaababbbbaabbababab
baabaaaaaababbabaaaabbabaaaabbabaaabaabb
baaaaaabbabaabaabbabaaaabaababaabbabaabbbbababaabaabbbbabbbaabba
aabbabbbbaabbaaabbbababa
aabbbbbbaabbbbaabbababaabbababaaaaaaabaaaaababaa
aabbabbbabbabbbbbabbbabbbabbbbabbbabbbab
abbaabaababaabbbababbabbabaaaaabaababbaa
babaabbbabababaabbaabbbaaaabbaaabaaaababbaabbbbb
ababbaaabababbbbabababab
bbbaabaaaaaaaabbbbabbbaa
aabbabbbaabbabaabababaaababaababbbbbbabb
bbbbbbabaabbbbaaaabbaabb
bbbbaabaababbbbbabaabbbaaabaaabaabbbbabb
abababaaababaaaaaaaabbaa
bbaabbbbabaabbabbbbabaabaaababbb
babbbbaababbbabbbbaaaaabbbbababa
bbaaaabbabbabababbbaabaaababbbbbbbaaabbbbabbabbbaabbabab
abaabaaaababbbbaaaaaaaab
abbababbabaaababbaabbabb
aababbbaaabbbbbbbbabbaab
bbbabbbaabaaaababbabbabbbaaaaababbabbbbaaabbabbbabaaaaaabbbabbab
abaaaabaababaabaaaaabaaaaaaabbabbbabbabaaaababbbaaaaabbbbbbaaaababbabaabbaabbaaabbbbabbb
baaababbbaabaabaabbbbbbb
babbbababaaaaaaabbaaabbbbaaaababbabbbabbbabbbbbaaaabbabaabbbaaaaabaabbbbbaabbbab
abbbaabbaababbbbabbbbaab
baabaaaaabbaababbaaaabbb
abababbaabbabbbaaaaabbba
aabababababbbbbaabaababa
babaaabbbbbbababaabaaaaaaaababaa
babbbbaaaabaaabaaaaaaaaa
bbbaaaaaababbabaaaaaaabbabbabbbaabaaabbbbbababbb
abbbbbaabbaabbbbaabaaabaaaabbbabaabbabbaabababaababbbbbbbabaababbbabaaba
aaabbbababbaababbbbbaabaaaababaa
bababaaaabbabaaabaaabaaaaaabaaabababbbaa
abbaabbabbaabbbaaaabbaba
bbbabbabaabaabaabbabaaba
abbbbbaabaabbbbabbbbbaaababbbbaaaaababaa
bbbaaaabbbababaaaababbaaaabaabaaaabaabbaaababbaa
baaaaaabaabbabbbbabbaaab
aaaababbbbababaaabaababb
aabaaabbaababbbaaaaaaaaa
bbabbaaaaaaabbbbbbabaaab
abaaababaaabbaaabaabaababbababaaaaabaababaabbbaababbbbab
ababaabaaababaabbbabbabaababbbbbabbbabaaaaaaaabbbabbbbaa
abaaababaabaaaabbaaaaaba
ababaaaabbabbbbabababbbabaaabaab
aabaaabbababbbbababbbaba
baaaaaabababbabaabaaaaba
baababbaababbabbabbbaaaabbbbbaaabaabaabb
ababbbbbbaaabbbbbbbaabab
bbabbaaabbabbaaaaaabaabb
aaabbbaabbbbbaaabaaaabba
abbbaaaaabbabbbaababbbbababaabbbbaaababbabaabaabbaaabbabbaaaababbbbbbaba
bbaaabaaabaaabbbbbaabbbaaabbaaaa
bbabbababbabbabaababbabaaababbbbabbabbaaaabbababaaaaabab
abaaabbabbbbbaaabbabaabb
aabbbababaaaaaaabbaabaaa
bbbabbaaaabaaabbaabbbabb
bbbaabbbabbbabaabbbbbabb
abbbabaabbbaabaaabbbbbaaabbabababababbbabaabbabaaabababbbbbbbbbbbbbbabba
bbbaaabbaabaaabaaaaaabbaaabaabababbaaaabaaabbbbb
aaaaabaaaabbbbbaababbbbbabababbabbbbbaaaabaaabbaaaaabaaabbaaaaba
abbbbababbbbabaabaaaabaa
aabbabbbaaabbaaaababbaaabababbba
aabaaabaabaaabbbbaababaa
aaaabaabaabbbbbbbaaaaaabaaaaaaab
abbaabaaaaaaabaaabbbabbaababbbbaabababbb
baaaababaaaaaaabbaabaaab
abaabbababaabaabaabbbabaaababbaa
aaabbbabbaabbbbabbabbabaaaababaa
aabaababbaaaaaabbbababab
aaaaabaaabaabbabaaaaaaab
aabbbbaabaababbaabbbbbba
ababbabaabababaabbbabbbaababbbaaaaaaaaaaaaababaaaaabbaab
bbbbbbababbaababbbbabbba
bbaaabababbbabbabbbbaabababbaabb
ababbbbabbbaaaaabbaaabbbaabaabaabbaaabaababbabab
bbbaabaaaaabbbbaaaababbabbabbbaa
abbabbaabaabaaaababbbaaa
bbbabbabababbbbaaabaaabbbaababbbbbbbbaba
abbaabbabbbbbaaababbbbaabbabaaaaabbbbbbb
bbabbababbaaabbbabbbababbabbabbbbbaaaabaabbbbaababbabbbaabaaaaba
abaabbbaaaaaabbbababaaaaababbbbbababbbba
abbbaabbabbbaabbaabbbabb
aabababaabbbabbabbaababaaabaaaaabaababaabaaabbba
abaaabbbbbbbbaaaabbaabbbababbabbbbaabbaabaaaabaaaabbaaaabababbab
aabbbabaaababaaabaaaabbb
abaaaaabbaabbaaaaabbaabababbaaaa
bbbaaaaababbbbaabaaaaabbabaabbbb
babbbbbaaaabbbbaaaaababbaaabbabbababaaab
bbaaabbbabaabaaaaabaaaabbbabbababbaaabbaaaababbb
aabbbababaaaaaabaaaaaaab
baaaaaabaaabaabaaaaabaabbaaabbab
aabbbbbbaabababaaaaabbaa
ababbbaaabaababbabaaabaa
aabbabbabbbbbbbbabbbabbbababaabbaaababab
aabbaaaaaabbabbabaababbaababaaaabbbabaaaaabbbbbbbabababa
abbbaaaabbbaabbbaababbbaaaabbaaababbaaababaaaaaa
aaaabababbbbabbaaaaaaaaababaaabbaaabaaba
aaabbbaabbaaababbabbbbab
aabababaaabbaaabbbbaaaababbaabbbaaabaaababaababa
aabbabaaaaababbabbabbbbb
bbbabbaabaaababababbabaa
babbbbbabbaaabbbaababaaaaaaaaabaabbaaaba
bbbaaabaababbabababaaaabbbbbbabbbbbbbabbaabbabaaababbbabababaaababbbbbabbbababbb
abaabbaabaaabbbbabbbaaab
aabaabbbabbbbbbaabbbbbbaaaababbbbabbbbbb
bbbbaaabaabbbabbbaaaaaaababaaababbbabaaabbaabbbaaabababbabbbbabb
aaaabaabbbaababbaaababab
baaaaabbabaabbbbabbaaabababbabbbbaabaabbababaaabaaaaababaaaaabaabbbabbbbbbaaaaababaaabab
babaaaabbaaababaaaababaa
aaaaabbaabbaababaabbbbaaabaabaabaabbaaba
aabbaaabaabaababbaababbaabbbaaabbabaabab
ababaaaabababbbbaaababbaaabaabaa
babaabbabaaabaaaabbbbaaa
ababbbbabaaaaaabbbbaaaabbaaaababbbaaaaba
bbaaababbaaabaaabaabbbab
babaaaaabaaaaabbbaaaaaabbaabbbabbabababa
baaabbbbabbabbbaabaaaaaa
abbaabbaaababbbabaabbbab
aaabbaaaabbbbabaaabaaaaabaabbaab
baaaaabbababbbbabbaaaaabbbbbbaab
bbaabbbbbbaababaaabbbaab
aabaaabbbbaababbabbaababbbaaaaaa
abaaaabaabbbbabbbaaaaabbbababbabbbaaaababbbbbbbb
abaabbbabbaabbaabaabaababaabbaaaabbbbbba
bbbabbbbbaabbaaababbbabbaabbaaba
bababbbbabbbabbaabbaabaabbbabbabaaabababaaaabbba
baabbaaaabbaabaaaabababaaabbbbbaabaabbabbabaabaaabbabbabbaaaaaba
bbbbaabaabaabbabbbbaabaabbaaaaabaaabaaababababbabaaaabab
abbaabaabbbaaababbabbbab
aabaababbbababaabbbbbbabbaaaabaaabaabbbb
abaabbbababaaabaabaaabababaaaaabbbababba
baaaaabbbbbabbaaababaaaaabaabbabbbabbbaaaaabbababaabaaabbaaaaaaa
aababbbbaabaabaabababaaaabababaaaababbbababbaabbbbbabaaabbababba
bbaababbaaabbbabaaaabaababaaaabbbaaaabbb
abbabaaaaaabbaaaabaabaab
bbbbaabbbbbabaabbabaabbaaabbbbaababbbbaaaaaabaaaaaaaaaab
bbbbaaaaababbaaaaaababbaaabaaaaabaabbaba
bbbbabbbbbaabbaaabababbb
aabaabaababbbabbbbbbaaab
aaaabbbbbbbbbaaabaababbb
bbbabbabbbbaaaabaaaababa
ababbbabbbbbaaaaabbbbbba`;

function partOne() {
    const rulesAndInputs = input.split("\n\n");
    const rulesRaw = rulesAndInputs[0].split("\n");
    let rules = [];
    for (let i = 0; i < rulesRaw.length; i++) {
        const ruleRawSplit = rulesRaw[i].split(": ");
        rules[parseInt(ruleRawSplit[0])] = ruleRawSplit[1];
    }

    const messages = rulesAndInputs[1].split("\n");
    const optionsToMatch = resolveRule(0, rules);
    let matches = 0;
    for (let j = 0; j < messages.length; j++) {
        if (optionsToMatch.indexOf(messages[j]) != -1) matches++;
    }
    return matches;
}

function resolveRule(index, fullRules) {
    const thisRule = fullRules[index];
    if (thisRule.substr(0, 1) == "\"") { // it's a letter!
        return thisRule.substr(1, 1); // remove quotes, not needed
    } else {
        const availableOptions = [];
        const thisRuleOptions = thisRule.split(" | ");
        for (let i = 0; i < thisRuleOptions.length; i++) {
            const thisRuleRefers = thisRuleOptions[i].split(" ").map(Number);
            let optionsPerReference = [];
            for (let j = 0; j < thisRuleRefers.length; j++) {
                optionsPerReference[j] = resolveRule(thisRuleRefers[j], fullRules);
            }
            availableOptions[i] = getPossibleCombinations(optionsPerReference);
        }
        return availableOptions.flat();
    }
}

function getPossibleCombinations(args) { // adapted from https://stackoverflow.com/a/15310051/4214819 to return strings
    var r = [], max = args.length - 1;
    function helper(arr, i) {
        for (var j = 0, l = args[i].length; j < l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i == max)
                r.push(a.join(""));
            else
                helper(a, i + 1);
        }
    }
    helper([], 0);
    return r;
}

function partTwo() {
    const rulesAndInputs = input.split("\n\n");
    const rulesRaw = rulesAndInputs[0].split("\n");
    let rules = [];
    for (let i = 0; i < rulesRaw.length; i++) {
        const ruleRawSplit = rulesRaw[i].split(": ");
        rules[parseInt(ruleRawSplit[0])] = ruleRawSplit[1];
    }

    const messages = rulesAndInputs[1].split("\n");
    const longestMessageLength = Math.max(...(messages.map(el => el.length))); // https://stackoverflow.com/a/43304999/4214819
    const rule8Length = Math.min(...(resolveRule(8, rules).map(el => el.length)));
    const rule11Length = Math.min(...(resolveRule(42, rules).map(el => el.length))) + Math.min(...(resolveRule(8, rules).map(el => el.length)));
    const mostNewRule8Tries = Math.floor(longestMessageLength / rule8Length);
    const mostNewRule11Tries = Math.floor(longestMessageLength / rule11Length);
    let matches = 0;
    for (let j = 0; j < messages.length; j++) {
        // a part can be matched by a new rule, but can result in a failure to match later on
        // to prevent missing good matches because of this, try with various lengths for the new rules
        for (let varRule8 = 0; varRule8 < mostNewRule8Tries; varRule8++) {
            for (let varRule11 = 0; varRule11 < mostNewRule11Tries; varRule11++) {
                if (checkRuleAtLevel(messages[j], varRule8, varRule11, 0, rules) == messages[j].length) matches++;
            }
        }
    }
    return matches;
}

function checkRuleAtLevel(text, newRule8, newRule11, index, fullRules) {
    // if letter, check if text starts with that letter and move forward 1
    // if returns array, for each option, check each of those rules and move forward in the text by that length 
    // at least one of the options in the array should fully match, otherwise return 0 matched
    // (= return length of matched text)
    let textMatched = 0;
    const thisRule = resolveRuleAtLevel(index, fullRules);
    if (Array.isArray(thisRule)) {
        let optionsMatched = [];
        for (let i = 0; i < thisRule.length; i++) { // check each alternate option
            let inOptionTextMatched = textMatched;
            let inOptionValid = true;
            let inOptionChecking = 0;
            if (index == 11) { // new rule 11: check if pattern repeats in middle!
                // check for rule 42 x (1 + newRule11) times
                // then, check for rule 31 x (1 + newRule11) times
                // initial 1x check for each rule is because of the minimum in rule 11
                let newRule11Tries = 0;
                let newRule11Switch = false;
                while (inOptionValid && inOptionChecking < 2 + (newRule11 * 2)) {
                    let resultFromRule = 0;
                    if (!newRule11Switch) {
                        resultFromRule = checkRuleAtLevel(text.substr(inOptionTextMatched), newRule8, newRule11, 42, fullRules);
                        newRule11Tries++;
                        if (newRule11Tries > newRule11) {
                            newRule11Switch = true;
                            newRule11Tries = 0;
                        }
                    } else {
                        resultFromRule = checkRuleAtLevel(text.substr(inOptionTextMatched), newRule8, newRule11, 31, fullRules);
                        newRule11Tries++;
                    }
                    inOptionTextMatched += resultFromRule;
                    inOptionValid = resultFromRule > 0;
                    inOptionChecking++;
                }
            } else {
                while (inOptionValid && inOptionChecking < thisRule[i].length) {
                    const resultFromRule = checkRuleAtLevel(text.substr(inOptionTextMatched), newRule8, newRule11, thisRule[i][inOptionChecking], fullRules);
                    inOptionTextMatched += resultFromRule;
                    inOptionValid = resultFromRule > 0;
                    inOptionChecking++;
                }
            }
            optionsMatched[i] = inOptionValid ? inOptionTextMatched : 0;
        }
        let optionsMatchedValid = optionsMatched.filter(value => value > 0);
        if (index == 8 && optionsMatchedValid.length > 0) { // new rule 8: check if pattern repeats after initial match!
            let newRule8Tries = 0;
            let stillMatchesRule42 = true;
            let stillMatchesLength = textMatched + optionsMatchedValid[0];
            while (stillMatchesRule42 && newRule8Tries < newRule8) {
                const resultForNextPart = checkRuleAtLevel(text.substr(stillMatchesLength), newRule8, newRule11, 42, fullRules);
                stillMatchesLength += resultForNextPart;
                stillMatchesRule42 = resultForNextPart > 0;
                if (stillMatchesRule42) {
                    optionsMatchedValid[0] = stillMatchesLength - textMatched;
                }
                newRule8Tries++;
            }
        }

        if (optionsMatchedValid.length > 0) { // if one option matched, this is something we can use
            return optionsMatchedValid[0];
        } else { // else, the string does not match the rule
            return 0;
        }
    } else {
        if (text.startsWith(thisRule)) {
            textMatched = thisRule.length; // should always be 1, but just in case
        }
        return textMatched;
    }
}

function resolveRuleAtLevel(index, fullRules) {
    const thisRule = fullRules[index];
    if (thisRule.substr(0, 1) == "\"") { // it's a letter!
        return thisRule.substr(1, 1); // remove quotes, not needed
    } else {
        const availableOptions = [];
        const thisRuleOptions = thisRule.split(" | ");
        for (let i = 0; i < thisRuleOptions.length; i++) {
            availableOptions.push(thisRuleOptions[i].split(" ").map(Number));
        }
        return availableOptions;
    }
}

console.log(partOne());
console.log(partTwo());
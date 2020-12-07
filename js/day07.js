"use strict";

const input = `plaid beige bags contain 3 drab magenta bags.
dim silver bags contain 2 shiny chartreuse bags, 4 dull magenta bags.
bright silver bags contain 2 faded maroon bags.
shiny cyan bags contain 4 plaid green bags, 4 dim coral bags, 4 dull indigo bags.
shiny orange bags contain 3 dim cyan bags, 1 mirrored beige bag, 5 pale orange bags.
posh gray bags contain 5 dark bronze bags, 2 striped lavender bags, 3 light tan bags.
clear lime bags contain 1 shiny crimson bag, 1 dark plum bag.
wavy chartreuse bags contain 1 striped crimson bag, 3 mirrored black bags.
pale violet bags contain 3 clear teal bags, 5 clear olive bags, 3 posh bronze bags.
shiny plum bags contain 5 dotted beige bags, 1 faded orange bag.
dark lime bags contain 1 clear blue bag, 2 posh green bags, 2 striped plum bags, 5 posh purple bags.
striped brown bags contain 1 drab cyan bag, 3 light silver bags.
pale chartreuse bags contain 4 drab aqua bags, 3 striped tan bags, 1 shiny tan bag.
clear magenta bags contain 1 dotted bronze bag, 4 striped salmon bags, 2 wavy purple bags.
drab indigo bags contain 3 shiny brown bags, 4 striped purple bags, 5 dull magenta bags, 5 plaid chartreuse bags.
mirrored maroon bags contain 2 dotted tan bags, 2 bright green bags, 5 light black bags, 3 vibrant silver bags.
shiny purple bags contain 1 bright lime bag, 5 muted violet bags.
pale bronze bags contain 3 muted green bags, 4 wavy tomato bags.
striped beige bags contain 1 faded violet bag, 4 wavy cyan bags, 5 pale orange bags.
plaid tomato bags contain 5 plaid white bags, 1 light silver bag, 3 drab blue bags.
faded gray bags contain 3 shiny lime bags, 4 muted tan bags, 2 light black bags, 2 vibrant gold bags.
dotted blue bags contain 5 wavy violet bags, 2 clear orange bags.
dotted olive bags contain 1 shiny purple bag, 5 dim fuchsia bags.
light indigo bags contain 2 wavy cyan bags.
pale silver bags contain 5 dark black bags, 5 posh gold bags, 1 drab salmon bag, 5 clear bronze bags.
light lavender bags contain 3 dark cyan bags, 4 mirrored indigo bags, 4 light brown bags.
dull lavender bags contain 4 pale indigo bags, 1 dim cyan bag.
posh gold bags contain 3 light brown bags, 1 shiny turquoise bag, 2 drab cyan bags.
muted violet bags contain 4 pale green bags.
posh blue bags contain 2 light lime bags.
light violet bags contain 1 posh red bag, 1 vibrant gold bag, 5 pale beige bags.
dark beige bags contain 1 dim orange bag, 5 plaid red bags, 2 clear crimson bags.
muted magenta bags contain 1 wavy olive bag, 1 drab maroon bag, 1 muted silver bag.
faded white bags contain 2 dull orange bags, 4 dim olive bags, 2 dull olive bags.
faded salmon bags contain 3 dull white bags.
shiny tan bags contain 4 posh red bags, 1 vibrant gray bag, 3 bright red bags, 3 clear orange bags.
light tomato bags contain 2 striped bronze bags.
pale orange bags contain 4 drab maroon bags, 4 pale beige bags, 5 posh purple bags.
dotted brown bags contain 1 dotted beige bag, 1 faded green bag, 5 muted bronze bags, 5 striped purple bags.
clear gold bags contain 1 pale cyan bag, 3 dark turquoise bags.
drab lavender bags contain 2 faded silver bags, 2 muted violet bags.
dull orange bags contain 1 dim gray bag.
faded plum bags contain 1 mirrored gold bag, 3 bright indigo bags, 1 pale violet bag, 4 dotted tomato bags.
drab fuchsia bags contain 1 light fuchsia bag.
dotted black bags contain 2 mirrored red bags.
drab brown bags contain 3 dim yellow bags, 2 shiny turquoise bags, 5 faded purple bags.
dull tomato bags contain 2 striped silver bags.
drab red bags contain 1 dotted silver bag, 2 light white bags, 1 vibrant purple bag.
pale red bags contain 1 clear black bag.
muted indigo bags contain 3 shiny red bags, 3 clear lavender bags, 4 clear aqua bags, 4 shiny maroon bags.
drab violet bags contain 5 light blue bags, 5 vibrant bronze bags, 2 dotted gold bags.
dim green bags contain 5 drab black bags, 5 mirrored maroon bags, 4 bright aqua bags.
mirrored salmon bags contain 1 drab purple bag.
plaid red bags contain 1 drab blue bag, 1 pale chartreuse bag, 3 light blue bags, 5 clear fuchsia bags.
posh tomato bags contain 1 vibrant maroon bag.
faded bronze bags contain 4 dim crimson bags.
plaid teal bags contain 2 striped bronze bags, 3 dotted orange bags.
vibrant lime bags contain 2 light silver bags, 4 clear salmon bags.
plaid crimson bags contain 5 drab beige bags, 5 shiny gray bags, 3 faded green bags.
posh yellow bags contain 1 mirrored red bag, 3 pale maroon bags, 3 clear crimson bags, 3 bright chartreuse bags.
faded chartreuse bags contain 2 faded purple bags, 1 plaid cyan bag, 2 wavy black bags, 5 plaid plum bags.
dotted maroon bags contain 2 clear turquoise bags, 2 dotted bronze bags.
striped chartreuse bags contain 4 dotted blue bags.
bright tomato bags contain 3 plaid salmon bags, 1 wavy bronze bag.
light yellow bags contain 3 shiny salmon bags, 5 bright magenta bags.
light red bags contain 5 vibrant maroon bags, 4 dim olive bags, 4 bright salmon bags.
wavy red bags contain 1 pale teal bag, 5 mirrored crimson bags, 1 bright beige bag.
vibrant salmon bags contain 3 dull violet bags, 3 dim cyan bags.
bright turquoise bags contain 1 light brown bag, 1 posh olive bag, 1 plaid white bag, 1 striped beige bag.
bright chartreuse bags contain 3 dull green bags, 2 striped gold bags, 4 dotted lavender bags.
wavy lime bags contain 5 striped salmon bags, 1 pale fuchsia bag, 2 dim red bags.
dim fuchsia bags contain 5 light beige bags, 5 clear cyan bags, 5 plaid gray bags, 4 dotted cyan bags.
muted olive bags contain 3 posh plum bags, 2 plaid green bags, 3 dull white bags, 5 vibrant maroon bags.
mirrored indigo bags contain 3 faded silver bags.
muted teal bags contain 1 pale lime bag, 5 faded gold bags, 3 bright coral bags.
wavy maroon bags contain 4 muted violet bags, 1 pale yellow bag, 5 dim cyan bags.
striped salmon bags contain 1 shiny tomato bag.
dotted green bags contain 3 striped teal bags, 4 striped blue bags, 5 dotted cyan bags, 5 bright lime bags.
dim gold bags contain 1 pale lavender bag, 1 faded magenta bag, 2 light black bags, 5 clear turquoise bags.
faded beige bags contain 5 wavy teal bags, 1 drab brown bag, 2 dull olive bags.
dull salmon bags contain 5 muted chartreuse bags, 1 bright plum bag, 4 clear blue bags.
clear violet bags contain 5 dark crimson bags, 2 dark aqua bags, 3 bright green bags, 3 wavy white bags.
dark chartreuse bags contain 4 bright crimson bags, 5 clear orange bags, 1 striped aqua bag.
striped bronze bags contain 5 faded beige bags.
plaid green bags contain 4 pale tan bags, 2 vibrant gold bags, 3 clear chartreuse bags, 3 dotted fuchsia bags.
dim magenta bags contain 1 muted orange bag.
shiny green bags contain 5 drab tan bags, 3 faded tan bags, 1 posh brown bag, 5 pale yellow bags.
clear purple bags contain 3 muted indigo bags, 2 drab brown bags.
vibrant cyan bags contain 3 striped tan bags, 4 pale salmon bags, 3 striped tomato bags.
drab green bags contain 5 shiny fuchsia bags, 5 dull orange bags, 1 light violet bag, 3 bright purple bags.
pale purple bags contain 1 shiny gold bag, 5 plaid gray bags.
shiny silver bags contain 1 faded beige bag, 5 mirrored yellow bags, 1 light fuchsia bag, 4 muted yellow bags.
mirrored beige bags contain 4 mirrored gold bags.
dim salmon bags contain 3 drab tan bags, 3 pale beige bags, 2 faded magenta bags.
vibrant crimson bags contain 2 faded aqua bags, 5 wavy maroon bags.
vibrant beige bags contain 5 muted magenta bags, 1 bright purple bag.
dull indigo bags contain 4 vibrant salmon bags, 3 dull magenta bags.
posh orange bags contain 5 bright red bags.
dim crimson bags contain 2 pale fuchsia bags, 4 shiny maroon bags.
vibrant green bags contain 2 dark green bags, 5 pale chartreuse bags.
faded indigo bags contain 1 wavy gold bag, 5 dotted crimson bags.
dull plum bags contain 5 faded gold bags, 1 mirrored gold bag, 3 striped gold bags.
mirrored yellow bags contain 4 faded violet bags.
dull cyan bags contain 2 drab tan bags, 2 dotted beige bags, 2 posh olive bags.
bright gold bags contain 5 mirrored beige bags, 1 bright coral bag, 2 plaid turquoise bags, 3 striped crimson bags.
light green bags contain 2 drab teal bags, 1 wavy coral bag, 1 muted violet bag, 4 clear black bags.
bright magenta bags contain 5 mirrored maroon bags, 4 drab crimson bags, 2 dark salmon bags, 3 dark violet bags.
dotted gray bags contain 3 drab gold bags, 5 posh lime bags, 3 dim yellow bags.
posh white bags contain 1 pale green bag, 4 striped tomato bags, 2 striped plum bags, 5 muted orange bags.
mirrored orange bags contain 2 dim silver bags.
mirrored gold bags contain no other bags.
dull yellow bags contain 5 clear beige bags, 2 striped silver bags.
dull bronze bags contain 1 shiny turquoise bag, 1 dull gray bag, 2 faded purple bags.
dotted yellow bags contain 4 striped coral bags, 5 pale gray bags.
drab teal bags contain 1 wavy olive bag, 3 shiny tomato bags, 5 pale aqua bags, 3 dark blue bags.
vibrant red bags contain 5 dark crimson bags, 1 drab silver bag.
faded lavender bags contain 1 dark coral bag, 3 clear violet bags, 1 faded magenta bag, 1 plaid gold bag.
wavy aqua bags contain 2 light teal bags, 5 pale turquoise bags, 5 faded lime bags, 3 dull plum bags.
dotted purple bags contain 1 posh tomato bag.
dark gray bags contain 2 dark tomato bags.
dark lavender bags contain 1 shiny crimson bag.
posh silver bags contain 5 drab cyan bags, 4 bright blue bags, 3 wavy lime bags, 4 vibrant violet bags.
mirrored olive bags contain 3 shiny green bags, 3 faded gold bags.
striped lime bags contain 4 light black bags, 1 bright salmon bag, 2 posh bronze bags.
faded coral bags contain 2 muted yellow bags, 3 bright maroon bags.
clear gray bags contain 4 wavy beige bags, 1 dull beige bag, 5 dim bronze bags, 1 faded chartreuse bag.
plaid chartreuse bags contain 1 posh lavender bag, 3 dull orange bags.
bright violet bags contain 3 striped green bags.
wavy turquoise bags contain 5 vibrant maroon bags, 3 drab tomato bags, 1 drab crimson bag.
striped plum bags contain 5 clear cyan bags, 5 shiny turquoise bags, 4 mirrored gold bags.
posh green bags contain 4 muted orange bags, 2 shiny turquoise bags.
dark fuchsia bags contain 3 pale cyan bags, 1 drab lime bag, 4 pale gray bags.
mirrored lavender bags contain 5 dull tomato bags, 1 light purple bag.
wavy coral bags contain 4 vibrant plum bags, 1 muted silver bag, 5 dark orange bags, 3 faded yellow bags.
dark green bags contain 2 striped yellow bags, 1 light bronze bag, 1 drab indigo bag, 1 plaid red bag.
pale crimson bags contain 1 dull orange bag, 5 bright turquoise bags, 5 pale coral bags, 5 bright indigo bags.
faded magenta bags contain 3 dull olive bags, 5 pale cyan bags, 1 vibrant magenta bag, 3 plaid olive bags.
plaid violet bags contain 2 pale olive bags, 5 faded magenta bags, 5 drab brown bags, 2 mirrored white bags.
pale aqua bags contain 4 dotted tan bags, 1 mirrored crimson bag, 3 light silver bags.
drab purple bags contain 2 faded chartreuse bags, 5 muted chartreuse bags.
dim chartreuse bags contain 1 mirrored gold bag.
clear green bags contain 4 faded red bags, 1 clear magenta bag, 2 drab teal bags.
light brown bags contain 3 vibrant gray bags, 2 shiny plum bags.
faded cyan bags contain 2 muted lavender bags.
dotted plum bags contain 4 shiny green bags, 1 dark aqua bag.
dull olive bags contain 5 faded silver bags, 4 wavy maroon bags, 4 plaid gray bags.
dark teal bags contain 4 clear indigo bags, 2 dotted aqua bags, 5 faded tomato bags.
vibrant fuchsia bags contain 5 drab beige bags, 5 shiny maroon bags, 5 wavy coral bags.
bright crimson bags contain 5 wavy olive bags.
pale tomato bags contain 2 mirrored orange bags, 2 dim maroon bags, 3 faded teal bags, 2 wavy silver bags.
wavy magenta bags contain 3 dark lime bags, 2 wavy silver bags, 4 clear turquoise bags.
plaid coral bags contain 2 faded red bags, 2 vibrant indigo bags, 1 dark teal bag, 5 dull purple bags.
bright purple bags contain 3 bright red bags, 5 posh olive bags, 5 posh lavender bags.
muted silver bags contain 2 posh purple bags, 3 dotted lime bags.
clear red bags contain 5 light turquoise bags.
dark aqua bags contain 1 light purple bag, 2 muted bronze bags, 5 dim cyan bags.
shiny brown bags contain 1 mirrored beige bag, 5 posh purple bags, 2 clear blue bags, 1 clear bronze bag.
shiny red bags contain 3 shiny fuchsia bags, 5 mirrored crimson bags.
dim purple bags contain 1 dull beige bag, 4 dotted silver bags, 4 light cyan bags.
faded teal bags contain 5 wavy gold bags, 1 pale cyan bag, 4 dark crimson bags, 3 dark coral bags.
wavy teal bags contain 5 shiny coral bags, 2 shiny brown bags, 3 dark crimson bags.
muted green bags contain 1 posh red bag, 4 bright indigo bags.
drab gold bags contain 2 dark tomato bags, 5 pale tan bags.
wavy yellow bags contain 5 dotted gold bags, 2 plaid olive bags, 2 muted olive bags.
striped blue bags contain 4 posh green bags, 5 pale beige bags.
light blue bags contain 3 striped beige bags, 3 drab lime bags, 2 mirrored brown bags.
mirrored bronze bags contain 3 faded aqua bags.
faded fuchsia bags contain 2 posh olive bags, 5 muted olive bags.
dotted tomato bags contain 1 striped magenta bag, 5 posh gold bags.
bright orange bags contain 5 light magenta bags.
vibrant turquoise bags contain 1 striped fuchsia bag, 4 dim chartreuse bags.
dark orange bags contain 3 drab turquoise bags, 1 drab orange bag.
vibrant brown bags contain 2 faded aqua bags, 3 drab maroon bags, 2 bright orange bags.
mirrored teal bags contain 3 posh aqua bags, 4 dim bronze bags, 5 pale yellow bags.
plaid cyan bags contain 1 posh lavender bag.
posh tan bags contain 3 muted bronze bags, 3 clear crimson bags, 2 dim tomato bags.
clear silver bags contain 5 pale olive bags, 1 muted olive bag.
bright cyan bags contain 5 dark coral bags.
dark cyan bags contain 2 posh orange bags.
striped tan bags contain 1 pale beige bag, 1 striped magenta bag, 1 clear cyan bag, 5 faded orange bags.
muted turquoise bags contain 4 mirrored gold bags, 4 striped gray bags.
wavy purple bags contain 1 dotted tan bag, 2 shiny plum bags.
dull magenta bags contain 1 wavy bronze bag, 2 shiny beige bags.
faded black bags contain 3 wavy violet bags, 2 clear black bags.
drab plum bags contain 2 muted violet bags, 4 pale blue bags, 5 vibrant plum bags.
clear yellow bags contain 4 pale teal bags, 5 vibrant gold bags, 5 light brown bags, 1 wavy gray bag.
dull silver bags contain 1 wavy silver bag, 4 dark orange bags, 3 faded violet bags, 1 faded gold bag.
vibrant olive bags contain 4 drab blue bags, 2 shiny tan bags, 1 light orange bag, 2 light magenta bags.
shiny yellow bags contain 1 posh lavender bag, 1 vibrant coral bag.
clear olive bags contain 1 dark salmon bag, 3 mirrored crimson bags, 3 dull silver bags, 3 dotted lime bags.
light beige bags contain 4 drab indigo bags, 5 drab brown bags.
drab tan bags contain 3 clear cyan bags, 3 drab crimson bags, 2 vibrant gray bags.
muted crimson bags contain 5 dark tomato bags, 2 shiny maroon bags, 2 pale olive bags.
posh chartreuse bags contain 4 wavy crimson bags, 2 posh olive bags, 2 dim fuchsia bags, 4 dim orange bags.
posh crimson bags contain 4 faded chartreuse bags, 1 clear white bag, 2 clear beige bags.
mirrored cyan bags contain 4 dark bronze bags.
dim orange bags contain 2 striped teal bags, 1 striped crimson bag, 5 wavy purple bags, 3 wavy brown bags.
striped green bags contain 2 vibrant green bags, 3 faded green bags, 4 muted lavender bags, 2 dull green bags.
drab beige bags contain 5 posh purple bags.
dark blue bags contain 5 light tan bags.
clear plum bags contain 4 pale green bags, 2 light olive bags.
dull green bags contain 3 bright green bags.
wavy plum bags contain 4 faded orange bags, 5 pale green bags, 4 faded violet bags, 4 posh green bags.
striped lavender bags contain 2 striped gray bags, 1 wavy plum bag, 1 wavy cyan bag.
dull coral bags contain 3 shiny chartreuse bags, 5 clear black bags, 4 vibrant crimson bags, 3 dim gray bags.
dull red bags contain 1 shiny gray bag.
dull brown bags contain 5 striped bronze bags, 3 striped beige bags, 3 bright purple bags, 2 dull blue bags.
light turquoise bags contain 3 striped turquoise bags, 2 bright coral bags, 5 posh olive bags.
dotted lime bags contain 5 clear cyan bags, 5 mirrored beige bags.
muted blue bags contain 4 light bronze bags, 4 light orange bags.
dark salmon bags contain 2 dotted lime bags.
dark plum bags contain 2 dotted blue bags, 5 faded green bags.
mirrored red bags contain 2 striped magenta bags, 3 muted violet bags, 5 dim yellow bags, 1 mirrored beige bag.
dim lavender bags contain 1 wavy teal bag, 4 muted violet bags.
dim white bags contain 5 striped gray bags, 5 bright aqua bags.
vibrant violet bags contain 4 dull lavender bags, 2 pale teal bags, 5 posh lavender bags, 2 shiny green bags.
pale yellow bags contain 1 wavy cyan bag, 1 dotted tomato bag.
shiny indigo bags contain 5 vibrant tan bags, 3 shiny teal bags, 3 pale gray bags.
dotted chartreuse bags contain 1 dim blue bag, 1 shiny orange bag, 5 pale turquoise bags, 1 shiny plum bag.
light olive bags contain 1 dull magenta bag.
striped white bags contain 5 light maroon bags, 5 pale teal bags, 2 dim gray bags, 5 posh gold bags.
dim teal bags contain 4 posh white bags.
plaid magenta bags contain 4 pale brown bags, 3 wavy violet bags, 4 dim teal bags.
plaid indigo bags contain 1 wavy bronze bag, 1 faded green bag, 2 dotted teal bags.
dull turquoise bags contain 3 striped violet bags.
vibrant lavender bags contain 2 dotted bronze bags, 5 vibrant silver bags.
light crimson bags contain 4 plaid tan bags, 4 striped beige bags, 4 plaid silver bags, 2 light red bags.
bright lime bags contain 4 dim indigo bags, 5 light beige bags, 5 wavy olive bags.
mirrored turquoise bags contain 5 posh green bags, 4 striped tan bags, 3 dull cyan bags, 3 vibrant blue bags.
mirrored blue bags contain 4 posh cyan bags, 2 pale olive bags.
plaid tan bags contain 3 posh white bags, 1 posh turquoise bag.
drab coral bags contain 1 mirrored lavender bag, 4 vibrant salmon bags.
plaid olive bags contain 4 bright salmon bags, 1 drab brown bag, 3 drab cyan bags.
pale indigo bags contain 1 shiny coral bag.
drab silver bags contain 3 light red bags.
dull chartreuse bags contain 1 light lime bag, 3 drab bronze bags, 1 wavy turquoise bag.
posh black bags contain 4 light brown bags.
wavy crimson bags contain 4 shiny coral bags, 5 dark aqua bags.
dotted magenta bags contain 2 mirrored fuchsia bags, 3 pale purple bags, 5 shiny yellow bags.
posh red bags contain 4 dark violet bags, 2 posh purple bags, 3 dim yellow bags, 1 shiny turquoise bag.
dim violet bags contain 2 shiny orange bags, 5 bright bronze bags, 2 bright salmon bags, 1 striped bronze bag.
drab salmon bags contain 3 dull violet bags, 3 posh brown bags, 4 posh beige bags, 2 mirrored gray bags.
dotted silver bags contain 1 drab black bag.
vibrant gold bags contain 2 clear crimson bags, 2 posh olive bags, 3 drab black bags, 5 vibrant gray bags.
muted chartreuse bags contain 4 faded yellow bags, 2 posh red bags, 4 dotted gold bags.
dark purple bags contain 4 mirrored lavender bags, 3 muted salmon bags.
faded tomato bags contain 2 plaid gray bags, 4 muted tan bags, 1 wavy beige bag.
pale magenta bags contain 5 pale tan bags, 1 posh brown bag, 5 drab gray bags.
plaid orange bags contain 5 dull bronze bags, 2 faded beige bags, 3 vibrant white bags, 2 dull coral bags.
faded red bags contain 5 dotted tan bags, 1 dull tan bag, 2 bright blue bags, 2 dark coral bags.
pale plum bags contain 4 shiny cyan bags, 1 mirrored yellow bag, 2 muted violet bags.
shiny gray bags contain 2 faded chartreuse bags, 2 shiny tomato bags, 4 bright tan bags.
light teal bags contain 4 clear blue bags, 5 mirrored white bags, 2 pale olive bags.
posh cyan bags contain 5 dim gray bags.
vibrant yellow bags contain 4 drab olive bags.
dull violet bags contain 4 dim gray bags, 5 posh olive bags.
wavy olive bags contain 3 plaid olive bags.
mirrored fuchsia bags contain 1 dull gray bag, 3 pale green bags, 1 clear bronze bag, 5 dark violet bags.
posh brown bags contain 2 mirrored aqua bags, 2 clear chartreuse bags, 2 clear bronze bags.
drab chartreuse bags contain 3 faded cyan bags, 4 faded olive bags, 5 muted beige bags, 4 clear blue bags.
vibrant magenta bags contain 3 wavy plum bags.
clear beige bags contain 4 striped salmon bags, 2 clear aqua bags.
light orange bags contain 5 drab orange bags.
dotted orange bags contain 3 plaid gray bags.
muted orange bags contain 1 striped plum bag, 1 pale beige bag, 5 posh lavender bags.
plaid plum bags contain 4 wavy magenta bags, 3 drab tan bags.
mirrored brown bags contain 4 dim lavender bags, 5 pale lavender bags, 5 light silver bags, 2 shiny brown bags.
shiny gold bags contain 4 muted violet bags, 3 dark lime bags.
drab orange bags contain 2 clear turquoise bags, 4 dim cyan bags.
dim aqua bags contain 3 faded maroon bags, 1 pale tomato bag, 5 dull crimson bags.
plaid gray bags contain 4 posh lavender bags.
striped turquoise bags contain 5 dotted bronze bags, 5 dark tomato bags, 5 faded olive bags, 5 shiny teal bags.
plaid lime bags contain 2 mirrored yellow bags.
shiny blue bags contain 5 dotted lavender bags, 1 plaid white bag, 3 dotted red bags.
clear cyan bags contain no other bags.
drab bronze bags contain 3 bright salmon bags, 3 drab cyan bags.
wavy gold bags contain 3 clear blue bags, 2 shiny brown bags, 3 dotted lime bags, 4 shiny beige bags.
light silver bags contain 4 striped coral bags, 4 shiny plum bags, 5 dark coral bags.
faded violet bags contain 5 light brown bags, 4 clear blue bags, 1 pale orange bag, 1 mirrored gold bag.
dim red bags contain 1 clear white bag, 4 clear blue bags, 1 light black bag, 3 dim violet bags.
bright bronze bags contain 1 dotted lime bag.
muted salmon bags contain 1 shiny beige bag, 5 dull cyan bags, 3 vibrant red bags, 3 vibrant purple bags.
striped indigo bags contain 2 posh lavender bags.
dull fuchsia bags contain 2 dim tomato bags, 1 wavy crimson bag, 3 mirrored tomato bags, 3 shiny cyan bags.
dotted tan bags contain 4 pale orange bags, 2 shiny fuchsia bags, 3 pale indigo bags.
vibrant bronze bags contain 5 dotted fuchsia bags, 4 light black bags, 1 dark salmon bag.
dark coral bags contain 1 vibrant gray bag, 3 shiny brown bags.
drab maroon bags contain 5 mirrored gold bags, 4 posh purple bags, 2 light brown bags.
light white bags contain 4 light tan bags.
plaid maroon bags contain 5 bright purple bags, 4 pale bronze bags.
posh lavender bags contain 2 faded purple bags, 2 posh purple bags, 1 shiny plum bag.
vibrant white bags contain 1 plaid silver bag, 5 bright cyan bags, 2 light crimson bags, 4 clear black bags.
light gray bags contain 1 striped beige bag.
striped maroon bags contain 2 posh bronze bags, 3 mirrored chartreuse bags, 2 dark green bags, 4 dull salmon bags.
wavy cyan bags contain 2 dark coral bags.
muted tan bags contain 4 dark bronze bags.
mirrored lime bags contain 4 clear orange bags, 5 vibrant bronze bags.
pale brown bags contain 4 shiny tan bags, 2 muted silver bags.
light maroon bags contain 5 bright turquoise bags.
bright salmon bags contain 4 faded orange bags.
wavy tan bags contain 3 wavy magenta bags.
muted bronze bags contain 2 posh red bags, 4 wavy cyan bags, 3 posh turquoise bags, 5 pale cyan bags.
drab olive bags contain 1 dotted orange bag, 1 mirrored red bag, 4 dotted bronze bags, 3 light black bags.
striped violet bags contain 4 drab blue bags, 5 plaid white bags, 3 posh red bags, 5 clear teal bags.
muted maroon bags contain 4 pale blue bags, 2 dim magenta bags.
shiny salmon bags contain 5 light purple bags.
pale salmon bags contain 3 posh lavender bags, 2 pale aqua bags.
clear teal bags contain 3 muted turquoise bags.
muted purple bags contain 3 dim white bags.
shiny magenta bags contain 1 mirrored aqua bag, 3 dark coral bags, 3 clear crimson bags, 2 drab maroon bags.
clear black bags contain 4 wavy cyan bags, 4 striped coral bags, 2 shiny olive bags, 3 drab tomato bags.
drab yellow bags contain 3 muted olive bags, 1 wavy gold bag, 5 mirrored aqua bags, 1 posh red bag.
striped fuchsia bags contain 5 pale yellow bags, 3 posh plum bags, 4 plaid olive bags.
plaid lavender bags contain 3 drab brown bags, 5 pale aqua bags.
pale beige bags contain 4 dim gray bags, 3 shiny turquoise bags, 4 faded purple bags.
dull beige bags contain 5 pale orange bags, 2 plaid salmon bags, 3 wavy cyan bags, 2 clear turquoise bags.
clear bronze bags contain no other bags.
dim tan bags contain 2 dotted plum bags.
clear lavender bags contain 1 pale yellow bag.
dull purple bags contain 5 shiny red bags, 3 shiny lime bags, 2 dim white bags, 3 dull chartreuse bags.
dotted crimson bags contain 3 clear cyan bags, 5 dark red bags, 5 shiny tan bags.
clear indigo bags contain 2 bright maroon bags, 5 posh green bags.
posh magenta bags contain 5 dotted silver bags, 3 mirrored olive bags, 1 wavy cyan bag, 5 plaid purple bags.
dark white bags contain 4 vibrant bronze bags, 2 striped bronze bags, 4 faded white bags, 4 light purple bags.
mirrored violet bags contain 1 faded tan bag, 2 plaid fuchsia bags, 4 dim salmon bags.
dim blue bags contain 2 bright turquoise bags, 5 light brown bags, 5 dull maroon bags.
dim cyan bags contain 4 dotted lime bags.
posh coral bags contain 2 dim yellow bags.
muted white bags contain 1 pale yellow bag, 3 dull gray bags, 5 posh purple bags.
plaid bronze bags contain 5 striped green bags, 4 plaid indigo bags, 4 posh coral bags.
light chartreuse bags contain 5 posh turquoise bags.
wavy white bags contain 2 striped lavender bags, 5 dull gray bags.
mirrored gray bags contain 4 mirrored fuchsia bags, 5 wavy plum bags, 1 mirrored beige bag, 5 muted orange bags.
plaid white bags contain 2 dark salmon bags.
shiny fuchsia bags contain 5 clear blue bags, 3 pale orange bags.
faded gold bags contain 2 clear chartreuse bags.
vibrant plum bags contain 4 vibrant blue bags, 3 bright brown bags, 1 wavy magenta bag, 4 shiny red bags.
pale black bags contain 3 drab indigo bags, 1 pale indigo bag.
clear tomato bags contain 2 dotted indigo bags.
muted lime bags contain 4 vibrant beige bags.
muted tomato bags contain 3 wavy tomato bags, 3 pale brown bags, 3 dim yellow bags.
muted aqua bags contain 1 shiny cyan bag, 3 dull lime bags, 2 vibrant red bags.
light bronze bags contain 2 drab blue bags, 4 drab yellow bags, 5 wavy plum bags.
dotted lavender bags contain 1 dim teal bag.
striped cyan bags contain 2 pale bronze bags, 1 plaid green bag, 1 dark plum bag, 4 drab purple bags.
muted plum bags contain 3 shiny green bags, 2 vibrant plum bags, 1 dim gold bag, 1 shiny orange bag.
dark crimson bags contain 4 clear blue bags, 5 light purple bags.
shiny lime bags contain 3 plaid beige bags.
vibrant orange bags contain 3 striped olive bags, 1 muted olive bag.
light lime bags contain 1 dotted red bag, 5 bright red bags.
shiny olive bags contain 5 vibrant black bags, 2 dotted violet bags.
wavy blue bags contain 2 dull blue bags, 4 dark violet bags.
dark black bags contain 4 drab cyan bags.
faded orange bags contain no other bags.
mirrored magenta bags contain 2 bright crimson bags, 5 mirrored fuchsia bags, 4 plaid green bags, 4 plaid gold bags.
dotted indigo bags contain 2 muted bronze bags, 5 dim coral bags.
dark magenta bags contain 5 dull green bags, 1 faded indigo bag.
bright fuchsia bags contain 5 drab beige bags.
faded blue bags contain 1 mirrored salmon bag, 1 faded bronze bag.
bright lavender bags contain 2 wavy beige bags, 2 dotted bronze bags.
wavy fuchsia bags contain 5 dim teal bags, 3 shiny orange bags.
striped gray bags contain 5 dark coral bags.
light magenta bags contain 1 shiny turquoise bag, 3 light tan bags.
dotted turquoise bags contain 1 dim gray bag, 5 drab red bags.
dark turquoise bags contain 1 wavy black bag, 2 wavy violet bags, 1 faded yellow bag.
vibrant gray bags contain no other bags.
dark red bags contain 3 drab maroon bags.
faded tan bags contain 3 mirrored fuchsia bags, 1 wavy brown bag.
mirrored purple bags contain 4 clear cyan bags, 5 dark silver bags, 4 bright tomato bags.
vibrant coral bags contain 3 shiny gold bags, 4 mirrored yellow bags, 2 pale aqua bags.
wavy beige bags contain 5 dull plum bags.
faded maroon bags contain 4 bright fuchsia bags, 4 muted green bags.
bright red bags contain 4 posh olive bags, 5 mirrored aqua bags, 4 striped lavender bags, 3 pale tan bags.
faded aqua bags contain 3 light black bags, 2 dull magenta bags.
dim black bags contain 1 dim gray bag.
pale fuchsia bags contain no other bags.
vibrant chartreuse bags contain 3 muted red bags, 3 dull beige bags, 4 drab gray bags.
pale gold bags contain 1 bright bronze bag, 1 pale magenta bag, 4 mirrored gray bags.
clear maroon bags contain 4 dark salmon bags, 5 dull olive bags, 1 dotted fuchsia bag.
light coral bags contain 5 posh salmon bags.
light salmon bags contain 1 dull black bag, 5 shiny tan bags, 1 posh lavender bag, 2 vibrant tomato bags.
pale coral bags contain 2 posh lavender bags, 4 drab magenta bags, 3 faded teal bags.
vibrant maroon bags contain 2 pale orange bags, 3 plaid gray bags.
bright aqua bags contain 3 shiny brown bags, 1 wavy olive bag.
dark violet bags contain 5 mirrored beige bags, 3 clear blue bags.
dotted aqua bags contain 1 drab tan bag.
pale lavender bags contain 3 pale fuchsia bags.
bright gray bags contain 2 mirrored yellow bags, 4 mirrored cyan bags, 1 dark tomato bag, 1 light silver bag.
light tan bags contain 2 pale orange bags, 5 dark orange bags, 4 dotted tomato bags, 4 dim cyan bags.
dull tan bags contain 1 dull green bag.
posh bronze bags contain 1 muted turquoise bag, 5 vibrant gold bags, 2 muted indigo bags, 3 pale cyan bags.
wavy brown bags contain 1 pale cyan bag, 3 mirrored fuchsia bags, 1 shiny plum bag, 5 drab black bags.
pale green bags contain no other bags.
shiny white bags contain 5 dull crimson bags, 5 pale magenta bags, 4 clear green bags.
dull aqua bags contain 3 plaid lime bags, 3 striped purple bags, 2 clear olive bags.
clear orange bags contain 5 drab brown bags.
shiny teal bags contain 1 wavy gold bag, 4 muted bronze bags, 1 clear orange bag.
dim bronze bags contain 2 muted turquoise bags, 4 muted tan bags, 2 striped crimson bags.
light fuchsia bags contain 5 dark black bags, 4 mirrored crimson bags.
pale gray bags contain 2 wavy maroon bags.
clear fuchsia bags contain 1 pale indigo bag, 1 striped salmon bag.
striped orange bags contain 3 striped turquoise bags, 4 dim violet bags, 5 dim crimson bags, 3 pale gray bags.
drab turquoise bags contain 2 muted bronze bags, 2 clear cyan bags, 4 shiny beige bags, 2 shiny coral bags.
wavy lavender bags contain 1 drab cyan bag, 1 drab orange bag, 1 wavy silver bag, 5 dim olive bags.
plaid aqua bags contain 5 dim green bags, 3 drab crimson bags.
striped magenta bags contain no other bags.
shiny turquoise bags contain 1 clear cyan bag, 5 pale fuchsia bags, 4 dim gray bags.
muted fuchsia bags contain 1 wavy crimson bag, 5 muted coral bags, 4 dark turquoise bags, 3 clear teal bags.
clear turquoise bags contain 2 drab cyan bags, 1 striped magenta bag, 2 striped plum bags, 3 clear cyan bags.
dark maroon bags contain 2 wavy gray bags, 1 dim coral bag, 3 shiny coral bags.
pale olive bags contain 4 plaid silver bags, 2 dim tomato bags, 2 mirrored fuchsia bags.
vibrant indigo bags contain 3 mirrored orange bags, 1 faded salmon bag, 1 vibrant maroon bag, 3 dotted teal bags.
mirrored green bags contain 5 plaid lavender bags, 2 drab purple bags, 5 plaid red bags, 1 dim gold bag.
wavy salmon bags contain 1 faded magenta bag.
light purple bags contain 1 striped plum bag, 5 dull bronze bags, 1 posh purple bag.
drab crimson bags contain 3 dark lime bags, 5 pale green bags, 2 shiny plum bags.
dark silver bags contain 2 muted turquoise bags, 1 pale silver bag, 1 drab lavender bag.
mirrored black bags contain 5 faded purple bags, 1 wavy violet bag, 4 dull gray bags.
striped silver bags contain 5 dim white bags.
dull white bags contain 4 drab crimson bags, 5 pale fuchsia bags, 1 shiny beige bag.
faded yellow bags contain 5 plaid yellow bags, 4 faded silver bags, 2 dotted tomato bags, 3 mirrored gray bags.
muted brown bags contain 2 drab yellow bags.
dim maroon bags contain 3 dotted red bags, 2 dim coral bags, 1 posh blue bag.
drab tomato bags contain 5 dotted bronze bags.
muted red bags contain 1 dull violet bag, 3 muted gray bags, 3 plaid orange bags, 3 dark blue bags.
pale tan bags contain 3 striped tan bags, 3 shiny coral bags, 1 posh gold bag, 2 posh green bags.
striped teal bags contain 3 dim crimson bags, 1 dull cyan bag.
drab blue bags contain 5 striped lavender bags, 3 dotted teal bags.
muted cyan bags contain 3 striped bronze bags, 1 light silver bag.
dim brown bags contain 5 muted violet bags, 5 shiny gray bags.
posh lime bags contain 5 wavy salmon bags.
wavy bronze bags contain 5 dotted fuchsia bags, 2 dark coral bags, 3 faded orange bags.
light gold bags contain 2 bright turquoise bags, 4 dim indigo bags, 2 dark magenta bags.
dotted cyan bags contain 2 vibrant maroon bags.
muted black bags contain 1 plaid crimson bag, 3 faded silver bags, 1 mirrored magenta bag.
drab gray bags contain 5 drab beige bags, 1 dim fuchsia bag.
wavy black bags contain 3 striped gold bags, 2 posh green bags, 2 wavy teal bags, 2 shiny tan bags.
bright yellow bags contain 2 plaid fuchsia bags, 3 clear bronze bags, 2 posh lavender bags.
clear coral bags contain 5 muted turquoise bags, 1 dim black bag, 3 dull aqua bags.
plaid yellow bags contain 2 dull white bags, 5 posh brown bags, 1 posh purple bag.
dark brown bags contain 2 mirrored indigo bags, 2 dark cyan bags, 2 light chartreuse bags, 4 faded tan bags.
drab cyan bags contain 2 mirrored beige bags, 5 dotted lime bags.
bright indigo bags contain 1 faded purple bag.
wavy tomato bags contain 4 pale beige bags, 2 striped magenta bags, 5 faded orange bags.
light black bags contain 1 dim yellow bag, 2 plaid tan bags, 5 dim indigo bags.
dim tomato bags contain 1 vibrant maroon bag, 4 striped tomato bags.
dark gold bags contain 1 light crimson bag, 5 posh tomato bags, 1 drab indigo bag, 5 striped bronze bags.
bright teal bags contain 1 muted fuchsia bag, 3 muted violet bags, 5 pale brown bags, 4 mirrored orange bags.
dotted gold bags contain 3 plaid olive bags, 5 wavy purple bags, 3 dim silver bags, 3 vibrant tomato bags.
bright coral bags contain 1 clear tan bag, 4 dark purple bags.
drab lime bags contain 2 dull white bags.
light cyan bags contain 5 drab turquoise bags, 5 bright blue bags.
dark tomato bags contain 5 wavy maroon bags, 4 dim olive bags.
shiny black bags contain 5 plaid aqua bags, 3 muted green bags, 2 dim coral bags.
dotted coral bags contain 5 light magenta bags, 3 light beige bags, 1 dark black bag.
drab magenta bags contain 5 mirrored gray bags, 3 clear cyan bags, 2 wavy teal bags, 5 wavy maroon bags.
pale lime bags contain 2 dull crimson bags, 1 dark tomato bag.
shiny maroon bags contain 3 wavy bronze bags, 1 dim green bag, 1 wavy maroon bag, 5 dark bronze bags.
striped yellow bags contain 5 light magenta bags, 5 clear salmon bags.
pale blue bags contain 4 dim coral bags.
posh fuchsia bags contain 3 bright beige bags.
posh purple bags contain 2 mirrored beige bags, 3 striped magenta bags, 1 faded purple bag, 5 pale green bags.
dark indigo bags contain 5 dotted blue bags, 2 pale blue bags, 1 posh tomato bag.
dotted violet bags contain 2 pale green bags, 3 wavy olive bags.
posh indigo bags contain 1 faded purple bag, 2 bright salmon bags, 1 drab orange bag, 3 shiny olive bags.
muted gray bags contain 5 dark red bags.
mirrored aqua bags contain 1 striped tan bag.
shiny coral bags contain 1 muted orange bag.
vibrant purple bags contain 5 shiny red bags.
bright maroon bags contain 1 wavy tomato bag, 3 faded purple bags, 4 plaid plum bags.
clear salmon bags contain 1 wavy gray bag, 2 wavy silver bags.
striped aqua bags contain 4 bright green bags.
clear chartreuse bags contain 4 dark red bags, 4 clear blue bags, 1 mirrored fuchsia bag, 1 clear bronze bag.
bright plum bags contain 3 striped magenta bags, 3 dull lavender bags, 4 dotted cyan bags.
plaid blue bags contain 1 dark maroon bag.
mirrored coral bags contain 5 mirrored blue bags.
bright white bags contain 5 muted tomato bags, 4 dotted gray bags, 3 posh gold bags.
faded crimson bags contain 2 pale maroon bags, 1 posh bronze bag, 3 pale red bags, 2 faded fuchsia bags.
plaid salmon bags contain 2 vibrant maroon bags, 4 wavy plum bags.
posh maroon bags contain 1 mirrored aqua bag.
bright blue bags contain 5 plaid chartreuse bags, 2 dark aqua bags, 2 posh white bags.
dull gray bags contain 2 pale fuchsia bags, 4 striped plum bags, 4 posh green bags.
dotted fuchsia bags contain 1 mirrored gold bag, 4 dim yellow bags, 1 shiny gold bag, 5 light brown bags.
striped gold bags contain 5 vibrant silver bags, 4 plaid silver bags.
pale maroon bags contain 4 dark red bags.
mirrored silver bags contain 4 light red bags, 5 dim green bags, 1 mirrored beige bag, 5 wavy cyan bags.
plaid purple bags contain 4 drab tan bags, 1 posh gray bag, 4 mirrored chartreuse bags, 4 pale yellow bags.
shiny beige bags contain 1 posh green bag, 4 clear cyan bags, 4 striped gray bags, 5 dark violet bags.
mirrored chartreuse bags contain 5 vibrant silver bags.
dull black bags contain 3 bright aqua bags.
vibrant black bags contain 4 light purple bags, 1 drab brown bag.
dark tan bags contain 2 mirrored salmon bags, 2 striped purple bags.
dim plum bags contain 5 mirrored beige bags, 2 posh cyan bags, 1 posh tan bag, 2 striped brown bags.
faded turquoise bags contain 3 plaid black bags, 2 muted olive bags, 3 clear gold bags, 4 mirrored white bags.
shiny chartreuse bags contain 3 pale orange bags, 4 drab green bags, 3 drab salmon bags, 4 dark bronze bags.
shiny lavender bags contain 5 faded lime bags, 3 drab olive bags, 4 muted turquoise bags.
bright tan bags contain 3 dark tomato bags, 5 posh white bags, 4 pale green bags.
faded olive bags contain 3 dull plum bags.
vibrant teal bags contain 5 dotted fuchsia bags, 1 clear teal bag.
bright black bags contain 5 striped coral bags, 1 dark salmon bag, 1 pale blue bag.
plaid black bags contain 5 bright indigo bags, 3 striped gray bags, 2 posh blue bags.
light plum bags contain 2 dark orange bags, 1 wavy black bag, 3 muted tomato bags, 5 dark fuchsia bags.
mirrored crimson bags contain 2 light brown bags, 5 posh gold bags, 4 faded purple bags, 3 shiny beige bags.
plaid turquoise bags contain 1 dark gold bag, 2 dim orange bags.
clear blue bags contain 4 pale green bags, 5 striped magenta bags, 3 clear bronze bags, 2 dotted beige bags.
pale teal bags contain 3 posh lavender bags, 5 dark lime bags, 1 mirrored gray bag, 1 dark aqua bag.
shiny tomato bags contain 3 clear crimson bags, 2 dotted violet bags, 1 shiny brown bag.
dotted beige bags contain no other bags.
posh teal bags contain 2 muted purple bags.
posh turquoise bags contain 1 wavy magenta bag.
posh aqua bags contain 5 drab gold bags, 1 pale indigo bag, 1 plaid olive bag.
drab black bags contain 1 dark coral bag, 1 clear teal bag.
faded purple bags contain 3 vibrant gray bags.
clear aqua bags contain 4 faded gold bags.
striped red bags contain 3 clear teal bags, 3 faded aqua bags, 2 wavy black bags, 2 wavy silver bags.
muted lavender bags contain 5 dark lime bags, 4 dotted teal bags.
pale white bags contain 5 bright white bags, 2 striped blue bags, 1 plaid gold bag.
drab aqua bags contain 2 dim cyan bags, 2 striped tomato bags, 4 posh green bags, 4 shiny aqua bags.
dark olive bags contain 1 bright indigo bag, 4 pale blue bags.
mirrored tan bags contain 1 bright black bag, 2 wavy orange bags, 2 striped green bags.
wavy gray bags contain 4 muted gold bags, 1 dark lime bag, 4 pale indigo bags.
dotted red bags contain 5 plaid tan bags, 4 vibrant purple bags, 2 dim green bags, 4 faded white bags.
faded brown bags contain 2 shiny tomato bags, 2 mirrored yellow bags, 5 clear magenta bags, 1 muted orange bag.
plaid brown bags contain 3 dark crimson bags, 1 plaid white bag, 2 pale indigo bags.
dotted bronze bags contain 3 plaid olive bags.
dim beige bags contain 2 faded aqua bags, 1 vibrant gold bag, 1 drab tomato bag, 2 wavy black bags.
faded lime bags contain 4 bright lime bags.
dark yellow bags contain 5 dim crimson bags.
posh salmon bags contain 3 dark bronze bags, 5 drab aqua bags, 4 mirrored gold bags, 5 mirrored aqua bags.
dull blue bags contain 5 dotted violet bags, 2 pale gold bags.
posh violet bags contain 5 pale lavender bags, 4 shiny turquoise bags, 5 dark violet bags, 1 plaid gold bag.
muted yellow bags contain 3 mirrored beige bags, 3 dim chartreuse bags.
striped tomato bags contain 1 shiny plum bag, 2 plaid olive bags, 2 dark violet bags, 2 clear cyan bags.
posh olive bags contain 4 light brown bags, 3 bright salmon bags, 5 muted gold bags, 5 clear bronze bags.
pale cyan bags contain 3 muted violet bags, 2 dim gray bags, 4 dark lime bags, 3 faded purple bags.
vibrant tan bags contain 3 vibrant purple bags.
pale turquoise bags contain 5 wavy gold bags, 3 pale yellow bags.
striped black bags contain 5 dim white bags.
shiny violet bags contain 5 clear beige bags.
dotted salmon bags contain 5 mirrored turquoise bags.
striped olive bags contain 3 clear lavender bags.
vibrant tomato bags contain 4 drab crimson bags, 3 drab orange bags, 1 striped aqua bag.
vibrant silver bags contain 4 striped tomato bags, 4 dim gray bags.
shiny bronze bags contain 1 dark aqua bag, 5 light plum bags, 5 mirrored gray bags.
dull maroon bags contain 2 wavy violet bags.
clear tan bags contain 4 clear chartreuse bags, 5 dim olive bags, 1 drab gray bag, 3 dull indigo bags.
plaid fuchsia bags contain 1 bright fuchsia bag, 3 dull bronze bags.
striped purple bags contain 5 vibrant maroon bags.
wavy silver bags contain 3 dark coral bags, 5 shiny brown bags, 5 dark red bags, 2 muted gold bags.
dim olive bags contain 5 dull bronze bags.
bright olive bags contain 2 pale turquoise bags.
vibrant blue bags contain 4 bright salmon bags, 1 dim gray bag.
muted gold bags contain 3 dim gray bags, 1 mirrored gold bag, 2 mirrored beige bags.
dotted teal bags contain 3 faded violet bags, 3 dull white bags.
faded green bags contain 2 shiny green bags, 1 vibrant crimson bag, 5 light white bags, 4 dark red bags.
bright beige bags contain 3 striped orange bags.
dim gray bags contain no other bags.
posh beige bags contain 5 posh white bags, 2 dull gray bags.
wavy orange bags contain 1 faded brown bag.
faded silver bags contain 3 shiny beige bags, 5 clear orange bags, 5 pale indigo bags.
vibrant aqua bags contain 2 wavy beige bags, 4 shiny maroon bags, 4 muted red bags, 5 plaid crimson bags.
dim yellow bags contain 3 clear blue bags.
dim coral bags contain 5 striped gold bags, 2 dotted orange bags, 4 muted orange bags.
mirrored white bags contain 5 dull black bags.
clear brown bags contain 1 clear tan bag, 5 plaid silver bags, 3 clear teal bags.
bright green bags contain 5 vibrant salmon bags.
clear white bags contain 4 plaid white bags.
plaid gold bags contain 1 vibrant black bag, 5 bright silver bags, 5 dark aqua bags.
light aqua bags contain 1 dotted lime bag, 4 light coral bags, 2 light orange bags, 3 dotted maroon bags.
mirrored tomato bags contain 1 vibrant gray bag, 3 dotted crimson bags, 4 plaid olive bags.
wavy indigo bags contain 1 striped crimson bag, 5 dim brown bags, 2 mirrored coral bags.
shiny crimson bags contain 2 dull lavender bags.
muted coral bags contain 4 striped turquoise bags, 5 shiny cyan bags, 3 dull gray bags.
dim lime bags contain 1 clear silver bag.
dull lime bags contain 4 dotted red bags.
dim indigo bags contain 2 striped tomato bags.
bright brown bags contain 2 wavy cyan bags.
dull gold bags contain 3 dotted turquoise bags, 4 muted salmon bags, 1 pale lavender bag, 2 muted lavender bags.
wavy violet bags contain 4 plaid plum bags, 4 dim black bags.
posh plum bags contain 3 dim yellow bags, 4 wavy olive bags.
mirrored plum bags contain 4 muted gold bags, 3 vibrant red bags, 4 faded blue bags, 4 plaid tomato bags.
dull teal bags contain 3 faded olive bags, 1 clear blue bag, 4 faded gold bags.
dull crimson bags contain 2 mirrored white bags, 2 dull plum bags.
wavy green bags contain 4 posh tan bags, 2 dotted indigo bags, 1 striped olive bag, 2 vibrant white bags.
striped crimson bags contain 1 wavy turquoise bag, 5 posh green bags, 4 pale salmon bags, 4 vibrant maroon bags.
drab white bags contain 3 pale green bags, 2 striped indigo bags.
shiny aqua bags contain 4 muted lavender bags, 4 striped lavender bags, 1 posh turquoise bag.
dark bronze bags contain 3 pale beige bags, 2 faded teal bags, 1 mirrored chartreuse bag.
clear crimson bags contain 3 pale cyan bags.
dotted white bags contain 4 mirrored black bags, 5 posh white bags.
dim turquoise bags contain 3 drab indigo bags, 4 dotted lime bags, 4 plaid fuchsia bags, 4 dark blue bags.
muted beige bags contain 3 dotted turquoise bags, 4 plaid turquoise bags.
plaid silver bags contain 5 pale cyan bags, 2 wavy brown bags, 1 drab turquoise bag.
striped coral bags contain 4 wavy gray bags, 5 faded purple bags.`;

function partOne() {
    const bagPairs = getBagPairs();

    // find bags which contain at least one shiny gold bag + remember unique colors (inner for loop, run 1)
    // after that, restart the loop if any bags were found to see if they can be included somewhere else (while loop)
    // check if those bags are included in any other not yet seen bags as it's an additional option (inner for loop, run 2+)
    // continue until no more bags to check (end of while loop)
    const bagPairsKeys = Object.keys(bagPairs);
    let searchForBags = ["shiny gold"];
    let foundInBags = [];
    let uniqueBagColors = [];
    while (searchForBags.length > 0) {
        searchForBags.forEach((toFind) => {
            for (let k = 0; k < bagPairsKeys.length; k++) {
                if (toFind in bagPairs[bagPairsKeys[k]]) {
                    if (foundInBags.indexOf(bagPairsKeys[k]) == -1) { // in case there are more bags which can be included in this bag
                        foundInBags.push(bagPairsKeys[k]); // add as a bag to check (again)
                    }
                    if (uniqueBagColors.indexOf(bagPairsKeys[k]) == -1) {
                        uniqueBagColors.push(bagPairsKeys[k]); // add as an option as it's also standalone
                    }
                }
            }
        });
        searchForBags = [...foundInBags]; // copy instead of reference!
        foundInBags = [];
    }

    return uniqueBagColors.length;
}

function partTwo() {
    const bagPairs = getBagPairs();

    // find bags included in our shiny gold bag + count bags for this pass (for loop, run 1)
    // after that, restart the loop if any bags are in there to see if they contain any bags (while loop)
    // check if those bags contain bags, count the number and add them to be checked (for loop, run 2+)
    // continue until no more bags to check (end of while loop)
    let checkInBags = [["shiny gold", 1]]; // [color, amount]
    let containsBags = [];
    let amountOfBags = 0;
    while (checkInBags.length > 0) {
        checkInBags.forEach((toFind) => {
            const bagsInBag = Object.keys(bagPairs[toFind[0]]);
            for (let k = 0; k < bagsInBag.length; k++) {
                const bagsOnThisPass = toFind[1] * bagPairs[toFind[0]][bagsInBag[k]];
                amountOfBags += bagsOnThisPass; // add the amount of bags on this pass
                containsBags.push([bagsInBag[k], bagsOnThisPass]); // [name of bag, number of bags]
            }
        });
        checkInBags = [...containsBags]; // copy instead of reference!
        containsBags = [];
    }

    return amountOfBags;
}

function getBagPairs() {
    const rules = input.split("\n");
    let bagPairs = [];
    for (let i = 0; i < rules.length; i++) {
        const ruleParts = rules[i].split(" contain ");
        const bagType = ruleParts[0].match(/[a-zA-Z\s]*(?=\sbags)/)[0];
        const bagContainsTexts = ruleParts[1].substr(0, ruleParts[1].length - 1).split(", "); // trim by 1 to lose period
        let bagContains = [];
        if (bagContainsTexts[0] != "no other bags") {
            for (let j = 0; j < bagContainsTexts.length; j++) {
                bagContains[bagContainsTexts[j].match(/(?<=\s)[a-zA-Z\s]*(?=\sbag[s]?)/)[0]] =
                    bagContainsTexts[j].match(/(?<=^)[0-9]+(?=\s)/)[0];
            }
        }
        bagPairs[bagType] = bagContains;
    }
    return bagPairs;
}

console.log(partOne());
console.log(partTwo());
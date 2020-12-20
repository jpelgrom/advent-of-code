"use strict";

const input = `Tile 1471:
.#...##.##
#...#.#..#
##.......#
#..#.....#
#..##....#
.#.#..#...
##.##.#..#
...###..#.
......##..
.##..##.#.

Tile 1699:
.##..#..##
#....#....
.##..#....
##......##
#...#....#
#.#......#
...#...##.
#.........
#..#..#...
.#..###.##

Tile 2909:
##...####.
.......#..
.....#...#
#...#..###
..........
##.......#
#..#.#..#.
.#..#.....
#......##.
.#...##...

Tile 2297:
.#.##.....
#..###.#.#
....###..#
..#...##.#
...#...##.
#........#
#........#
##.....#.#
.#....#..#
...#.##.#.

Tile 3109:
#...#.##.#
....#.....
......#..#
#.####.#..
###..##...
........##
#..####..#
##..#.....
.#.#..#..#
####.###.#

Tile 3767:
##..###.#.
##........
..#.....##
...#.....#
#..#.....#
#..#..##.#
.#......#.
..........
.......#..
#.#..##.##

Tile 1061:
..###.#...
.....#..#.
.#........
..#..##...
#.........
#...#.....
...#....##
#.#....#.#
........#.
...##.#.##

Tile 2953:
#..##.#.##
#.....#...
...##.....
#.#.......
..#.#....#
#.....#...
...#..#..#
.#.#....#.
#........#
..##.##...

Tile 3659:
###...#.##
..#.#....#
#.#...#...
#........#
#.#.##..##
#.###.##..
..#.......
.#.##.....
#..#.....#
.#..##..##

Tile 3733:
.##.##..#.
.#...##...
#........#
#.###.....
##...#...#
.##.......
..#...#..#
#.#.#..#.#
.#.#......
....#....#

Tile 1741:
#.#.......
#.......#.
.....#..##
......#..#
##.#.....#
#.........
#.#......#
#..##.#.#.
...##....#
###..##.#.

Tile 2053:
..#..##.#.
#...#...##
..#....##.
..#.#..#..
#.##......
#...##.#.#
...##.....
###.#...##
#....#....
.####.#..#

Tile 3391:
.#.#.#.###
....###...
...#.#.#.#
..#..#..##
.....##...
......#...
....#..#.#
.......#..
#..#..#...
#.#######.

Tile 2969:
#...#.#..#
###.##...#
.###..##..
#.........
##........
.#..#.....
#.....#...
#..#..#..#
.........#
...#....##

Tile 3167:
#..#.#.###
###.#....#
.#...#...#
...#.#...#
..#.##....
#....#..#.
#.##.....#
#...#...##
...####..#
..##..###.

Tile 3719:
...###.##.
...#....#.
#.#.##....
#...##...#
#.....##..
#.#....#..
#.#.#.....
#...#....#
...#....##
#.#.#.#..#

Tile 1531:
####.#.#.#
##....###.
..#...#...
#.##......
#........#
#.#....##.
......#.#.
..##.###..
..##..#..#
###...####

Tile 1361:
#....#...#
#..#.....#
##....###.
#........#
##.....#..
#...#..#.#
#...#.#.##
..#...##..
..........
#.##..##..

Tile 2393:
.###....#.
.........#
#.......#.
....#.....
......#..#
....###...
##.#.....#
##...###.#
#..##.....
##..######

Tile 1481:
####.#.#.#
...#......
#....#.###
.....#...#
..........
#.#....#.#
###.##....
##.......#
#.......#.
.##.#.###.

Tile 2851:
.##.....##
#..#.#....
.#...#...#
#.....#...
..#.......
.#........
...#.##...
...#..##.#
##...#....
.####..#..

Tile 3833:
.#.##.#.##
#.....#...
##.....##.
..#.......
..#.#....#
##.....#.#
#..##...#.
#.#.......
..........
#..#####..

Tile 2971:
##.#.#....
......#...
#.#.#.....
.........#
.....#...#
#....##..#
...#..##.#
..#.......
#..#..#..#
..#..#..##

Tile 3203:
###.###...
...#####.#
...#.#...#
#..##.....
.........#
#.#..#....
#.#..##.##
###...###.
###.#.#..#
##.#..##.#

Tile 3067:
...#.###.#
......##.#
.#...#...#
###...##.#
#........#
..........
#.........
#.#....#.#
.....#.#..
.#...#.###

Tile 1993:
.#...#...#
.##...#..#
#....#...#
.#..###...
...#..###.
#.#....#..
##...#...#
.....#..#.
.......#.#
...#....##

Tile 2903:
##.#..###.
###.....##
.#...##..#
...#.....#
###...#.#.
#...##...#
..#..#..#.
...##...##
..###.....
#.#...##.#

Tile 1439:
....##.#.#
###.......
##......##
#...#.#...
..........
........##
.#......##
#.......#.
.#......##
.####.##..

Tile 3023:
..#..#..#.
##....####
##....#..#
...#.#..##
.....##...
......#.##
##...#..#.
...##.##.#
#.....#...
#.#..#.##.

Tile 2503:
##.###.#..
..........
#.#..#..#.
#####.#..#
##....#.#.
#..#.#.#..
#..#...#..
.#........
#.#.##....
.#####..#.

Tile 1277:
#.#....##.
...##.#...
###....#..
#.#.#....#
#....#.##.
.....#..##
#...#...#.
#.......#.
#...##..##
#..#.#.###

Tile 2027:
..###..#..
#.........
...#..##..
..#.....##
#.#......#
...###.#.#
...#....#.
...###...#
##.#.....#
##.#####.#

Tile 2333:
#.#.#.#..#
..##......
.........#
.#.#.....#
#...####.#
.##......#
#....####.
...#.....#
###..#.##.
.######.#.

Tile 2069:
#.#.##..#.
..#.....#.
..#...##..
.......#..
..#####.#.
.#####...#
..#....#..
...##.####
.......#.#
.#...###.#

Tile 1999:
#.#.##.#..
#.....#.##
..#.#.....
..#......#
..###....#
...#.....#
#.#...##..
#....#.#.#
##......#.
#..#..#.#.

Tile 3181:
...#####..
....##.#..
......#..#
.#.#......
#......#..
#........#
.#.....###
....##.###
#..#..#.##
########.#

Tile 1321:
.#..#.....
..#...##.#
#.#.....##
....#.....
#....#..#.
.....#....
#...#.....
#.#.#..#.#
#..#..#...
...#......

Tile 2549:
.##....###
#...####..
##.......#
#.###...##
..#####...
#.#..##.#.
#..##.....
#....#...#
#.###...#.
#...#.##.#

Tile 1951:
.#.#...#..
##..#..#..
..#.....##
.#.#..#..#
#...#.....
...#...#.#
.#.......#
.#...#.#.#
.#......#.
#..#.#####

Tile 2111:
.##.#....#
#.#.....##
#.#...#..#
#......###
#....##.##
.......#..
#....#...#
.##.##.#.#
#...#..#..
.##.##.###

Tile 1447:
..#.#.....
##..####..
##...#...#
.##..##.#.
.....#...#
...#......
.....##..#
..#..#..#.
.#.......#
#.#.#.#...

Tile 2707:
.#.#####.#
###.#.....
.#.##.##..
......#...
#.#...##..
.#...#.###
....#.##.#
...#..#...
.#.....#.#
#.#####.##

Tile 2437:
..#.#...#.
..#.......
.##..##..#
#..#...#..
..#....#..
##.....#.#
##........
...##...#.
.....#...#
.#...#.###

Tile 2699:
.##.#..###
.........#
...#..#..#
...#.#....
#......###
##......##
...#.....#
.....#...#
#....#...#
..###.###.

Tile 1913:
.#######.#
.#.##.#..#
#.##.....#
####..#..#
.##..#.##.
#.....#..#
...#.#....
..#..#....
##......##
.#########

Tile 3361:
.....##...
#.####...#
#.#..#...#
.#.###.##.
....##...#
......#...
.#.#....#.
#........#
#..#..#...
#.#...#...

Tile 3359:
.####.#..#
#.......#.
..........
..#..#....
#...##.##.
....#.....
..#..#..#.
...#.#....
#..#...#.#
#######...

Tile 2731:
###.##.##.
......##..
#........#
..........
.........#
###....#.#
...#..#..#
##...#.#..
.#.#.#.#..
#.#....#..

Tile 1543:
.#..###.##
#........#
#...#.#...
..#..##.##
#...#...#.
.......#.#
..#...##.#
....#..###
......#.##
###.#..###

Tile 2861:
##..####.#
##......##
...##...##
.#......##
...#.#....
..##.###.#
##.#.#.#..
#..#...#.#
##......##
##.#...##.

Tile 3559:
.#..#.#...
......###.
.#...#...#
#...###.##
#...#..#.#
#..##.....
####....##
......#..#
...###.#..
#.#.....#.

Tile 2819:
.#..#..#.#
#...#.#..#
....#....#
.#.#...#..
....####.#
.#...#.#.#
...#.....#
#........#
#..###.#..
.###...#..

Tile 1613:
.##.#..###
#.....#...
#...##..##
.##......#
#.##......
.#..#.#..#
#..#.##...
.#.#......
#....#....
.#####....

Tile 1213:
...#.#..#.
#.....#..#
...#####.#
.##..#.##.
.##.......
##.......#
#........#
###......#
....#...##
######.##.

Tile 2161:
###.#.#...
.##..#...#
#.##......
.....#.#..
.......##.
#.#....##.
##....#...
.#..#....#
#.........
....#...#.

Tile 3041:
....#.#...
.##.##...#
....#.....
##.##..#..
#.......#.
#...#.....
.##....###
...#....##
#.....#...
..##.####.

Tile 1871:
#.#.....##
##.....#..
..###...##
.......#.#
........#.
..#.....#.
.#.#......
.#..#....#
.##.#..###
..##.#....

Tile 2687:
.#...#....
...#.#..##
..#.......
#.#.......
...#..#.##
...#....##
##.......#
#..#...#..
#.######..
.##.##.#..

Tile 2269:
#......##.
...#..#.#.
#.#.....#.
#.#.##...#
.#.#.....#
##.......#
#....##..#
#..#..#...
#...##...#
.###....#.

Tile 2089:
##.#.#....
..#.#..##.
.#.......#
#.....#..#
........##
.....#.###
#.......##
.#.......#
..##.##..#
...#..##.#

Tile 1097:
##.##.##.#
.....##..#
..#.....##
##......#.
....#..#.#
..#..#..#.
.#.......#
..####.#..
#...#...##
##...####.

Tile 3001:
.....#..#.
#..#...#.#
..#...####
..#.#...#.
..#..#.###
#.........
#...#.###.
#...##..#.
#......#..
......#.#.

Tile 2803:
.####.###.
##........
..#......#
#.#..#.#.#
##..#...##
#.#......#
.##..##...
.###.....#
###....##.
#..#.#..#.

Tile 3407:
#.........
........#.
.........#
#.##.##..#
###....###
..........
.........#
.#..##..##
#..##.#...
.##...##..

Tile 2423:
#####.##.#
......##.#
..#.#.#..#
#...##....
#...#.#.#.
..##......
#........#
.........#
..##.....#
#..##...#.

Tile 2213:
.##.#.#..#
#...#.#..#
........##
.#......##
#...#....#
.....#..#.
.......#..
.........#
#.........
...####.##

Tile 2879:
.##.#.###.
.#........
..#......#
#..#.#....
..#.......
#......###
.#...#.#.#
#.......#.
#.#....#.#
.##...#...

Tile 3779:
.#####.#.#
.........#
.#....##..
##...##..#
#..####...
..#..##.#.
.#....#.##
####...#.#
#.#.......
......#..#

Tile 2647:
.###.##.#.
#.####.###
#........#
#.#.###..#
...#......
.....#....
##..###.##
..#.....#.
#..#..#..#
#..#.#..#.

Tile 3623:
...##.#...
#.#.......
....##.#.#
......#..#
#.....#.##
.....##...
#.#.#....#
.#..#.....
#..#.#.###
#.##.....#

Tile 1733:
.##.#.##..
###....###
...#.###.#
#.#.#.....
#....#.#.#
######..##
#####....#
#..#.#.###
........#.
.#.....#.#

Tile 1601:
##...#.###
#...###..#
...##.#..#
.##.#..#.#
#.##....##
#.#.##...#
....#.#..#
##....#...
.#.#.#...#
#####..##.

Tile 2203:
#..#.#.#..
...#.....#
#...#...##
#......#.#
...#..#..#
#.....#...
...##.#..#
.#........
........##
...###...#

Tile 1051:
##...#...#
.....#..#.
#....#....
...#......
..##..#...
..#......#
.#.#####..
##.#......
#...##....
##.#.#.##.

Tile 3823:
.######...
...#.....#
.#........
........##
..#......#
.#...#...#
..#.......
.......###
#..#.....#
.#.#.####.

Tile 3121:
.##.##....
.#.....###
..#.#.#..#
.##....#..
...#.#..##
#..##.###.
.#...#....
###....#.#
#...#....#
#..#..##..

Tile 3347:
#..##.#.##
#.#.#.#...
.##......#
#..#..#..#
#.###....#
#......#.#
..##.#...#
###..#...#
#.#....#..
.##..####.

Tile 1609:
#...#.###.
#.#......#
#..#.#.#..
..#.....#.
#......##.
..###.....
..........
...#.#..##
#.....#...
#..#...##.

Tile 1283:
..#.##....
.#.#.....#
.#..#..#.#
...#.#####
.##...#.#.
#........#
#....#...#
##...###.#
#.#....#..
..#.##.##.

Tile 2543:
#####...##
#....##...
..#.......
.......#.#
.#........
...#....##
#........#
....#..#..
#.#.#....#
#####.##..

Tile 1019:
###..##.##
..#.......
.#...#....
##.......#
#........#
#.#..##...
...#......
.....#...#
#..##.#.##
#####.#.##

Tile 3433:
.##.....##
#..#......
.###......
...#......
.#.#.#.#..
##.#...#.#
...##....#
#.###....#
######...#
.#...##.##

Tile 2207:
.##.#..#..
....#..#.#
..#....#..
....#....#
...##...##
....#.####
#..#...###
..#.....##
#.#.#....#
.#.##....#

Tile 1861:
#.#.#..#.#
.#..#....#
.....#...#
...#..#...
........#.
#..#......
#....#.#.#
#......#.#
#.....#..#
#...#.....

Tile 3163:
####.#..##
...#.##...
##..#.....
.........#
.#.....#.#
.#..#..#.#
.........#
..#....#.#
#.......##
#.###.#.##

Tile 1453:
###.#....#
#.......##
..#.......
..#...##..
#.....###.
.........#
..##...#.#
#......#..
....#....#
##.....###

Tile 1987:
.#.#.##...
##.##..#..
##.#.#...#
..........
....#....#
##...##..#
.........#
##.#.....#
.#........
.#.#..##..

Tile 2441:
..#.#.#.#.
..#.......
#.......##
.##.#.####
..........
.#..##...#
#..#.####.
.#.......#
##.#..##..
.#####..#.

Tile 1499:
..#######.
##...###.#
.........#
##......##
.#....#...
###....#.#
...#..#...
......###.
#..##.....
.#.##....#

Tile 1151:
#..###..#.
#.#.##...#
.......#..
#......##.
..#..#.#..
#.##....#.
#........#
##........
..####....
..##..####

Tile 2939:
..#####.#.
...##...#.
#..#.#.#..
#.#......#
......#.#.
........##
.......#.#
#...#....#
#.#..###.#
.....#...#

Tile 1571:
..#..#####
..........
##.#.#.##.
........#.
#.###....#
..#.###..#
.#..#.#.##
#.#.#....#
#..#......
.##..###.#

Tile 3863:
#..#..#...
##.##.#...
#.#...##.#
..#..##.##
#..###....
#..#.....#
##......#.
#.........
....#....#
..##....#.

Tile 3881:
#.#.#..#..
##.......#
.........#
.#.#..#...
#.#.##.###
#..#......
.....#...#
#.#...#...
..#....#.#
##.#..#...

Tile 1307:
.....#....
###.##...#
.###.#....
....#.....
..#.......
..##.....#
#....#....
..#..##..#
#.#.#.#.#.
.......###

Tile 3739:
...#.##.#.
#...###...
##.#..#..#
#..#.#..##
....#.##.#
........##
..#..#.#..
.#...#....
.#..#.....
.##....#.#

Tile 1621:
##.#.#.#..
#.##..#..#
...##.....
..#..#....
.........#
#..##.....
..#..#....
#..#.....#
#..#..#..#
....##.#.#

Tile 3011:
.#...####.
..#.#.....
..........
#.##.#...#
#..#...###
#......##.
..#.#.....
#...#...#.
........#.
#.##....#.

Tile 2309:
#......#..
..#.......
#...#....#
##.#..#..#
..........
.#...#..#.
.###.#..##
##..#.....
..#.#.....
.#.####...

Tile 2383:
.###.##.#.
###....#..
#..#.#...#
#.........
..#......#
##..##.#.#
.#..#.....
###.#.#...
#....#...#
##.#..#...

Tile 2273:
.##.#...#.
..........
#....#....
#.#..#....
#.#....#..
#.........
.#....#...
..#.#....#
#...#..#.#
.#.......#

Tile 1549:
#..#.###.#
.#.#.#.#..
#..#....##
#..#.##..#
#....##..#
....#.#...
#...#..##.
.....#...#
#......#.#
.#..####.#

Tile 1867:
.#.#..#..#
#.##.###..
.#...#...#
#.#...##..
......#...
#.#..#..##
...##.....
.......#.#
#........#
.....#.##.

Tile 3061:
...#######
#...#....#
.....##...
#....#...#
..#.#...##
..........
........#.
.#..##..#.
...###.#..
#.##.###.#

Tile 2447:
#.#.####..
#.......##
......#.##
#........#
......#...
####..#...
#...#....#
.#........
#.#..#..##
.#.#.##...

Tile 2243:
###.#..#.#
..#.......
...##....#
#..###..##
.##...#.#.
#.#..#.#.#
#....#.#..
#....#..#.
..#...##.#
#.##...#..

Tile 2551:
.#.#.....#
#..#....##
..#....#.#
.###....##
#...#..#..
#........#
#.....#.#.
##...##.##
......#...
.####.#...

Tile 3037:
#...##.#.#
#...##...#
#...###.#.
...#...#.#
#.....#.##
#....#.#.#
#..##..###
....##...#
##...#.#.#
......####

Tile 2389:
###..##.#.
##..####..
....#....#
.........#
.#..#..#..
#..#.....#
...#......
#...#....#
..#.....##
.##..##.#.

Tile 2791:
.###.#.###
#....#...#
##...#.#.#
##.####.##
........##
##.#.#....
.##...#...
#.#..#####
.#...#.#.#
#.#...#...

Tile 1229:
.#.###.#..
#.##..#...
.#.....###
.##.....##
#.#......#
..#.#....#
.........#
##.#.....#
###.....##
###.#.#...

Tile 2579:
#..#.#.#..
##.....#..
####....#.
....#.##..
#....#.#.#
###....#..
#.#.#.#...
#..#...#.#
#..#.....#
..###.#...

Tile 2837:
##.#####..
....##...#
#.#......#
..........
.......#..
.#........
#......###
#.#.....#.
##....#...
.....#....

Tile 2957:
#########.
..........
###..#.##.
##....#.##
...#.#.##.
.......#.#
#....#....
#...##.#..
.#......#.
.....####.

Tile 3083:
..#..#..#.
......#...
....#..###
#....##...
.#.......#
.......#.#
.....#...#
.......#..
.....###.#
#.##.###.#

Tile 3533:
...#.###.#
#..#..##.#
#.#..#.#..
##..##....
#....#....
#.#.......
##...#....
.........#
#.......#.
....###.#.

Tile 1289:
#..##.##.#
......#..#
#..##.....
#.........
....#..##.
##...##.##
#..#.#...#
....#..###
#.........
......##..

Tile 1559:
.#..##.#.#
###.......
##....#.#.
.##......#
#.#...#...
.##.#....#
##.....###
#.........
.....#....
###..#.###

Tile 2693:
.#........
.......#..
#.#.......
..........
#.......#.
#.........
#.#.......
....##.#.#
.....#....
.#.##...#.

Tile 1669:
###.###.#.
#........#
..........
#..#.#....
#...#...##
.#....#...
#..#......
##....#...
.##.#..#.#
########..

Tile 3541:
#..####.#.
.#.......#
#......#.#
..#...####
#.....#...
......#...
#......##.
..#.....#.
.......#.#
.###..#..#

Tile 3389:
#..####...
#.##.....#
.#.##....#
#...##....
.####...##
#.#..##..#
....##.#.#
.###..#...
#..#.....#
#.....##.#

Tile 1889:
#.#.#####.
.##..##.#.
#..#.....#
#..##....#
##..#...#.
...#.#..#.
#..#..##.#
#.#.#...#.
...#..##..
.....#.#..

Tile 3343:
##...#.#..
#..##...#.
##.......#
#......#..
..#...##.#
##..##.#..
.###....##
#.##...#.#
##.......#
...#.....#

Tile 1231:
......##..
#..#.#####
.##...###.
#.....#...
#..#.##.##
#....#.#..
#.#.....##
...#.#.###
.......#.#
#.##.####.

Tile 3637:
.#...#...#
###.###..#
##..#....#
.....#..#.
....#.....
#.#.#..###
#....#.#.#
.##..#...#
.#..##..#.
..#......#

Tile 3499:
.#....#.##
.##...##.#
#..#..#..#
...#.....#
.#....#...
...####...
....#.....
..........
#.........
#..#.#.##.

Tile 1009:
..####..##
.#.....#..
..........
.........#
#.#.#....#
#.##..#..#
.#..#.#.#.
#.....#...
#......#.#
.##.#.##.#

Tile 2473:
#.#.##.#..
.##..#....
#...#....#
...#....#.
..##..#..#
..........
...#....##
.#......#.
.....#...#
.#....#..#

Tile 2137:
##.##.##..
.........#
#..#.#...#
#........#
.........#
###.##.#.#
.........#
#.#.##....
...#.#....
###...####

Tile 1489:
.##.####.#
#.##.##..#
...#.##.#.
#.##...#.#
.##.#.#.#.
###......#
##.#...#..
#.#...#.#.
.##...#.##
.#..###..#

Tile 1291:
..##..#..#
.#....#..#
.........#
#......#.#
.........#
...#...#.#
#.........
...#.....#
###....###
.##.###...

Tile 1483:
#.##....#.
#...####.#
..#...#..#
.........#
..#####...
.#..#..#.#
#....##..#
#..#.....#
#....#...#
.#.##.##.#

Tile 3119:
..##.#.#..
#....##.#.
##.......#
#....#....
......#...
..#....##.
#...#.....
.........#
...##....#
#.#.###...

Tile 2609:
.....##.#.
.....#..##
#.#.#.....
#.##...##.
...##..#.#
..##..##.#
#.##...###
......#.#.
#..#.....#
..#####...

Tile 2399:
..#.#...#.
........##
#.##......
#..##..#..
..........
..#.#..#..
#.........
#...#...##
#........#
##...#.##.

Tile 3847:
#..#....##
...####.##
...#....#.
..#...#...
##..#.##..
#.##.#...#
...##....#
#.###....#
..#.#....#
###.#.##.#

Tile 2531:
.###.#..#.
....#..#..
#......#.#
.........#
....#..#..
.###..###.
#.#......#
##...#..##
#...#.####
#..#...#..

Tile 1627:
..#.##..#.
.........#
###....###
#....#.#.#
#..#...#.#
#......###
...##.....
##..##.#..
....#.#...
#....##...

Tile 2719:
#...#.#...
......#.##
#..##.....
.....#.#..
.#...#..#.
...##....#
#........#
##......#.
#.#..#...#
.####..#..

Tile 3169:
#.#.#..#..
..#.#.....
......#...
#.#.##....
....#....#
...#...#.#
...#...##.
#...#.....
#..#.#...#
...#..###.

Tile 1193:
#.#....###
...#.#..#.
..#..#..#.
#........#
#.........
#.#.....#.
##........
#.........
#.........
...##..#..

Tile 1459:
###..##..#
.........#
.........#
.##.......
##.#......
###......#
#.#.....##
........##
...###..##
#...##.###

Tile 3943:
...##....#
........#.
..#.......
#.##.#....
##.#.....#
#.......##
.#..#.#...
..........
.......##.
##.##.###.`;

function partOne() {
    const tilesWithIds = input.split("\n\n");
    let tiles = [];
    for (let i = 0; i < tilesWithIds.length; i++) {
        const tileLines = tilesWithIds[i].split("\n");
        const tileId = tileLines[0].match(/(?<=Tile\s)[0-9]*(?=:)/)[0];
        tiles[tileId] = tileLines.slice(1);
    }

    // find corner/side pieces
    let sideMatches = [];
    for (let j = 0; j < Object.keys(tiles).length; j++) {
        const idOfThis = Object.keys(tiles)[j];
        let matched = 0;
        for (let k = 0; k < Object.keys(tiles).length; k++) {
            const idOfK = Object.keys(tiles)[k];
            let matchedEdges = [];
            if (k != j) {
                for (let checkJ = 0; checkJ < 8; checkJ++) {
                    const optionsForJ = getTileEdges(tiles[idOfThis], checkJ % 4, checkJ >= 4);
                    for (let checkK = 0; checkK < 8; checkK++) {
                        const optionsForK = getTileEdges(tiles[idOfK], checkK % 4, checkK >= 4);
                        matchedEdges.push(optionsForJ.filter(item => optionsForK.includes(item)).length);
                    }
                }
            }
            if (Math.max(...matchedEdges) > 0) matched++;
        }
        sideMatches.push({ id: idOfThis, matches: matched });
    }
    const cornerPieces = sideMatches.filter(item => item.matches == 2);
    return cornerPieces.map(piece => piece.id).reduce((a, b) => a * b);
}

function partTwo() {
    const tilesWithIds = input.split("\n\n");
    let tiles = [];
    for (let i = 0; i < tilesWithIds.length; i++) {
        const tileLines = tilesWithIds[i].split("\n");
        const tileId = tileLines[0].match(/(?<=Tile\s)[0-9]*(?=:)/)[0];
        tiles[tileId] = tileLines.slice(1);
    }

    // find corner/side pieces
    let sideMatches = [];
    for (let j = 0; j < Object.keys(tiles).length; j++) {
        const idOfThis = Object.keys(tiles)[j];
        let matched = [];
        for (let k = 0; k < Object.keys(tiles).length; k++) {
            const idOfK = Object.keys(tiles)[k];
            let matchedEdges = [];
            if (k != j) {
                for (let checkJ = 0; checkJ < 8; checkJ++) {
                    const optionsForJ = getTileEdges(tiles[idOfThis], checkJ % 4, checkJ >= 4);
                    for (let checkK = 0; checkK < 8; checkK++) {
                        const optionsForK = getTileEdges(tiles[idOfK], checkK % 4, checkK >= 4);
                        let matchedOn = null;
                        if (optionsForJ[0] == optionsForK[2]) matchedOn = "top";
                        if (optionsForJ[1] == optionsForK[3]) matchedOn = "right";
                        if (optionsForJ[2] == optionsForK[0]) matchedOn = "bottom";
                        if (optionsForJ[3] == optionsForK[1]) matchedOn = "left";
                        matchedEdges.push(matchedOn);
                    }
                }
            }
            for (let l = 0; l < matchedEdges.length; l++) {
                // each match will have 8 variations: each rotation + flipped pair
                if (matchedEdges[l] != null) matched.push({
                    id: idOfK, mainMatchesEdgeOn: matchedEdges[l],
                    mainOrientation: Math.floor(l / 8) % 4, mainFlipped: Math.floor(l / 8) >= 4,
                    matchOrientation: (l % 8) % 4, matchFlipped: (l % 8) >= 4
                });
            }
        }
        let uniqueMatched = [];
        for (let m = 0; m < matched.length; m++) {
            if (uniqueMatched.indexOf(matched[m].id) == -1) uniqueMatched.push(matched[m].id);
        }
        sideMatches.push({ id: idOfThis, matches: uniqueMatched, combinations: matched });
    }
    const cornerPieces = sideMatches.filter(item => item.matches.length == 2);

    const puzzle = [[]];
    // take a corner piece and make it the top-left corner (0,0)
    // then, place the piece that was on the right (0,1) which will allow something on the bottom as well
    // next, with that orientation of the piece on (0,1), check which piece was on the right of that one
    // continue until another corner piece is reached and we can no longer go to the right
    // then, move down 1 row and place the piece that was expected there
    // go right, until edge, repeat
    const piecesNextToTopLeft = cornerPieces[0].combinations.filter(item => item.mainMatchesEdgeOn == "right");
    const piecesBelowTopLeft = cornerPieces[0].combinations.filter(item => item.mainMatchesEdgeOn == "bottom");
    let pieceSearch = 0;
    let pieceBelowTopLeft = [];
    while (pieceBelowTopLeft.length == 0) {
        const piece01 = piecesNextToTopLeft[pieceSearch];
        pieceBelowTopLeft = piecesBelowTopLeft.filter(item => item.id != piece01.id
            && piece01.mainFlipped == item.mainFlipped && piece01.mainOrientation == item.mainOrientation);
        pieceSearch++;
    }
    const pieceNextToTopLeft = piecesNextToTopLeft[pieceSearch - 1];
    pieceBelowTopLeft = pieceBelowTopLeft[0];

    puzzle[0][0] = {
        id: cornerPieces[0].id, orientation: pieceNextToTopLeft.mainOrientation, flipped: pieceNextToTopLeft.mainFlipped,
        edges: cornerPieces[0].combinations.filter(item => item.mainOrientation == pieceNextToTopLeft.mainOrientation && item.mainFlipped == pieceNextToTopLeft.mainFlipped)
    };

    let piecesPlaced = 1; // the top left piece
    while (piecesPlaced < sideMatches.length) {
        const lastPlacedRow = puzzle.length - 1;
        const lastPlacedPiece = puzzle[lastPlacedRow][puzzle[lastPlacedRow].length - 1];
        const pieceToRight = lastPlacedPiece.edges.filter(item => item.mainMatchesEdgeOn == "right");
        let [pieceToPlace, pieceOrientation, pieceFlipped] = [null, 0, false];
        let [placeOnRow, placeOnColumn] = [puzzle.length - 1, puzzle[puzzle.length - 1].length];
        if (pieceToRight.length > 0) {
            pieceToPlace = pieceToRight[0].id;
            pieceOrientation = pieceToRight[0].matchOrientation;
            pieceFlipped = pieceToRight[0].matchFlipped;
        } else {
            const pieceOnStartOfNextRow = puzzle[lastPlacedRow][0].edges.filter(item => item.mainMatchesEdgeOn == "bottom");
            pieceToPlace = pieceOnStartOfNextRow[0].id;
            pieceOrientation = pieceOnStartOfNextRow[0].matchOrientation;
            pieceFlipped = pieceOnStartOfNextRow[0].matchFlipped;
            puzzle.push([]); // new row
            placeOnRow++;
            placeOnColumn = 0;
        }
        const pieceObj = sideMatches.find(item => item.id == pieceToPlace);
        puzzle[placeOnRow][placeOnColumn] = {
            id: pieceToPlace, orientation: pieceOrientation, flipped: pieceFlipped,
            edges: pieceObj.combinations.filter(item => item.mainOrientation == pieceOrientation && item.mainFlipped == pieceFlipped)
        };
        piecesPlaced++;
    }

    // we've got our puzzle! finally time for the part 2 challenge
    // first, remove the edges and assemble it
    let assembledPuzzle = [];
    let puzzleRowHeight = 0;
    for (let puzzleRow = 0; puzzleRow < puzzle.length; puzzleRow++) {
        for (let puzzleColumn = 0; puzzleColumn < puzzle[puzzleRow].length; puzzleColumn++) {
            const pieceMeta = puzzle[puzzleRow][puzzleColumn];
            let puzzlePieceContents = getTileTransformed(tiles[puzzle[puzzleRow][puzzleColumn].id], pieceMeta.orientation, pieceMeta.flipped);
            for (let puzzleTileRow = 1; puzzleTileRow < puzzlePieceContents.length - 1; puzzleTileRow++) {
                // start at 1 and stop before last row because those are edges that should be removed
                const addValueToRow = puzzleRowHeight + (puzzleTileRow - 1);
                if (typeof assembledPuzzle[addValueToRow] == "undefined") {
                    assembledPuzzle[addValueToRow] = puzzlePieceContents[puzzleTileRow].substr(1, puzzlePieceContents[puzzleTileRow].length - 2);
                } else {
                    assembledPuzzle[addValueToRow] += puzzlePieceContents[puzzleTileRow].substr(1, puzzlePieceContents[puzzleTileRow].length - 2);
                }
            }
        }
        puzzleRowHeight = assembledPuzzle.length;
    }

    // then, loop through each row to find sea monster patterns
    // nothing found? change orientation and/or flip and try again
    const monsterRow1 = /^[\.#]{18}#./;
    const monsterRow2 = /^#[\.#]{4}#{2}[\.#]{4}#{2}[\.#]{4}#{3}/;
    const monsterRow3 = /^[\.#]#[.\#]{2}#[.\#]{2}#[.\#]{2}#[.\#]{2}#[.\#]{2}#[.\#]{3}/;
    const maskRow1 = "                  O ";
    const maskRow2 = "O    OO    OO    OOO";
    const maskRow3 = " O  O  O  O  O  O   ";
    const monsterLength = 20;
    let foundMonsters = 0;
    let triedTransformations = 0;
    let transformedPuzzle = [];
    while (foundMonsters == 0 && triedTransformations < 8) {
        transformedPuzzle = getTileTransformed(assembledPuzzle, triedTransformations % 4, triedTransformations >= 4);
        for (let cmRow = 0; cmRow < transformedPuzzle.length - 3; cmRow++) {
            for (let cmPos = 0; cmPos < transformedPuzzle[cmRow].length - monsterLength; cmPos++) {
                if (transformedPuzzle[cmRow].substr(cmPos).match(monsterRow1)
                    && transformedPuzzle[cmRow + 1].substr(cmPos).match(monsterRow2)
                    && transformedPuzzle[cmRow + 2].substr(cmPos).match(monsterRow3)) {
                    // it's a monster, replace with O because monsters can't collide
                    const updateRow1 = transformedPuzzle[cmRow].substr(cmPos, 20);
                    const maskedRow1 = maskRow1.replace(/\s/g, (_, o) => updateRow1[o]); // adapted from https://stackoverflow.com/a/36487328/4214819
                    transformedPuzzle[cmRow] = transformedPuzzle[cmRow].substr(0, cmPos) + maskedRow1 + transformedPuzzle[cmRow].substr(cmPos + 20);
                    const updateRow2 = transformedPuzzle[cmRow + 1].substr(cmPos, 20);
                    const maskedRow2 = maskRow2.replace(/\s/g, (_, o) => updateRow2[o]);
                    transformedPuzzle[cmRow + 1] = transformedPuzzle[cmRow + 1].substr(0, cmPos) +
                        maskedRow2 + transformedPuzzle[cmRow + 1].substr(cmPos + 20);
                    const updateRow3 = transformedPuzzle[cmRow + 2].substr(cmPos, 20);
                    const maskedRow3 = maskRow3.replace(/\s/g, (_, o) => updateRow3[o]);
                    transformedPuzzle[cmRow + 2] = transformedPuzzle[cmRow + 2].substr(0, cmPos) +
                        maskedRow3 + transformedPuzzle[cmRow + 2].substr(cmPos + 20);
                    foundMonsters++;
                }
            }
        }
        triedTransformations++;
    }
    return transformedPuzzle.join("").match(/#/gi).length;
}

function getTileTransformed(tile, orientation, flip) {
    let toReturn = null;

    if (flip) {
        if (orientation == 1) {
            orientation = 3;
        } else if (orientation == 3) {
            orientation = 1;
        }
    }

    switch (orientation) {
        case 0:
            toReturn = tile;
            break;
        case 1:
            toReturn = [];
            for (let rowIndex = 0; rowIndex < tile[0].length; rowIndex++) {
                toReturn.push(tile.map((row) => row[rowIndex]).reverse().join(""));
            }
            break;
        case 2:// reverse both directions
            toReturn = tile.reverse().map((row) => Array.from(row).reverse().join(""));
            break;
        case 3:
            toReturn = [];
            for (let rowIndex = tile[0].length - 1; rowIndex >= 0; rowIndex--) {
                toReturn.push(tile.map((row) => row[rowIndex]).join(""));
            }
            break;
    }

    if (flip) {
        toReturn = toReturn.map((row) => Array.from(row).reverse().join(""));
    }
    return toReturn;
}

function getTileEdges(tile, orientation, flip) {
    // orientation: 0 original, 1 turned right once, 2 turned upside down, 3 turned left once
    // flip: mirror data or not
    let options = [];

    if (flip) {
        if (orientation == 1) {
            orientation = 3;
        } else if (orientation == 3) {
            orientation = 1;
        }
    }

    switch (orientation) {
        case 0:
            options.push(tile[0]); // top: top (ltr)
            options.push(tile.map((row) => row[row.length - 1]).join("")); // right: right (down)
            options.push(tile[tile.length - 1]); // bottom: bottom (ltr)
            options.push(tile.map((row) => row[0]).join("")); // left: left (down)
            break;
        case 1:
            options.push(tile.map((row) => row[0]).reverse().join("")); // top: left (up)
            options.push(tile[0]); // right: top (ltr)
            options.push(tile.map((row) => row[row.length - 1]).reverse().join("")); // bottom: right (up)
            options.push(tile[tile.length - 1]); // left: bottom (ltr)
            break;
        case 2:
            options.push(Array.from(tile[tile.length - 1]).reverse().join("")); // top: bottom (rtl)
            options.push(tile.map((row) => row[0]).reverse().join("")); // right: left (up)
            options.push(Array.from(tile[0]).reverse().join("")); // bottom: top (rtl)
            options.push(tile.map((row) => row[row.length - 1]).reverse().join("")); // left: right (up)
            break;
        case 3:
            options.push(tile.map((row) => row[row.length - 1]).join("")); // top: right (down)
            options.push(Array.from(tile[tile.length - 1]).reverse().join("")); // right: bottom (rtl)
            options.push(tile.map((row) => row[0]).join("")); // bottom: left (down)
            options.push(Array.from(tile[0]).reverse().join("")); // left: top (rtl)
            break;
    }

    if (flip) {
        [options[1], options[3]] = [options[3], options[1]];
        options[0] = Array.from(options[0]).reverse().join("");
        options[2] = Array.from(options[2]).reverse().join("");
    }

    return options;
}

console.log(partOne());
console.log(partTwo());
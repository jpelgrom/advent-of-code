"use strict";

const input = `1470
1577
1054
1962
1107
1123
1683
1680
1176
1917
1786
1565
1464
1097
1363
1091
1072
1821
1514
1526
1633
1953
1594
1386
1611
1354
490
1302
1785
1504
1100
1631
1570
1906
1678
1742
1505
1894
1682
1854
1663
1284
1346
1390
1285
1993
1301
1288
1882
1434
1435
1370
1603
1974
1364
1667
1561
1205
1487
1676
1654
1352
1584
1445
376
1945
1864
1981
2001
1254
1335
1337
1769
1467
1332
2008
1732
1365
1852
1553
1324
1642
1927
1658
1750
1380
1232
1457
1567
1735
1259
1780
1653
1400
1489
1439
1315
1891
1249
1770
1214
1961
92
1479
1901
1331
1476
1969
1480
289
1855
1325
1518
1819
1089
1849
2006
1996
1833
1965
1547
1397
1153
1622
1216
1609
1323
1148
1262
1347
1118
1808
2010
1256
1529
1169
1094
1738
1544
1517
1644
1221
1699
1655
1474
1977
1717
1143
1721
1417
957
1938
1193
1863
1730
1187
1628
1314
1483
1606
1602
1116
835
480
1955
1900
1968
1903
1436
1771
1774
1832
1586
1844
1198
1687
1283
1740
1273
1973
1665
1251
1889
1521
1648
1718
1263
1635
1122
1243
1085
1991
1271
1230
1245
1318
1373
1911
1282
1306`;

function partOne() {
    const inputAsArray = input.split("\n").map(Number);
    for (let i = 0; i < inputAsArray.length; i++) {
        for (let j = 0; j < inputAsArray.length; j++) {
            if (inputAsArray[i] + inputAsArray[j] == 2020) return inputAsArray[i] * inputAsArray[j];
        }
    }
}

function partTwo() {
    const inputAsArray = input.split("\n").map(Number);
    for (let i = 0; i < inputAsArray.length; i++) {
        for (let j = 0; j < inputAsArray.length; j++) {
            for (let k = 0; k < inputAsArray.length; k++) {
                if (inputAsArray[i] + inputAsArray[j] + inputAsArray[k] == 2020) {
                    return inputAsArray[i] * inputAsArray[j] * inputAsArray[k];
                }
            }
        }
    }
}

console.log(partOne());
console.log(partTwo());
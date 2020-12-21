"use strict";

const input = `zgk pszpbq kqzp xkclg fblg bcss jzkkpx vjnr hbpvm rqlnmkdd zphmvl gtljn djttn nzzbz pvvrzhs prsr ss zrbvl zvnvl mqv cqnl cbplqv tvbhs pqhjz vxjgp fqqcghr rlvtm rrjbcl tgj vhbxs jpnv sjqxshq mmddqh lsvlx zdvth kxtkqlq thsmmtg pxr sdxkv nhtplb rjpj qfgt fhkbb ztsns vdk hmvzh xtzh vlqx hhlh crdgb ztnr hdghnp gthxh tbccz qrtzp qcrjg znmblm (contains fish, shellfish)
hqbnk lsvlx fnbrt fsc nxqqj mfhmbm ldbv gblcl stn zhqxv xtzh cbmcss pxnkr lmph bbbx ppxlfrzj vdxglt jqdshtn ccmh tgcxkpj szb sjlkpr kzthl kcjt qcrjg rqlnmkdd zzmq pszpbq vhbxs nhtplb qmzcb xkclg zvnvl ss bpct vjnr krcl zgk zppq sjqxshq jzkkpx dtb jpnv fblg vvpnq hhjdkg pqhjz cbplqv zmf cjff tbccz jkqlmv pfjz nzzbz vnsxjg mqv tslzhn cqnl dmcq qfgt tgt jcrv ndxjc kmtb (contains fish)
vvpnq bpct rblctxx hklrzx xkclg hctd rnkg jpnv zmf fsc cxbf nzzbz tbccz gblcl vjnr lmph tlxj qnrnqq gfmvq lsvlx ztsns psph qrtzp thsmmtg pxr dxdnhjq dtb gzjbzn tjftt svrvkv bmdbdp jqdshtn rkzftm pqhjz jgt xtzh zf trqffqs zvnvl szb cqnl lxzx vflcvm gltfbx sjlkpr hbbt vhbxs gthxh (contains peanuts, sesame, eggs)
djttn cjff xtzh kmtb hhjdkg lhbtvns psscv cqnl bbbx dtb ldbv pmlh lsvlx ss szb hbpvm cxbf vcdxc bmdbdp sjlkpr bhfm zccjjg mfhmbm rdvnp zppq sft qnpffv tmtvd pxr hmvzh nhtplb jnd stn fblg jgt jpnv rslh zjkzjd kqzp gtljn qnspl pfjz trqffqs xkclg zqtcn vdk pszpbq jvslb zhqxv tgj (contains soy, eggs)
zzmq qnrnqq vxjgp tbccz szpzl mvspzsj vcdxc psscv lsvlx rlvtm tgt rzzpbp zjkzjd xtzh cqnl kzmbzc qpxgn xhlj xkclg mfhmbm nhtplb tjftt pxr nxqqj bpct ktxsfsp fqgg lhbtvns pszpbq qpqt rnkg lmph dmcq bbbx zgk tgj nlpscmp bmdbdp ndgn tslzhn pfjz zjzdnz jkqlmv dxgbl hklrzx szb zhqxv jpnv hldlr fhkbb zfcpvc hdghnp vflcvm bm qpgs (contains soy, sesame, wheat)
fqqcghr zzhhm hmvzh lnzr zvnvl xssx xzpnb psph cqnl klsk cxbf vhbxs zgk zqtcn btfm llzf djttn tmtvd vxjgp srmbt qpqt pvvrzhs gfmvq zhqxv crdgb ktxsfsp xtzh jnd prsr fnbrt jpnv lsvlx fbnzsd lhbtvns dxdnhjq lmph vlqx ccmh tlxj zspp ghxv jqdshtn hbbt mqrvnj qmzcb nlpscmp pszpbq cjff bhfm dtb lx nhtplb szpzl dxgbl pxr tgcxkpj ldbv hldlr stn nrrcmb ztsns bpct fqgg (contains nuts, wheat)
mvspzsj rnkg tgcxkpj ffpp xtzh kzthl trqffqs lsvlx bbbx vnsxjg vcdxc cxbf rjpj gfmvq lcqhv phltg pqhjz fbnzsd hctd zdvth stzcl rslh lnzr xkkjbb ppxlfrzj bgnjpc tlxj vhbxs xqdj hjtbb vdk cbplqv zf bm fqqcghr zjkzjd gblcl pmlh pszpbq qvcxjz psscv mvqj ss nzzbz xkclg fsc jnd vjnr bhfm hhlh xssx jpnv msss rrjbcl klsk vkbmdd nxqk cqnl ljztrr lhbtvns vspzn srmbt fblg zlqlc qpxgn zrbvl fhkbb zhqxv mfhmbm zqzxqrg hklrzx vbsst zgk cbmcss prsr hqbnk lx pxnkr tjftt pfjz zqtcn zfcpvc jqdshtn nxqqj znmblm dtb ndxjc jcrv (contains fish, peanuts)
vhbxs tbccz zspp mvqj vnsxjg mmddqh dmcq cbplqv pqhjz bhfm xkkjbb sjlkpr hhjdkg trqffqs jpnv ljztrr bbbx zgk zmf gblcl tgt pxr zdvth zppq zjzdnz szpzl lsvlx stzcl rlvtm psph tslzhn qmzcb hhlh dtb pmlh lnzr ccmh rjpj zqzxqrg nrrcmb xtzh ffpp kcxls msss ldbv xgf mfhmbm pbc fsc hjtbb xkclg cjff vjnr kzmbzc (contains wheat, nuts)
vdxglt nrrcmb klsk ppxlfrzj jpnv hctd tbccz cbplqv zgk krcl prsr bmdbdp djttn rblctxx qpgs fnbrt zqzxqrg tslzhn ffpp qnrnqq cqnl lmlqc xtzh mrqbmhr qcrjg cjff psph zphmvl rslh vllkqm xzpnb jcrv crdgb zccjjg ljztrr jqdshtn zqtcn pxr trqffqs zmf vlqx tmtvd gtljn vbsst rrjbcl dxgbl ccmh lsvlx dtb rkzftm (contains fish)
zvnvl lsvlx pszpbq zf vspzn zmf rfzms tjftt hdghnp zqtcn stn jpnv ccmh fnbrt ktxsfsp xkclg xtzh zqzxqrg zfcpvc xhlj klsk vdxglt tbccz ss bcss tgt gzjbzn xssx phltg kmtb bm fbnzsd cqnl qpxgn nlpscmp pxnkr zgk sjlkpr dxgbl vnsxjg pbc bpct qcrjg rblctxx rslh pxr (contains soy, sesame, fish)
xqdj dtb pxr bmdbdp nrrcmb kqzp rnkg kmtb zspp nkntv qnpffv jvslb fhkbb zmf zzmq qvcxjz rslh xtzh vxjgp vnfsh prsr zppq tslzhn phltg jkqlmv qcrjg qfgt klsk lmlqc lcqhv kxtkqlq lnzr zhqxv vjbrb vhbxs svrvkv fbnzsd hdghnp fnbrt rjpj gzjbzn mfhmbm lsvlx cxbf tvbhs llzf nzzbz kcjt lxzx hmvzh vvpnq mvqj nxqqj pmlh jzkkpx ldbv mqrvnj vllvj cqnl gblcl zgk vdk qrtzp jpnv zlqlc ztnr xhlj nxqk (contains eggs, shellfish, peanuts)
jkqlmv zspp xzpnb rrjbcl fhkbb vspzn rdq szb cqnl dmcq gltfbx stn msss krcl zjzdnz jzkkpx cjff znmblm tvbhs thsmmtg lmlqc qnpffv lsvlx qnspl fblg crdgb zphmvl mfhmbm sdxkv pvvrzhs nkntv zqtcn rlvtm tjftt zgk pxr ldbv hjtbb xtzh hhjdkg cxbf hctd jpnv zccjjg kcxls rkzftm zfcpvc psph pmlh pxnkr zjkzjd qfgt qvcxjz zdvth bpct szpzl qcrjg qpqt xkkjbb hmvzh kxtkqlq fqqcghr rzzpbp vnsxjg zmf fnbrt dtb gthxh bgnjpc mmddqh bbbx fbnzsd tslzhn hhlh rjpj rblctxx trqffqs gtljn (contains eggs, soy)
zlqlc qnrnqq gltfbx tgcxkpj cqnl xkclg mrqbmhr llzf zvnvl dxdnhjq vspzn rblctxx zjkzjd gtljn bpct dtb cbmcss psph cjff zccjjg btfm pmlh tmtvd vbsst kzthl hmvzh zrbvl xgf stzcl rdvnp mmddqh jpnv ffpp pbc zgk tjftt rqlnmkdd gthxh srmbt vjnr xhlj vxjgp jzkkpx vjbrb gfmvq zspp xssx mfhmbm tslzhn pxr zhqxv szpzl znmblm lsvlx ktxsfsp fqqcghr (contains nuts, peanuts, soy)
gzjbzn jpnv xtzh phltg crdgb rlvtm qcrjg vlqx zdvth bm xkclg lnzr kxtkqlq gltfbx klsk trqffqs ktxsfsp fbnzsd xgf zppq nxqk gthxh zgk dtb ppxlfrzj qnpffv vvpnq mfhmbm msss sft zlqlc qnspl cqnl tslzhn fnbrt srmbt jzkkpx mmddqh nkntv xzpnb hhlh bhfm lsvlx kqzp zjzdnz nrrcmb zrbvl (contains soy)
jpnv xkclg pxr ldbv zgk gzjbzn tgj zccjjg gthxh zqtcn pvvrzhs fblg vvpnq vnfsh crdgb srmbt cqnl krcl lcqhv lsvlx kzthl pmlh zfcpvc cjff vllvj hjtbb ljztrr tgcxkpj mvspzsj tbccz dtb fsc fhkbb rrjbcl vcdxc rfzms zspp kzmbzc vjbrb qcrjg zzmq kxtkqlq zrbvl sjlkpr hklrzx rlvtm vnsxjg zqzxqrg vllkqm lmlqc vxjgp ss xqdj msss zphmvl hbbt mvt sjqxshq ghxv (contains eggs)
zhqxv ss pxr jpnv rslh tgcxkpj lsvlx kxtkqlq nkntv zqzxqrg jnd ndgn kqzp fbnzsd zjzdnz qnrnqq pqhjz hmvzh zzhhm ppxlfrzj djttn lcqhv qfgt zgk btfm mqrvnj qcrjg tjftt rlvtm xssx lnzr xtzh zppq hbpvm prsr cqnl fqgg nlpscmp rzzpbp fsc zmf fhkbb ztnr gfmvq bm pmlh phltg pszpbq xkclg lmlqc znmblm svrvkv cjff hldlr vnfsh qmzcb bmdbdp (contains peanuts, shellfish, wheat)
btfm xkclg jvslb nzzbz zlqlc ghxv vflcvm srmbt sjqxshq vllvj stn lmph pmlh mvt vhbxs qnpffv cqnl zzmq ffpp jpnv gblcl qpxgn xtzh pxnkr zvnvl lnzr vnsxjg znmblm vvpnq fhkbb bm tjftt lsvlx bmdbdp dtb xkkjbb qfgt sdxkv szpzl hqbnk tgcxkpj cbplqv vdxglt zzhhm fbnzsd rjpj vcdxc rfzms hldlr ndgn djttn krcl zppq ndxjc msss bcss rrjbcl gltfbx zfcpvc rzzpbp mrqbmhr vjnr jgt vllkqm qcrjg hhjdkg ktxsfsp xqdj vbsst klsk kzthl bpct pvvrzhs ccmh pxr crdgb zphmvl mvqj gfmvq rblctxx xgf qpgs nlpscmp lmlqc (contains nuts, soy, shellfish)
mmddqh tlxj bm dtb sjlkpr rjpj vllkqm tgcxkpj zccjjg zvnvl ztsns nxqk tslzhn xtzh ktxsfsp zppq hhlh tmtvd vdxglt psscv ss vhbxs qfgt ffpp crdgb fqqcghr gthxh jcrv stn ppxlfrzj fqcpf lsvlx zhqxv lnzr qrtzp jqdshtn vspzn nzzbz hklrzx stzcl vnsxjg rdvnp xkclg cqnl gltfbx bmdbdp fhkbb zzhhm pxr zgk hctd hmvzh kqzp (contains wheat, shellfish, fish)
mvqj qcrjg mqv ss zjkzjd vxjgp tgcxkpj crdgb cqnl vvpnq stn xkkjbb zmf bm vkbmdd gltfbx zqzxqrg hklrzx vcdxc nzzbz tvbhs cbmcss kxtkqlq ljztrr fqqcghr ghxv zgk tgj xssx fblg znmblm hhlh zppq gblcl gthxh xzpnb vjnr lsvlx rnkg vllvj zhqxv rslh gtljn dxgbl jqdshtn zvnvl vdxglt tlxj tslzhn sjqxshq kzmbzc szb nkntv ztsns lmlqc kcxls nxqqj fbnzsd vbsst zdvth hbbt gfmvq hdghnp pxr xkclg msss svrvkv hctd krcl djttn jpnv zccjjg pvvrzhs szpzl mrqbmhr xtzh (contains wheat, shellfish, soy)
zjzdnz cxbf zlqlc dtb xtzh tslzhn ccmh vnsxjg psph bpct zgk kzmbzc fqgg gltfbx qpxgn kxtkqlq mvqj hctd mmddqh fqcpf hbbt pbc zqtcn rzzpbp ppxlfrzj vllvj srmbt zccjjg hhlh bhfm ldbv rdq tjftt kqzp stzcl qnrnqq kcxls sjlkpr xkclg sft hqbnk vspzn ndgn qpqt zhqxv llzf lsvlx pxr lxzx nxqk psscv lhbtvns fnbrt tbccz jnd lx ndxjc tgj jcrv jzkkpx qrtzp gtljn xgf hklrzx cqnl pxnkr rblctxx qnpffv dxgbl rlvtm hldlr hjtbb cjff qnspl rslh (contains shellfish, wheat, eggs)
pxr blrk cxbf dxdnhjq rdvnp tmtvd zgk lxzx nlpscmp dxgbl sdxkv qcrjg jvslb mvt qmzcb lsvlx prsr jcrv mqv xtzh cbmcss tslzhn xkkjbb rkzftm bhfm gblcl hctd zqtcn jkqlmv msss thsmmtg gzjbzn vdxglt vflcvm xqdj fhkbb vlqx vxjgp phltg vjbrb vhbxs fqqcghr vdk zhqxv zjzdnz ztnr zvnvl bm ztsns rnkg tgj xgf jpnv pszpbq xzpnb vllkqm kqzp tvbhs xkclg fnbrt xssx zjkzjd vllvj hdghnp lnzr hhlh cqnl vkbmdd vnsxjg vcdxc crdgb tjftt sft kcjt fbnzsd (contains sesame, fish, wheat)
thsmmtg btfm qpqt rdvnp vjbrb stn nxqqj lmph tbccz jpnv nzzbz mmddqh trqffqs pxr klsk mvqj fqcpf xtzh ffpp gzjbzn nlpscmp psscv zjkzjd rkzftm pqhjz cbmcss kqzp hbpvm ndxjc dtb zphmvl xqdj xkclg tlxj dmcq cqnl pvvrzhs rlvtm ldbv tmtvd gltfbx vxjgp kmtb vhbxs lsvlx qnspl hdghnp stzcl tgj vkbmdd zqtcn zlqlc prsr qrtzp mvt fsc jqdshtn lx hmvzh rzzpbp hhjdkg djttn xgf vllvj fqgg jkqlmv bhfm vlqx zhqxv fbnzsd crdgb zjzdnz vjnr znmblm qpxgn (contains eggs)
rdvnp vllkqm lcqhv bbbx bcss qcrjg sjlkpr xkclg zgk kmtb rslh xtzh zphmvl znmblm gtljn ktxsfsp jvslb qpxgn xgf jqdshtn rzzpbp ccmh xzpnb hhjdkg zccjjg pfjz gblcl zspp fbnzsd gthxh jpnv bgnjpc nhtplb srmbt kzthl vhbxs pbc hbpvm fhkbb zfcpvc szb rqlnmkdd tgj zdvth sdxkv dmcq mrqbmhr qnspl rkzftm jkqlmv vspzn zqtcn lsvlx dtb gfmvq pxr fnbrt qvcxjz tlxj hldlr kzmbzc hjtbb tbccz prsr lmlqc mvspzsj jgt (contains nuts)
mvqj tbccz dtb kmtb cqnl fblg gfmvq ztsns zjzdnz trqffqs tlxj kcjt jpnv rslh pqhjz hdghnp tgj jnd rjpj vnfsh zzmq dxdnhjq sdxkv pvvrzhs qvcxjz djttn nxqqj ccmh zccjjg xkclg xhlj xssx zjkzjd fsc ndxjc zqtcn zhqxv fnbrt gtljn zgk psph jkqlmv qpqt lcqhv lnzr pfjz nzzbz vbsst stzcl hhlh zmf kzthl vcdxc pxr xzpnb hbbt vkbmdd sft rqlnmkdd cxbf ss blrk ljztrr qcrjg qpgs bhfm sjlkpr qmzcb qnrnqq zdvth kzmbzc cjff jcrv gltfbx mqv vjnr tmtvd hmvzh psscv svrvkv msss krcl hctd xtzh gzjbzn lhbtvns zf zphmvl rnkg vflcvm vhbxs rdq hhjdkg rfzms (contains sesame)
tlxj phltg fbnzsd pxnkr vllvj nhtplb kzthl zzhhm rqlnmkdd zfcpvc tgj kxtkqlq hmvzh hldlr vflcvm bbbx zmf sdxkv znmblm zlqlc stn rdq cqnl kcxls vhbxs xtzh zphmvl mfhmbm xkclg fsc vbsst sjlkpr lhbtvns dtb jqdshtn mmddqh ztnr vlqx rlvtm mrqbmhr jpnv fqqcghr djttn pxr vxjgp vjnr cjff hhlh prsr mvspzsj hdghnp hhjdkg bhfm zzmq crdgb lmph cbmcss lsvlx hbbt tvbhs ccmh psph ljztrr nzzbz vdxglt bgnjpc (contains soy, eggs)
zphmvl pszpbq qnrnqq gtljn mqrvnj zqtcn xtzh cjff trqffqs zgk lsvlx rqlnmkdd lcqhv zmf kzmbzc dtb vjbrb zvnvl nxqk hhjdkg krcl cbmcss rblctxx vjnr stzcl dmcq nlpscmp dxdnhjq lmlqc stn xssx jpnv prsr lnzr tslzhn xkclg klsk ztnr qpqt hdghnp xhlj nxqqj jvslb vxjgp jnd tjftt xgf vdk qfgt vkbmdd fbnzsd pxr zppq zlqlc rkzftm gthxh lxzx (contains wheat, nuts)
hhjdkg stzcl vjnr hhlh rdvnp cqnl nzzbz bbbx xkkjbb nrrcmb xkclg ndgn btfm vdxglt zlqlc vnsxjg rslh zhqxv qvcxjz gfmvq lnzr vdk ztnr lsvlx vjbrb svrvkv zrbvl vnfsh mvspzsj zspp pfjz qpgs xgf sjqxshq gthxh vxjgp qmzcb tbccz lhbtvns trqffqs zf kzthl ztsns jgt tslzhn zgk stn pxr dxdnhjq zccjjg tgcxkpj srmbt hbbt cbplqv zppq mqv qfgt bhfm hbpvm rjpj kxtkqlq xtzh vhbxs fbnzsd lxzx rrjbcl qcrjg zmf kqzp llzf djttn msss qnspl tgt dtb szpzl (contains nuts, wheat)
pvvrzhs qnpffv jpnv zmf ppxlfrzj vnfsh dxgbl hhlh rlvtm xtzh vjbrb zzhhm vllvj tgt vlqx dtb hbbt zccjjg fqcpf tgj xkclg vcdxc sft xhlj zqzxqrg lx jgt bpct jnd hldlr msss szb klsk lsvlx srmbt pxr kzmbzc qcrjg cbmcss cqnl jzkkpx ljztrr jqdshtn ccmh vkbmdd nkntv mvspzsj cjff fqqcghr kmtb vdk hhjdkg gblcl hdghnp zspp bbbx lcqhv hmvzh gfmvq bm zf pqhjz jvslb ndgn mfhmbm fnbrt mrqbmhr tmtvd vflcvm zphmvl fbnzsd bmdbdp (contains eggs)
psph qrtzp zppq zf dmcq nxqqj ktxsfsp xqdj hdghnp tlxj qpqt zgk sdxkv vjnr fnbrt blrk nkntv vvpnq cbmcss rfzms jnd ljztrr xkclg mvspzsj cqnl xtzh jqdshtn gltfbx pxr mqrvnj psscv zfcpvc rkzftm qnrnqq rdvnp vdxglt jgt kqzp dtb bcss tjftt ccmh vflcvm jcrv gtljn rnkg kcxls nrrcmb lnzr vspzn kxtkqlq hctd vcdxc fblg bpct vxjgp llzf sjlkpr zjkzjd fqgg bhfm xkkjbb jpnv svrvkv ztnr xssx msss (contains peanuts)
tbccz mmddqh vspzn xtzh sjqxshq pmlh ktxsfsp fnbrt lmlqc bgnjpc sdxkv qrtzp ldbv qpgs hbpvm rqlnmkdd zlqlc blrk lsvlx dmcq zzhhm rlvtm cbmcss dxdnhjq pxnkr sjlkpr vnsxjg fblg xhlj fbnzsd jpnv fqcpf gthxh cxbf znmblm hbbt ss zjzdnz hctd xkclg rzzpbp zspp cqnl ztnr jnd fqgg svrvkv dtb rblctxx kzmbzc kzthl gtljn pbc ztsns vvpnq psscv zmf pszpbq xzpnb zgk tlxj bpct nlpscmp szpzl vhbxs vcdxc (contains wheat, eggs)
fblg llzf fhkbb zjzdnz thsmmtg vlqx fbnzsd zrbvl lxzx hmvzh gblcl srmbt mqv zf pxr fqqcghr btfm gzjbzn xtzh svrvkv gthxh kqzp krcl rblctxx dtb rjpj msss psph lsvlx vllvj tlxj ppxlfrzj bcss kxtkqlq nkntv stzcl gltfbx klsk bhfm kmtb zgk dxgbl jqdshtn hqbnk fqgg zfcpvc cqnl vjnr vllkqm zlqlc vjbrb lmlqc hctd xkclg sjlkpr rrjbcl zccjjg vnfsh cxbf nxqqj zdvth mmddqh mrqbmhr qpxgn hldlr ffpp nzzbz szb blrk rslh ktxsfsp (contains shellfish)
mrqbmhr qfgt hbbt zvnvl svrvkv crdgb hldlr bmdbdp vnsxjg kzthl hklrzx hjtbb mqrvnj zppq bpct cxbf hdghnp blrk zjzdnz xzpnb jpnv cqnl ztnr sjlkpr mvqj dtb vllvj lsvlx pvvrzhs jvslb ktxsfsp hhlh bbbx nkntv pxr zmf srmbt llzf vspzn mqv nlpscmp jcrv ppxlfrzj rrjbcl btfm xkclg nrrcmb jgt tmtvd fhkbb zgk qpqt nxqqj fqcpf xhlj (contains wheat)
rslh jzkkpx btfm sdxkv qnpffv bgnjpc sjqxshq zppq jpnv gblcl xtzh vspzn xgf hmvzh cqnl qpxgn nlpscmp dtb bmdbdp gthxh ktxsfsp vjbrb jnd pbc vkbmdd rdvnp nhtplb pxr dxgbl xkclg vnfsh kqzp rjpj zvnvl vdxglt hhlh zgk bpct kzthl vflcvm trqffqs rzzpbp pqhjz zhqxv cbmcss pvvrzhs (contains nuts, eggs, peanuts)
hldlr xkkjbb qvcxjz zrbvl blrk nkntv lmph kzmbzc cxbf lx zhqxv psscv tvbhs ztsns sjlkpr lsvlx hdghnp rslh zzmq kzthl nlpscmp vspzn qfgt zgk qpxgn zphmvl fhkbb psph vjbrb zjzdnz dtb ztnr hklrzx qpqt qrtzp qnrnqq hbbt jpnv fqgg xqdj tmtvd sdxkv hbpvm vkbmdd kcjt xtzh xkclg vllvj gzjbzn cqnl stn vhbxs djttn dmcq nxqk jvslb cjff kmtb pbc rnkg fqqcghr lcqhv mvspzsj mmddqh xzpnb tgcxkpj (contains soy, peanuts, eggs)
nkntv rkzftm bpct ss pxr hldlr lsvlx xkclg zzmq pvvrzhs lnzr dtb znmblm qnrnqq mrqbmhr ghxv cxbf zlqlc ztsns vxjgp fhkbb vnfsh lxzx llzf zgk zvnvl vnsxjg zqtcn cqnl xqdj sft hbpvm kcxls cbmcss zqzxqrg dxgbl trqffqs jzkkpx zfcpvc vjnr psscv zzhhm rqlnmkdd xtzh kmtb qvcxjz tgcxkpj ldbv tmtvd rlvtm tlxj (contains wheat, shellfish, peanuts)
gblcl pfjz hmvzh kzmbzc vflcvm zlqlc nhtplb tmtvd tgcxkpj lsvlx xkkjbb xtzh mvt rjpj tslzhn zccjjg rblctxx rslh vcdxc cbmcss rqlnmkdd zppq gtljn vdxglt ztsns rrjbcl trqffqs hjtbb mqv ccmh dtb qpqt cqnl mvspzsj zgk kmtb svrvkv hctd hhjdkg vnfsh xgf hldlr jpnv szpzl pbc krcl fqqcghr dxgbl vbsst vxjgp ldbv zzmq nxqqj djttn btfm mvqj nlpscmp zzhhm cjff rfzms lnzr cbplqv jcrv zjzdnz ljztrr vllvj srmbt nzzbz zspp bm fhkbb pxr hhlh lmph (contains eggs, nuts, wheat)
stn ndxjc fsc ppxlfrzj vllvj jcrv zmf pxr cbmcss znmblm xqdj fbnzsd djttn bgnjpc vllkqm trqffqs zqtcn jpnv kqzp qpgs mmddqh jzkkpx vlqx hqbnk kcxls tmtvd gzjbzn pxnkr rzzpbp cqnl ztnr zphmvl zjzdnz rlvtm tlxj qcrjg zgk cxbf lsvlx qrtzp dxdnhjq zzmq stzcl pqhjz rdvnp rfzms pbc zf vhbxs fqqcghr crdgb zdvth xkclg qnpffv dtb zfcpvc rkzftm xzpnb jnd bm llzf (contains fish, soy, peanuts)
tgcxkpj nxqqj tbccz rkzftm nrrcmb hdghnp zhqxv klsk tlxj bm thsmmtg fqqcghr nhtplb lhbtvns phltg xkclg pfjz ztsns zppq tgj dtb fqcpf ccmh zzmq sdxkv zspp kzthl zrbvl fbnzsd lx llzf cbmcss vdk vnfsh bcss crdgb zccjjg zgk ffpp nlpscmp kmtb bmdbdp bhfm ljztrr qpxgn nkntv stn pxr pqhjz vcdxc hctd mrqbmhr mvspzsj kxtkqlq jvslb fblg hbbt hldlr szb mvqj rdq qvcxjz fhkbb dmcq btfm zqzxqrg cqnl rjpj ndxjc xqdj vhbxs zfcpvc vjnr tjftt jpnv jkqlmv fqgg fnbrt rrjbcl xtzh lmlqc psscv pbc (contains nuts, fish)
pxnkr vbsst trqffqs qmzcb pxr pqhjz rzzpbp zgk vkbmdd jnd lcqhv jpnv tbccz zzhhm jqdshtn kzmbzc gthxh zphmvl xssx kqzp cbmcss dxdnhjq ppxlfrzj qpqt lmph mvqj lsvlx qvcxjz qcrjg jvslb gzjbzn blrk vvpnq fqcpf ztsns klsk cjff psph cbplqv kmtb tjftt qnspl xkclg cqnl dtb vhbxs ghxv gtljn zspp bgnjpc nxqqj dmcq ccmh zlqlc (contains eggs)
jgt vnfsh vflcvm ndxjc xkkjbb jkqlmv gzjbzn fqqcghr kcjt bmdbdp szb rblctxx hhjdkg dtb zgk pbc vnsxjg lmph vbsst xzpnb stn xkclg qrtzp vllvj psscv lsvlx tgj zjkzjd kzthl jnd vllkqm jpnv rqlnmkdd zphmvl rrjbcl ppxlfrzj pxnkr xtzh cqnl vspzn sft (contains peanuts, sesame, soy)`;

function partOne() {
    const foodInfos = input.split("\n");
    let ingredients = [];
    let allergens = [];
    let uniqueAllergens = [];
    for (let i = 0; i < foodInfos.length; i++) {
        const ingredientsAllergens = foodInfos[i].split(" (contains ");
        ingredients.push(ingredientsAllergens[0].split(" "));
        const theseAllergens = ingredientsAllergens[1].substr(0, ingredientsAllergens[1].length - 1).split(", ")
        allergens.push(theseAllergens);
        theseAllergens.forEach(item => {
            if (uniqueAllergens.indexOf(item) == -1) uniqueAllergens.push(item);
        });
    }

    // determine which ingredients must have an allergen
    // aka: they are the only ingredient that shows up in all foods with that allergen
    // restart if something is found, because it might result in another ingredient becoming the only that shows up with a certain allergen
    let ingredientsWithAllergens = [];
    let uniqueAllergenIndex = 0;
    while (uniqueAllergenIndex < uniqueAllergens.length) {
        if (typeof ingredientsWithAllergens[uniqueAllergenIndex] == "undefined") {
            let foodsWithThisAllergen = [];
            for (let j = 0; j < ingredients.length; j++) {
                if (allergens[j].includes(uniqueAllergens[uniqueAllergenIndex])) {
                    foodsWithThisAllergen.push(ingredients[j].filter(item => ingredientsWithAllergens.indexOf(item) == -1));
                }
            }
            const sharedFood = foodsWithThisAllergen.reduce((a, b) => b.filter(Set.prototype.has, new Set(a))); // https://stackoverflow.com/a/55323015/4214819
            if (sharedFood && sharedFood.length == 1) {
                ingredientsWithAllergens[uniqueAllergenIndex] = sharedFood[0];
                uniqueAllergenIndex = 0; // start again, a previous because of multiple options might now work because this is excluded
            } else { // no food found that is in every list or multiple options
                uniqueAllergenIndex++;
            }
        } else {
            uniqueAllergenIndex++;
        }
    }

    // now, what remains must not contain any of the allergens in the list
    return ingredients.flat().filter(item => ingredientsWithAllergens.indexOf(item) == -1).length;
}

function partTwo() {
    const foodInfos = input.split("\n");
    let ingredients = [];
    let allergens = [];
    let uniqueAllergens = [];
    for (let i = 0; i < foodInfos.length; i++) {
        const ingredientsAllergens = foodInfos[i].split(" (contains ");
        ingredients.push(ingredientsAllergens[0].split(" "));
        const theseAllergens = ingredientsAllergens[1].substr(0, ingredientsAllergens[1].length - 1).split(", ")
        allergens.push(theseAllergens);
        theseAllergens.forEach(item => {
            if (uniqueAllergens.indexOf(item) == -1) uniqueAllergens.push(item);
        });
    }

    // determine which ingredients must have an allergen
    // aka: they are the only ingredient that shows up in all foods with that allergen
    // restart if something is found, because it might result in another ingredient becoming the only that shows up with a certain allergen
    let ingredientsWithAllergens = [];
    let uniqueAllergenIndex = 0;
    while (uniqueAllergenIndex < uniqueAllergens.length) {
        if (typeof ingredientsWithAllergens[uniqueAllergenIndex] == "undefined") {
            let foodsWithThisAllergen = [];
            for (let j = 0; j < ingredients.length; j++) {
                if (allergens[j].includes(uniqueAllergens[uniqueAllergenIndex])) {
                    foodsWithThisAllergen.push(ingredients[j].filter(item => ingredientsWithAllergens.indexOf(item) == -1));
                }
            }
            const sharedFood = foodsWithThisAllergen.reduce((a, b) => b.filter(Set.prototype.has, new Set(a))); // https://stackoverflow.com/a/55323015/4214819
            if (sharedFood && sharedFood.length == 1) {
                ingredientsWithAllergens[uniqueAllergenIndex] = sharedFood[0];
                uniqueAllergenIndex = 0; // start again, a previous because of multiple options might now work because this is excluded
            } else { // no food found that is in every list or multiple options
                uniqueAllergenIndex++;
            }
        } else {
            uniqueAllergenIndex++;
        }
    }

    // map ingredients with allergen name, sort by allergen name, remove allergen info again, join with a comma
    return ingredientsWithAllergens.map((value, index, _) => ({ ingredient: value, allergen: uniqueAllergens[index] }))
        .sort((a, b) => a.allergen.localeCompare(b.allergen))
        .map(item => item.ingredient)
        .join(",");
}

console.log(partOne());
console.log(partTwo());
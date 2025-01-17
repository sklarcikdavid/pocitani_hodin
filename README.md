# pocitani_hodin
Webova aplikace na počítání odpracovaných hodin, po 160 hodinách se spočítá plat za přesčas při udané sazbe za hodinu.
Textový soubor, do kterého jsem průběžně psal a blogoval:

jdu udelat tatkovi program na pocitani odpracovanych hodin v mesici

17.1.2025 16:33
jako první si otevřeme předlohu kterou poslal a budeme to brat jako zadani, pote si vybere jak to budeme delat, jestli jako konzolovou aplikaci, nativni
aplikaci anebo jako webovou aplikaci. protože s Javascriptem teprve zacinam tak asi zustanu u te konzolove aplikace anebo nativni aplikace psane v C#.
výsledek pote aji s blogem hodim na github -> https://github.com/sklarcikdavid

tak muzeme jit na to!

16:37
precteme si zadani a podivame se na planek, rozmyslim si finalne v jakem jazyce to budu delat a pote zacnu s otevrenim visual studio anebo vscode.
pro pripadne otázky budu používat google anebo perplexity.ai.

16:39
nakonec jsme se rozhodli pro konzolovou aplikaci, kazdopadne kdykoliv v pripade nespokojeni muzeme prejit na jinaci jazyk anebo styl. tatka puvodne chtěl webovou aplikaci,
ale uz jsem to zkousel a napojeni na databazi a vytvoreni pdf souboru mi neslo a program nedelal to co mel. strukturu si porad nejak lehce pamatuju takze akorát budu navazovat na to co jsem delal včera.

16:41
s .NET PDF knihovnou jsem ještě nepracoval takze nejdříve si zkusime udelat testovaci prikaz k ulozeni a uvidíme co nam to udela. budu postupovat stylem zkusim vidim, bez dokumentace
a postupu z internetu. pokud bych si nevedel rady dohledam si informace na internetu.

16:50
Bohužel nemůžu najít žádnou knihovnu která funguje bezplatne bez vodoznaku takze asi budu ještě hledat předtím nez zacnu kodovat

17:01
zadnou knihovnu která by byla zdarma a novejsi nez rok 2010 jsem nenasel takze jdeme na javascript. nasel jsem příručku ze které to vypada jednodušeji nez jsem zkousel včera.
c# konzolovy projekt tedy zahazuju a presouvam se na html, css a js.

17:03
meneni hudby z green day na blink-182 :D

17:06
napsaný základ v html kde je zaroven napsany vyznam appky, budu pokracovat vlozenim scriptu z knihovny jspdf, funkci napisu do souboru script.js a pote ho zavolam z html souboru...
nic těžkého. jspdf vlozim prikazem který vlozim do telicka html, priakz vypada takhle:
<script src="https://unpkg.com/jspdf-invoice-template@1.4.0/dist/index.js"></script>
pote uz jenom pod stejnym prikazem zavolam na script.js a do nej zacnu psat funkce a vypocty.

17:15
postupovani podle příručky, mam napsany kod, který musim upravit at uspokojim ocekavani. musim pridat par textových poli a poli s casem od do.
presne jak je v zadani, akorát to prevedu to graficke podoby a funkcni podoby.

17:18
casovy format si prevedeme z hodin na sekundy a ty potom vydelime zpatky na hodiny at mame cistejsi prevod hodin na peníze. teda aspoň tak bych to chtěl prvnotne udelat,
mozna v prubehu zjistim ze je to blbost a ponecham toho napadu, ještě uvidim.

17:24
po chvilce zkouseni a prekovanani erroru se mi konecne povedlo vygenerovat .pdf soubor. tak ted akorát pozměníme předlohu která jiz byla v kodu at to vypada, tak jak si koncovy uživatel pral.
nebude to nijak obtizne ale nejak me tlaci cas, mam cca 20 minut před odchodem, takze zbytek kdyžtak dokoncim potom. všechno si nahravam a v budoucnosti nekdy mozna hodim na youtube s odkazem,
který bude nahrany v tomhle txt. tak jdeme na to rychle at to mame co nejdriv z krku a snad to stihnu.

17:35
čas moc tlačí takze to necham az na nedeli když se vratim domu, zatím delam pokrok coz se mi libi a motivuje me to k tomu to dodělat, kod zatím hodim na github i s timhle souborem at si to kdyžtak
muzu na cestách zkontrolovat a hledat chyby a premyslet nad resenim, zatím potrebuju udelat novou tabulku kde se budou vypisovat hodnoty podle zadadni, uplne nevim jak to mam ještě vymyslene, asi
si budu muset udelat nakres a podle nej se pote ridit, zatím nechavam projekt otevreny a delam novy repozitar na githubu.

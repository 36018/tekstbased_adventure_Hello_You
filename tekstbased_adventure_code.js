const input = require('readline-sync');

let userName = input.question('Hoe heet jij? ');
console.log('Hoi ' + userName);
console.log ("Wat leuk dat je mijn adventure gaat spelen. Het avontuur gaat over het geboren worden tot ouder zijn(dood).");
console.log ("Jij mag sommige keuzes maken in het verhaal, antwoord hoe jij dat wil en zie wat jouw einde wordt. Veel speel plezier!");

let verhaalstukken = 
[ 
  {
    //0
    tekst: userName + "is geboren op 6 december in het AMC in Amsterdam. Vader en moeder zijn erg blij met de geboorte van hun lieve kindje. Als je je ogen open zie je een wereld die helemaal nieuw voor je is. Je vindt het spannend en kies om...",
    vraag:"Stil of huilen?",
    antwoorden:[
      {
        antwoord:"a stil",
        reactie:"je wilt geen aandacht krijgen om het onbekende. Je kijkt veel om je heen. Zoeken naar wat je vertrouwen kan geven. Je kijk je moeder recht in de ogen aan. Ze pakt je op en houd je vast. Ze glimlacht naar je. Je glimlach terug.",
        volgende:1
      },
      {
        antwoord:"b huilen",
        reactie:"je vraagt de aandacht van je vader en moeder. Je wil getroost worden en vastgehouden worden. Je kan je eindelijk weer kalmeren wanneer dit gebeurt",
        volgende:1
       }
      ],
      einde:false, //als het wel een einde is zet je hier true neer
      hasart: true,
      art: " o,  \n ', \n"
    },
    {
        //1
        tekst:"Er zijn een aantal maanden voorbij gegaan je bent nu een peuter en ben klaar om voorbereid te worden naar de kleuterschool. Je moeder en vader zijn druk bezig met activiteiten aan te bieden waardoor je motorische vaardigheden vergroot worden, de fijne als grove motoriek. Ook willen ze je leren je taalgebruik te vergroten, je eerste woordjes te laten spreken. Als laatste werken ze de zindelijkheid, ervoor zorgen zodat je plast op de wc. Ze zijn hier mee bezig maar ze weten dat dit even kan duren. Je begint je eerste stappen te zetten, je sta op en leunt on de bank die naast je staat, vader en moeder kijken je aan en glimlachen naar je en juichen je aan. Ze prijzen je, waardoor jij ook een goed gevoel van binnen krijg. Maar door de reactie die je krijg let je niet meer op je balans en val je. Je valt op je billen en ...",
        vraag:"huilen of driftbui?",
        antwoorden:[
          {
            antwoord:"a huilen",
            reactie:"begin te huilen. Het doet zeer, maar je weet ook niet wat je met de sensatie moet met wat je voel. Je voel dat je billen zeer doen en kijk je vader en moeder aan. Je vraag voor aan te kijken om getroost te worden. Je wilt weer het kalmerende gevoel voelen.",
            volgende:3
          },
          {
            antwoord:"b driftbui",
            reactie:"begin een driftbui je weet niet meer wat je wil, je ervaar het gevoel van stress je wilt staan, maar je billen doen zo zeer dat je dat ook niet wil. Je billen doen pijn, dit is niet hoe het hoort te voelen.",
            volgende:2
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //2
        tekst:"Je ziet een aantal blokken op de grond, je besluit om",
        vraag:"blokken duwen of blokken gooien?",
        antwoorden:[
          {
            antwoord:"a blokken duwen",
            reactie:"Je besluit om blokken weg te duwen je moeder ziet hieraan dat je niet blij en tevreden bent. Ze pakt je op en troost je, ze kalmeert je en laat je rusten.",
            volgende:3
          },
          {
            antwoord:"b blokken gooien",
            reactie:"met de blokken te gooien je gooit ze hard tegen de vloer aan waardoor ze een beetje stuiteren. Je moeder schrikt van het geluid van de blok en pakt je gelijk op. Ze troost je en maakt je rustig. Ze zegt dat het allemaal goed zal komen.",
            volgende:3
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //3
        tekst:"Je bent nu 4 jaar een kleuter en het is nu echt tijd om naar de kleuterschool te gaan, om vriendjes en vriendinnetjes te maken, om je verder te ontwikkelen. Het is je eerste dag, je houdt de hand van je vader en moeder vast. Je kijk ze aan vragend naar waar je naartoe ga. Jullie zijn op de kleuterschool, moeder gaat door haar knieën en zegt: ‘Dit is je nieuwe eerste school, hier ga je vrienden maken’. Je kijkt haar vragend aan, je snapt nog niet alle woorden die je vertelt worden. Vriendjes? School? Je loopt samen met je vader en moeder je klas binnen, je ziet andere kleuters. Je kijkt naar hoe de kinderen bezig zijn met activiteiten. Je ziet een meisje spelen met een poppenhuis, jongen spelen met auto’s, een jongen en meisje spelen met dieren",
        vraag:"Spelen met de jongen met auto's, spel met het meisje met het poppenhuis of spelen met je jongen en meid met de dieren?",
        antwoorden:[
          {
            antwoord:"a meisje",
            reactie:"Je besluit om met het meisje te spelen die met het poppenhuis speelt. Je vraagt om haar naam en zegt dat ze Pien heet. Je ouders kijken met een glimlach naar je. Ze zijn fijn dat je al een plekje gevonden heb.",
            volgende:4
          },
          {
            antwoord:"b jongen",
            reactie:"Je besluit om met de jongen te spelen die met auto's speelt. Je vraagt naar zijn naam en zegt dat hij klaas heet. Je ouders kijken met een glimlach naar je. Ze zijn fijn dat je al een plekje gevonden heb.",
            volgende:4
           },
           { 
            antwoord:"c jongen en meisje",
            reactie:"Je besluit om met de jongen en het meisje te spelen die met dieren aan het spelen zijn. Je vraagt hoe ze heten het meisje zegt dat ze Fiona heet en de jongen zegt dat hij Henry heet. Je ouders kijken met een glimlach naar je. Ze zijn fijn dat je al een plekje gevonden heb.",
            volgende:6
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:true,
          art:" o,  \n |, \n"
    },
    {
        //4
        tekst:"Nadat je de naam gevraagd heb beslis je om",
        vraag:"spelen of huilen",
        antwoorden:[
          {
            antwoord:"a spelen",
            reactie:"verder met ze te spelen, je ouders zien dat je jezelf vermaakt en gaan naar de juf toe om wellicht wat bijzonderheden te bespreken (Wellicht driftbuien). Nadat ze klaar zijn zeggen ze gedag en gaan ze naar huis.",
            volgende:5
          },
          {
            antwoord:"b huilen",
            reactie:"naar je ouders toe te lopen, je ziet ze van je weg lopen, richting een vrouw. Ze lopen te snel en je begin te huilen, je veilige omgeving loopt van je weg. Je ouders horen je huilen en lopen naar je toe. Je vader pakt je op en neemt je mee terwijl je ouders tegen de juf praten. Als het gesprek afgelopen is zetten ze je neer op de grond. Ze leggen uit dat ze je later weer op komen halen. Ze geven je een zoen en een knuffel en lopen daarna weg.",
            volgende:5
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //5
        tekst:"Als ze na een aantal uren weer terug komen zit je...",
        vraag:"spelen of huilen bij de juf",
        antwoorden:[
          {
            antwoord:"a spelen",
            reactie:"te spelen, ze zien dat je spelen en lopen naar de juf toe, ze vragen hoe het gegaan was via de juf. De juf antwoord positief en zegt dat je het even spannend vond, maar dat je daarna aan het spelen was met het kindje van eerder. Nadat ze tegen de juf aangepraat hadden lopen ze naar jou toe. Je bent nog druk bezig met spelen.",
            volgende:8
          },
          {
            antwoord:"b huilen bij de juf",
            reactie:"te huilen bij de juf, je ouders zeggen gedag, je hoort hun stem en rent naar hun toe om een knuffel te geven, je vader pakt je op en vraagt hoe je eerste school dag was. Je zegt dat je een leuke tijd heb gehad. Dat je gezellig met je nieuwe vriend heb gespeeld. Maar dat je het spannend vond aan het einde, omdat je dacht dat ze niet terug zouden komen.",
            volgende:8
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //6
        tekst:"Nadat je de naam gevraagd heb beslis je om",
        vraag:"spelen of huilen",
        antwoorden:[
          {
            antwoord:"a spelen",
            reactie:"verder met ze te spelen, je ouders zien dat je jezelf vermaakt en gaan naar de juf toe om wellicht wat bijzonderheden te bespreken (Wellicht driftbuien). Nadat ze klaar zijn zeggen ze gedag en gaan ze naar huis.",
            volgende:7
          },
          {
            antwoord:"b huilen",
            reactie:"naar je ouders toe te lopen, je ziet ze van je weg lopen, richting een vrouw. Ze lopen te snel en je begin te huilen, je veilige omgeving loopt van je weg. Je ouders horen je huilen en lopen naar je toe. Je vader pakt je op en neemt je mee terwijl je ouders tegen de juf praten. Als het gesprek afgelopen is zetten ze je neer op de grond. Ze leggen uit dat ze je later weer op komen halen. Ze geven je een zoen en een knuffel en lopen daarna weg.",
            volgende:7
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //7
        tekst:"Als ze na een aantal uren weer terug komen zit je...",
        vraag:"spelen of huilen bij de juf",
        antwoorden:[
          {
            antwoord:"a spelen",
            reactie:"te spelen, ze zien dat je spelen en lopen naar de juf toe, ze vragen hoe het gegaan was via de juf. De juf antwoord positief en zegt dat je het even spannend vond, maar dat je daarna aan het spelen was met het kindje van eerder. Nadat ze tegen de juf aangepraat hadden lopen ze naar jou toe. Je bent nog druk bezig met spelen.",
            volgende:9
          },
          {
            antwoord:"b huilen bij de juf",
            reactie:"te huilen bij de juf, je ouders zeggen gedag, je hoort hun stem en rent naar hun toe om een knuffel te geven, je vader pakt je op en vraagt hoe je eerste school dag was. Je zegt dat je een leuke tijd heb gehad. Dat je gezellig met je nieuwe vriend heb gespeeld. Maar dat je het spannend vond aan het einde, omdat je dacht dat ze niet terug zouden komen.",
            volgende:9
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //8
        tekst:"Het is 3 jaar later en nu ben je een echte schoolkind. Je heb vaak af zitten spreken en nu dat je 7 ben ga je naar de basisschool, hier zit iedereen op die je ook op de kleuterschool zag. Je gaat naar de eerste schooldag op school de Harmonie. Je vindt het....",
        vraag:"spannend of leuk?",
        antwoorden:[
          {
            antwoord:"a spannend",
            reactie:"spannend, het is toch een nieuwe school. Je vraagt of je ouders je willen wegbrengen.",
            volgende:13
          },
          {
            antwoord:"b leuk",
            reactie:"Je vindt het leuk om naar de school te gaan iedereen die je ken zit er ook op dus je vind het niet spannend. Je wilt juist zo graag naar school dat je je ouders vraag hoe laat de bus komt en dat ze je niet hoeven te brengen.",
            volgende:13
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:true,
          art:" ,o,  \n  i  \n  ^ "
    },
    {
        //9
        tekst:"Het is 3 jaar later en nu ben je een echte schoolkind. Je heb vaak af zitten spreken en nu dat je 7 ben ga je naar de basisschool, hier zit iedereen op die je ook op de kleuterschool zag. Je gaat naar de eerste schooldag op school de Harmonie. Je vindt het....",
        vraag:"spannend of leuk?",
        antwoorden:[
          {
            antwoord:"a spannend",
            reactie:"spannend, het is toch een nieuwe school. Je vraagt of je ouders je willen wegbrengen.",
            volgende:10
          },
          {
            antwoord:"b leuk",
            reactie:"Je vindt het leuk om naar de school te gaan iedereen die je ken zit er ook op dus je vind het niet spannend. Je wilt juist zo graag naar school dat je je ouders vraag hoe laat de bus komt en dat ze je niet hoeven te brengen.",
            volgende:10
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //10
        tekst:"Op school zeg je gedag tegen je (2 vrienden). De docent komt binnen en vraagt dat iedereen kan gaan zitten. In de lunch pauze zit je samen met je 2 vrienden, je merkt dat ze verandert zijn, ze beledigen een andere klasgenoot, zeggen dat ze dik is en gooien haar eten op de grond. Je besluit om",
        vraag:"wat zeggen of niks zeggen?",
        antwoorden:[
          {
            antwoord:"a wat zeggen",
            reactie:"Je besluit om er wat te van zeggen je sta op voor het andere kind, je vertelt ze dan het niet lief is wat ze doen.",
            volgende:11
          },
          {
            antwoord:"b niks zeggen",
            reactie:"Je besluit om zegt niks te zeggen",
            volgende:12
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //11
        tekst:"Je 'vrienden' geven je de optie om bij ze te blijven of dat ze je nooit meer willen zien als je de kant van het andere kind kies.",
        vraag:"terug groep of ander kind?",
        antwoorden:[
          {
            antwoord:"a terug groep",
            reactie:"Je besluit om terug naar de groep te gaan je weet het niet meer en gaat voor de zekerheid terug naar de groep. Je vrienden lachen en zeggen tegen het andere kind dat ze toch nooit vrienden zal krijgen. ",
            volgende:12
          },
          {
            antwoord:"b ander kind",
            reactie:"Je blijf bij je besluit en staat aan de kant van het andere kind. Je zwaai je oude vrienden gedag en neem het kind mee naar een andere plek.",
            volgende:13
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //12
        tekst:"Er gaat een periode voorbij tot je puberteit. Je bent nog steeds bij de ene vrienden groep, jullie praten over wat jullie later willen doen. De ene zegt dat ze alleen maar wil gaan cluben en dat ze een man zal vinden die alles kan betalen, de laatste wilt graag werken in de club. Jij vertel dat je graag een danser wil worden. Waarop je vrienden zeggen dat je een stripper moet worden. Je... ",
        vraag:"twijfel, ja of nee?",
        antwoorden:[
          {
            antwoord:"a twijfel",
            reactie:"je twijfel, je weet niet zo goed hoe je wil antwoorden en zeg dat je er over na zal denken. Later beslis je toch de richting op te gaan.",
            volgende:14
          },
          {
            antwoord:"b ja",
            reactie:"Wanneer ze dat zeggen weet je gelijk dat je het wil doen.",
            volgende:14
           },
           {
            antwoord:"c nee",
            reactie: "Wanneer ze dat zeggen zeg jij gelijk nee, en besluit om in een bar te werken.",
            volgende:17
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:true, //als het art heeft
          art: "  O  \n (|)  \n /\\  "
    },
    {
        //13
        tekst:"Na een aantal jaar ben je nog steeds bij het ene andere kind die je heb beschermd. Jullie zitten op school tijdens de pauze te kletsen en beginnen het te hebben over de toekomst. Je vraagt aan haar wat ze later wil doen. Waarop ze reageert dat ze graag een danser wil worden. Waarop jij zeg dat je eigenlijk het zelfde wil doen. Jullie willen voor een publiek dansen. Tijdens andere pauzes begin je te zoeken naar welke scholen jullie zouden willen. Zo komen jullie op 2 keuzes Nova college en MBO dans",
        vraag:"MBO dans of Nova college?",
        antwoorden:[
          {
            antwoord:"a MBO dans",
            reactie:"Je kies voor MBO dans, helaas is dit niet wat je andere vriend wilt. Jullie gaat uit elkaar maar blijven wel afspreken.",
            volgende:15
          },
          {
            antwoord:"b Nova college",
            reactie:"Je kies voor nova college, dit is ook de school die de ander wilt doen. Jullie kiezen er voor om samen te blijven.",
            volgende:15
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //14
        tekst:"Er zijn 5 jaren voorbij je hebt je opleiding behaald en besluit te gaan werken als stripper. Je gaat samen met je vrienden groep naar een club dichtbij waar jullie wonen. In de club is er aan de ene kant de baan waar strippers dansen en aan de andere kant tafels waar gasten kunnen zitten en dansers bij kunnen dansen. Het ziet er uit als een goede plek en samen met de 2 andere meiden loop je naar iemand toe die bij de club werkt. Je legt uit dat je op zoek ben naar een strip baan. Je andere vriendin wilt graag in het algemeen werken bij een club. Jullie worden mee genomen naar de baas van de club. Als jullie daar aan komen zegt de medewerkers gedag en kan je praten met de baas. Met de baas hebben jullie een gesprek over wat werken in een stripclub inhoud, wat de regels zijn en waar je rekening mee moet houden. Je ",
        vraag:"Je accepteer",
        antwoorden:[
          {
            antwoord:"a accepteer",
            reactie:"Je accepteer de baan. Je vrienden doen mee. Je werkt nu als een stripper in de club.",
            volgende:17
          }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //15
        tekst:"Er zijn 5 jaren voorbij je hebt je opleiding behaald en besluit te gaan werken. Je gaat samen met je beste vriendin op zoek naar een baan in het theater. Jullie kijken samen op internet en gaan solliciteren. Jullie mogen beide op sollicitatie gesprek. Als jullie bij het bedrijf komen zijn er nog  12 andere kandidaten. Het is jouw beurt, je loopt de ruimte binnen en ziet 3 mensen zitten aan een tafel dat zijn de mensen die bepalen of jij aangenomen wordt als danser of niet. Tijdens het gesprek vragen ze om een aantal passen voor te doen. Dit doe jij. Jullie zijn nu beide klaar. Na 4 dagen krijgen jullie antwoord je bent toegelaten en zo is je vriendin, jullie besluiten het te vieren door",
        vraag:"samen uit of wijntje openen?",
        antwoorden:[
          {
            antwoord:"a samen uit",
            reactie:"Samen uit te gaan",
            volgende:16
          },
          {
            antwoord:"b wijntje openen",
            reactie:"Een wijntje te openen",
            volgende:16
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //16
        tekst:"5 jaar later: Omdat je al 5 jaar bij je werk werkt krijg je een cadeautje. Je besluit daarom om samen met wat collega’s uit te gaan naar een club. Daar aangekomen ga je zitten aan een tafel. Een bediende komt naar je toe en vraagt wat je wilt drinken je bestel een ..",
        vraag:"bier, wijn of cola?",
        antwoorden:[
          {
            antwoord:"a bier",
            reactie:"je drink een biertje",
            volgende:18
          },
          {
            antwoord:"b wijn",
            reactie:"je drink een wijntje",
            volgende:18
           },
           {
            antwoord: "c cola",
            reactie: "je drinkt cola",
            volgende:25
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //17
        tekst:"5 jaar later: Omdat je al 5 jaar bij je werk werkt krijg je een cadeautje. Je besluit daarom om samen met wat collega’s uit te gaan Naar een luxe restaurant te gaan. Daar aangekomen ga je zitten aan een tafel. Een bediende komt naar je toe en vraagt wat je wilt drinken je bestel een ..",
        vraag:"bier, wijn of cola?",
        antwoorden:[
          {
            antwoord:"a bier",
            reactie:"je drink een biertje",
            volgende:19
          },
          {
            antwoord:"b wijn",
            reactie:"je drink een wijntje",
            volgende:19
           },
           {
            antwoord:"c cola",
            reactie:" je drinkt cola",
            volgende:24
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //18
        tekst:"Je bent wat dronken en je besluit naar de man/vrouw toe te lopen om de naam en telefoonnummer te vragen. Het is je gelukt om de naam en telefoonnummer te krijgen. Als je aan het einde van de dag weer thuis ben val je in slaap. In de ochtend wordt je wakker met een berichtje op je telefoon. Het is de man/vrouw van de vorige avond. Je besluit",
        vraag:"laten of afspreken?",
        antwoorden:[
          {
            antwoord:"a laten",
            reactie:"Je laat het hierbij",
            volgende:25
          },
          {
            antwoord:"b afspreken",
            reactie:"Je besluit af te spreken",
            volgende:20
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //19
        tekst:"Je bent wat dronken en je besluit naar de man/vrouw toe te lopen om de naam en telefoonnummer te vragen. Het is je gelukt om de naam en telefoonnummer te krijgen. Als je aan het einde van de dag weer thuis ben val je in slaap. In de ochtend wordt je wakker met een berichtje op je telefoon. Het is de man/vrouw van de vorige avond. Je besluit",
        vraag:"laten of afspreken?",
        antwoorden:[
          {
            antwoord:"a laten",
            reactie:"Je laat het hierbij",
            volgende:27
          },
          {
            antwoord:"b afspreken",
            reactie:"Je besluit af te spreken",
            volgende:21
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //20
        tekst:"Jullie spreken veel met elkaar af, na 4 jaar vraagt hij of je zijn vrouw/man wilt zijn. Je zeg ",
        vraag:"ja of nee?",
        antwoorden:[
          {
            antwoord:"a ja",
            reactie:"Je zeg ja na 3 jaar vraagt hij of je met hem/haar wilt trouwen.",
            volgende:22
          },
          {
            antwoord:"b nee",
            reactie:"nee je besluit goede vrienden te blijven.",
            volgende:25
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //21
        tekst:"Jullie spreken veel met elkaar af, na 4 jaar vraagt hij of je zijn vrouw/man wilt zijn. Je zeg ",
        vraag:"ja of nee?",
        antwoorden:[
          {
            antwoord:"a ja",
            reactie:"Je zeg ja na 3 jaar vraagt hij of je met hem/haar wilt trouwen.",
            volgende:23
          },
          {
            antwoord:"b nee",
            reactie:"nee je besluit goede vrienden te blijven.",
            volgende:27
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //22
        tekst:"1 jaar later: jullie zitten samen in de woonkamer en je man/vrouw vraagt of je kinderen wil, je antwoord",
        vraag:"ja een kind, nee, ja een kat/hond",
        antwoorden:[
          {
            antwoord:"a ja een kind",
            reactie:"Ja ik wil wel kinderen",
            volgende:26
          },
          {
            antwoord:"b ja een hond/kat",
            reactie:"Ja een hond of kat",
            volgende:26
           },
           {
            antwoord:"c nee",
            reactie:"Nee hier ben ik niet aan toe",
            volgende:25
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //23
        tekst:"1 jaar later: jullie zitten samen in de woonkamer en je man/vrouw vraagt of je kinderen wil, je antwoord",
        vraag:"ja een kind, nee, ja een kat/hond",
        antwoorden:[
          {
            antwoord:"a ja een kind",
            reactie:"Ja ik wil wel kinderen",
            volgende:24
          },
          {
            antwoord:"b ja een hond/kat",
            reactie:"Ja een hond of kat",
            volgende:24
           },
           {
            antwoord:"c nee",
            reactie:"Nee hier ben ik niet aan toe",
            volgende:27
           }
          ],
          einde:false, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //24
        tekst:"Er gaan jaren voorbij en je bent nu een ouder je bent gelukkig",
          einde:true, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //25
        tekst:"Er gaan jaren voorbij en je bent nu een ouder je hebt een normaal leven geleeft",
          einde:true, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //26
        tekst:"Er gaan jaren voorbij en je bent nu een ouder je bent heel gelukkig",
          einde:true, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
    {
        //27
        tekst:"Er gaan jaren voorbij en je bent nu een ouder je bent niet gelukkig",
          einde:true, //als het wel een einde is zet je hier true neer
          hasart:false, //als het art heeft
    },
];

let replay = true;

while(replay == true)
{
    console.clear();
    let validReplayAnswer = false;
    let nextPartAnswer = 0;
    let volgende = 0;
    while(verhaalstukken[volgende].einde == false)
    {
        let validAnswer = false;
        if(verhaalstukken[volgende].hasart == true)
        {
            console.log(verhaalstukken[volgende].art);
        }
        console.log(verhaalstukken[volgende].tekst);
        let playerAnswer = input.question(verhaalstukken[volgende].vraag);
        for(let i = 0; i < verhaalstukken[volgende].antwoorden.length; i++)
        {
            if(verhaalstukken[volgende].antwoorden[i].antwoord == playerAnswer)
            {
                validAnswer = true;
                nextPartAnswer = verhaalstukken[volgende].antwoorden[i].volgende;
                console.clear(); //deze moet je ff testen of ie werkt maar ik denk dat dit het juiste resultaat geeft
                console.log(verhaalstukken[volgende].reactie);
            }
        }
        if(validAnswer == true)
        {
            volgende = nextPartAnswer;
            //console.clear();
        } else
        {
            console.clear();
            let validAnswers = "You can only answer with ";
            for(let i = 0; i < verhaalstukken[volgende].antwoorden.length; i++)
            {
                if(i > 0)
                {
                    validAnswers = validAnswers + " or ";
                }
                validAnswers = validAnswers + verhaalstukken[volgende].antwoorden[i].antwoord;
            }
            console.log(validAnswers);
        }
    }
    if(verhaalstukken[volgende].art == true)
    {
        console.log(verhaalstukken[volgende].art);
    }
    console.log(verhaalstukken[volgende].tekst);
    console.log("The end");
    while(validReplayAnswer == false)
    {
        let replayAnswer = input.question("Do you want to play again? \na. yes \nb. no \n");
        if(replayAnswer == "a")
        {
            validReplayAnswer = true;
        } else if(replayAnswer == "b")
        {
            validReplayAnswer = true;
            replay = false;
        } else
        {
            console.clear();
            console.log("You can only answer with a or b");
        }
    }
}



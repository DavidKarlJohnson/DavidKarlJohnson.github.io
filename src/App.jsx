import { useState } from 'react';
import './App.css'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact';
import weatherAppImg from './assets/project-image-weather-app.png'
import Education from './components/Education';

function App() {
  const hideProjects = false;
  const hideCourses = false;
  const hidePortrait = true;
  const email = 'jag@davidjohnson.se';
  const github = 'github.com/davidkarljohnson';
  const linkedin = 'linkedin.com/in/david-karl-johnson';


  const [projects, setProjects] = useState(
    [
      {
        id: crypto.randomUUID(),
        imgSrc: null, 
        title: 'Q-bot', 
        description: 'Q-bot är ett automatiserat verktyg som kösätter en användare hos samtliga av Sveriges hyresvärdar. Q-bot genererar ett säkert lösenord till användaren samt håller deras köstatus uppdaterad årligen, så att de aldrighblir av med sina köpoäng!', 
        gitHubLink: null,
        projectLink: 'www.davidjohnson.se',
        toolsUsed: ['JavaScript', 'Python', 'Playwright', 'HTML', 'CSS', 'FastAPI']
      },
      {
        id: crypto.randomUUID(),
        imgSrc: weatherAppImg, 
        title: 'Väderapp', 
        description: 'Väderapp som hämtar riktig data via en API', 
        gitHubLink: 'www.github.com/DavidKarlJohnson/weather-app',
        projectLink: 'www.davidjohnson.se',
        toolsUsed: ['JavaScript', 'HTML', 'CSS', 'Webpack']
      },
      {
        id: crypto.randomUUID(),
        imgSrc: null, 
        title: 'Clock it!', 
        description: '', 
        gitHubLink: null,
        projectLink: null,
        toolsUsed: ['JavaScript', 'Vue', 'HTML', 'CSS']
      },
      {
        id: crypto.randomUUID(),
        imgSrc: null, 
        title: 'CV mall', 
        description: 'En mall för att skapa ett personligt CV', 
        gitHubLink: 'www.github.com/DavidKarlJohnson/cv-application',
        projectLink: 'www.davidjohnson.se',
        toolsUsed: ['JavaScript', 'React', 'HTML', 'CSS']
      },
      {
        id: crypto.randomUUID(),
        imgSrc: null, 
        title: 'Restaurang sida', 
        description: 'Hemsida för en fiktiv italiensk restaurang', 
        gitHubLink: 'www.github.com/DavidKarlJohnson/restaurant-page',
        projectLink: 'www.davidjohnson.se',
        toolsUsed: ['JavaScript', 'HTML', 'CSS', 'Webpack']
      },
      {
        id: crypto.randomUUID(),
        imgSrc: null, 
        title: 'Tre i rad', 
        description: 'Det klassiska spelet Tre i rad i webbläsaren!', 
        gitHubLink: 'www.github.com/DavidKarlJohnson/tic-tac-toe',
        projectLink: 'www.davidjohnson.se',
        toolsUsed: ['JavaScript', 'HTML', 'CSS']
      }
    ]);


  const [courses, setCourses] = useState(
    [
      {
        id: 'MMG020',
        name: 'Förberedande kurs i matematik',
        desc: 'Denna nätbaserade kurs – kallad Sommarmatte – vänder sig till dig som vill vara ordentligt förberedd. Via vår kursmiljö på nätet, som innehåller ett modernt och tydligt läromedel, får du kontakt med både lärare och kurskamrater. Lärare hjälper dig med dina frågor via ett forum, chatt, e-post och telefon. Du kan planera din läsning själv och få ut så mycket som möjligt av sommaren samtidigt som du pluggar!',
        hp: 7.5,
        discipline: 'math',
        university: 'Göteborgs Universitet',
        link: 'https://www.gu.se/studera/hitta-utbildning/forberedande-kurs-i-matematik-mmg020',
        toolsUsed: [] 
      },
      {
        id: 'A237TG',
        name: 'Grundläggande programmering i Python',
        desc: 'I denna kurs ges studenten grundläggande kunskaper i programmering baserat på programspråket Python version 3. Kursen består av två delar: teoridel och praktiska programmeringsövningar. I den teoretiska delen introduceras programmering utifrån grundläggande byggstenar, såsom in- och utmatning av information till ett datorprogram, datatyper, selektioner och iterationer. Dessa byggstenar används sedan för att introducera egendefinierade funktioner, moduler, fil- och grafikhantering. Programmering tränas genom praktiska moment där studenten löser ett antal programmeringsuppgifter genom att skriva egna program i Python.',
        hp: 7.5,
        discipline: 'computer science',
        university: 'Högskolan i Borås',
        link: 'https://kursinfodoc.hb.se/PdfMaker.aspx?type=kurs&code=A237TG&revision=8,000&language=SV',
        toolsUsed: ['Python'] 
      },
      {
        id: '1MA010',
        name: 'Baskurs i matematik',
        desc: 'Denna kurs riktar sig till dig som vill börja läsa fristående kurser i matematik. Kursen täcker grunderna inom matematikens olika delar och behandlar bland annat induktion, aritmetik för rationella och reella tal, elementära funktioner och koordinatsystem i planet.',
        hp: 5,
        discipline: 'math',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1MA010',
        toolsUsed: [] 
      },
      {
        id: '1DT051',
        name: 'Introduktion till informationsteknologi',
        desc: 'En allmän introduktion till programmet, dess innehåll och syfte. Universitetets datorsystem och webbresurser, t.ex. Studentportalen, UpUnet-S, E-post. Att ansluta till universitetets datorsystem från andra datorer. Regler för studier och datoranvändning. Introduktion till verktyg och programvaror, t.ex. kommandotolk, editeringsprogram och texthantering. Filhantering. Integritetsskydd, säker kommunikation och etiska bedömningar. Introduktion till ämnet och dess historik. Orientering om datorns delar och funktion. Introduktion till digitalteknik, binär aritmetik, algoritmer, datastrukturer, datakommunikation och programvaruteknik. Problemlösning och introduktion till programmering. Studieteknik, t.ex. planering, motivation, studiemål, studievanor, stress samt antecknings- och lästekniker. Skriftlig framställning. Processer i grupparbeten. Lika villkor avseende samtliga diskrimineringsgrunder.',
        hp: 10,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1DT051',
        toolsUsed: ['Python'] 
      },
      {
        id: '1MA004',
        name: 'Algebra I',
        desc: 'Kursen behandlar bland annat elementär logik, mängdlära, talteori och polynom. Då Algebra I ger viktiga kunskaper inför många fortsättningskurser rekommenderas den till alla som vill fortsätta läsa matematik.',
        hp: 5,
        discipline: 'math',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1MA004',
        toolsUsed: ['Python'] 
      },
      {
        id: '1MA025',
        name: 'Linjär algebra och geometri I',
        desc: 'Kursen behandlar de grundläggande begreppen i linjär algebra, så som linjära ekvationssystem, matriser, linjer, plan, rotationer och speglingar.',
        hp: 5,
        discipline: 'math',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1MA025',
        toolsUsed: [] 
      },
      {
        id: '1DL201',
        name: 'Programkonstruktion och datastrukturer',
        desc: 'Introduktion till programmering: syftet med programmering, programmeringsprocessens faser, programmering satt i sitt sammanhang genom exempel på tillämpningar, kort historik över programmering, datorsystemet ur programmerarens synvinkel, programmeringsmiljöer. Algoritmer: vad en algoritm är, programmet som realisering av en algoritm, skillnaden i preciseringsgrad mellan datorprogram och vardagslivets algoritmer.',
        hp: 20,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kursplan?query=47706',
        toolsUsed: ['JavaScript', 'TypeScript'] 
      },
      {
        id: '1DT093',
        name: 'Datorarkitektur',
        desc: 'I kursen tas upp hur moderna datorsystem är uppbyggda, inklusive detaljer om pipelines, minnesorganisation, virtuellt och fysiskt minne samt minnesteknologi. Principer för konstruktion av instruktionsuppsättningar och vad som sätter begränsningar för datorsystem avseende bandbredd, effektförbrukning och kylning ingår. Hur datorsystem interagerar med omvärlden genom in- och utmatningssystem samt avbrott är en viktig del i kursen, liksom synkroniseringstekniker för att hantera samtidighet i datorsystem, och bedöma deras lämplighet i olika situationer.',
        hp: 10,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1DT093',
        toolsUsed: ['Mips'] 
      },
      {
        id: '1MA027',
        name: 'Logik och bevisteknik I',
        desc: 'Kursen ger dig grunderna i sats- och predikatlogik. Då logik har tillämpningar inom datavetenskapen rekommenderas denna kurs särskilt till studenter som har datavetenskap som huvudområde.',
        hp: 5,
        discipline: 'math',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1MA027',
        toolsUsed: [] 
      },
      {
        id: 'ETE318',
        name: 'Grunderna i AI',
        desc: 'Kursen syftar till att ge en introduktion och överblick av artificiell intelligens. Fokus ligger på att förstå begreppet och några viktiga tekniker som hur sökning och maskininlärning fungerar samt konsekvenser av AI på samhället.',
        hp: 2,
        discipline: 'computer science',
        university: 'Linköpings Universitet',
        link: 'https://liu.se/utbildning/kurs/ete318',
        toolsUsed: [] 
      },
      {
        id: 'ETE352',
        name: 'Cybersäkerhet - grunder och medvetenhet',
        desc: 'Samhällets digitalisering innebär ökade krav på cybersäkerhet. Alla som använder och är beroende av datorer, molntjänster, och nätverk i sitt arbete bör därför ha grundläggande förståelse i detta område. Vad är hoten, hur bedömer man olika hot, hur kan man skydda sig och fatta relevanta beslut för att undvika onödiga risker? Detta är typiska frågor som kommer behandlas under kursens gång. Dessutom kommer vi att diskutera hur man skapar en bra cybersäkerhetskultur i en organisation för att skapa rätt förutsättningar för långsiktig säkerhet.',
        hp: 3,
        discipline: 'computer science',
        university: 'Linköpings Universitet',
        link: 'https://liu.se/utbildning/kurs/ete352',
        toolsUsed: [] 
      },
      {
        id: '2IS233',
        name: 'Inledande programmering med Java',
        desc: 'Kursen behandlar hur man skapar strukturerade objektorienterade program med hjälp av programmeringsspråket Java. För att uppnå detta behandlas programmeringsbegrepp såsom variabel, metod, selektion, iteration och enklare algoritmer. Kursen ger även en introduktion till objektorientering där klasser, objekt, arv och komposition är centralt. Andra delar som behandlas är dokumentation, felhantering och felsökning. De teoretiska begreppen tillämpas kontinuerligt i övningar och laborationer.',
        hp: 7.5,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kursplan?query=45355',
        toolsUsed: ['Java'] 
      },
      {
        id: '1TD317',
        name: 'Datorer och programmering',
        desc: 'Kursen ger grunderna i programmering och passar nybörjare utan tidigare programmeringsvana. Den tar upp programmeringsspråket C++, vilket idag är ett av de mest använda programmeringsspråken. Det finns flera skäl att lära sig just C++, till exempel att det används mycket framför allt i industrin. Kursen passar också lärare som ska undervisa i programmering i skolan. Programvaran i kursen är fri och inga andra kostnader tillkommer. Ett antal obligatoriska inlämningsuppgifter ges och det är genom arbetet med dessa som större delen av inlärningen sker.',
        hp: 10,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1TD317',
        toolsUsed: ['C++'] 
      },
      {
        id: '1MA009',
        name: 'Automatateori',
        desc: 'Denna kurs behandlar begreppet beräkningsbarhet och matematiska modeller för beräkningar såsom ändliga automater, grammatiker och Turingmaskiner. Automatateori är en viktig del av den teoretiska grunden för datalogi och är därför lämplig att kombinera med studier i datavetenskap.',
        hp: 5,
        discipline: 'math',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1MA009',
        toolsUsed: [] 
      },
      {
        id: '1DL221',
        name: 'Imperativ och objektorienterad programmeringsmetodik',
        desc: 'Kursen ger dig förståelse för de principer som ligger till grund för imperativa och objektorienterade språk och för variationer mellan språken. Du lär dig också att programmera väl i sådana språk och arbeta med programutveckling, dokumentation och testning på ett strukturerat sätt och med hjälp av därtill avsedda verktyg.',
        hp: 20,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1DL221',
        toolsUsed: ['C', 'Java'] 
      },
      {
        id: '1MA013',
        name: 'Envariabelanalys',
        desc: 'Denna kurs behandlar derivator och integraler för funktioner av en variabel och fördjupar de kunskaper som du har från gymnasiet. Kursen behandlar även ordinära differentialekvationer och teorin för oändliga serier. De kunskaper som kursen Envariabelanalys ger är centrala för fortsatta studier i matematik.',
        hp: 10,
        discipline: 'math',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1MA013',
        toolsUsed: [] 
      },
      {
        id: '1DT096',
        name: 'Operativsystem och processorienterad programmering',
        desc: 'Programmeringsmodeller för flerkärniga system. Principer och tekniker för programmering och schemaläggning av parallella system av processer på enkelprocessorer, multicore och multiprocessorer. Problem som kan uppkomma i samband med samtidighet, t.ex. data race, dödläge, ömsesidigt uteslutande, Minneshantering i operativsystem och runtimesystem, inklusive minnesskydd, sidindelning och skräpsamling. Filsystem och grundläggande skyddsmekanismer. Praktisk användning av kunskaperna i genomförande av projektarbete i grupp. Programmering av parallella system i olika högnivåspråk, exempelvis Erlang, såväl som i olika lågnivåspråk, exempelvis C. Verktyg för dokumenthantering, versionshantering, debugging, testning, hantering av programbibliotek o dyl. Agila projektmetodiker.',
        hp: 15,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1DT096',
        toolsUsed: ['Mips', 'C', 'Erlang'] 
      },
      {
        id: '1MD034',
        name: 'Systemdesign med ett användarperspektiv',
        desc: 'Den här kursen ger dig färdigheter och kunskaper i att utforma, utveckla och utvärdera interaktiva användargränssnitt. För att komplettera och förstärka den teoretiska förståelsen innefattar kursen ett mjukvaruutvecklingsprojekt i vilket du utifrån en verksamhetsbeskrivning och kravdokument skapar ett användargränssnitt mot ett IT-system.',
        hp: 5,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1MD034',
        toolsUsed: ['Figma'] 
      },
      {
        id: '1MS321',
        name: 'Sannolikhet och statistik DV',
        desc: 'Sannolikhetsbegreppet. Oberoende och betingad sannolikhet. Stokastiska variabler. Vanliga sannolikhetsfördelningar. Väntevärde och varians. Stora talens lag. Centrala gränsvärdessatsen. Tillämpade sannolikhetsproblem. Punkt- och intervallskattningar. Stokastiska processer. Markovkedjor. Slumptal.',
        hp: 5,
        discipline: 'math',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1MS321',
        toolsUsed: [] 
      },
      {
        id: '1DL301',
        name: 'Databasteknik DV',
        desc: 'I kursen studeras hur man använder en databashanterare för att designa (modellera och konstruera) en databas, och hur man söker i databasen genom att använda ett frågespråk. Kursen innehåller entitets-relations (ER) modellering, relationsdatamodellen, funktionella beroenden och normalisering, introduktion till frågor, uppdateringar och data definition med hjälp av frågespråket SQL samt detaljer angående den interna representationen av data.',
        hp: 5,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1DL301',
        toolsUsed: ['SQL'] 
      },
      {
        id: '1DT052',
        name: 'Datakommunikation I',
        desc: 'Hur data transporteras mellan datorer är det centrala i denna kurs, där olika protokoll i Internetsviten spelar en central roll, liksom förståelse, analys och specifikation av några kommunikationsprotokoll. Datanätets prestanda och andra egenskaper ingår också i kursen.',
        hp: 5,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1DT052',
        toolsUsed: [] 
      },
      {
        id: '1DL251',
        name: 'Metoder och projektledning för mjukvaruutveckling',
        desc: 'Ett programmeringsprojekt omfattar mycket mer än programmering. Det omfattar även kravhantering, design, testning, och underhåll. En professionell produkt har högre krav på sig än ett garagehack. Varje projekt följer en process, som beskriver vem gör vad, och när, och vilka regler gäller för säkerställa kvaliteten. Kursen handlar om hela processen, "från ax till limpa".',
        hp: 5,
        discipline: 'computer science',
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1DL251',
        toolsUsed: ['JavaScript', 'HTML', 'CSS', 'Vue', 'Jira'] 
      },
      {
        id: 'ETG102',
        name: 'Grundläggande databehandling',
        desc: 'Kursen lär dig att skapa, designa, formatera, utveckla, analysera och presentera kalkylblad med olika typer av input data.',
        hp: 7.5,
        discipline: 'other',
        university: 'Högskolan i Gävle',
        link: 'https://www.hig.se/kurs?identifier=ETG102',
        toolsUsed: ['Microsoft Excel'] 
      }


    ]
  )

  return (
    <>
      <Profile 
      emailLink={email}
      gitHubLink={github}
      linkedInLink={linkedin}
      hidePortrait={hidePortrait}
      />
      {hideCourses !== true && <Education courses={courses}/> }
      {hideProjects !== true && <Projects projectsArr={projects}/> }
      <Contact 
      emailLink={email}
      gitHubLink={github}
      linkedInLink={linkedin}
      />
    </>
  )
}

export default App


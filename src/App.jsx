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
        toolsUsed: ['Mips, C, Erlang'] 
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


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
        id: '1DL201',
        name: 'Programkonstruktion och datastrukturer',
        desc: 'Introduktion till programmering: syftet med programmering, programmeringsprocessens faser, programmering satt i sitt sammanhang genom exempel på tillämpningar, kort historik över programmering, datorsystemet ur programmerarens synvinkel, programmeringsmiljöer.',
        hp: 20,
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1DL201',
        toolsUsed: ['JavaScript', 'TypeScript'] 
      },
      {
        id: '1DL221',
        name: 'Imperativ och objektorienterad programmeringsmetodik',
        desc: 'Kursen ger dig förståelse för de principer som ligger till grund för imperativa och objektorienterade språk och för variationer mellan språken. Du lär dig också att programmera väl i sådana språk och arbeta med programutveckling, dokumentation och testning på ett strukturerat sätt och med hjälp av därtill avsedda verktyg.',
        hp: 20,
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1DL221',
        toolsUsed: ['C', 'Java'] 
      },
      {
        id: '1MD034',
        name: 'Systemdesign med ett användarperspektiv',
        desc: 'Den här kursen ger dig färdigheter och kunskaper i att utforma, utveckla och utvärdera interaktiva användargränssnitt. För att komplettera och förstärka den teoretiska förståelsen innefattar kursen ett mjukvaruutvecklingsprojekt i vilket du utifrån en verksamhetsbeskrivning och kravdokument skapar ett användargränssnitt mot ett IT-system.',
        hp: 5,
        university: 'Uppsala Universitet',
        link: 'https://www.uu.se/utbildning/kurs?query=1MD034',
        toolsUsed: ['Figma'] 
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


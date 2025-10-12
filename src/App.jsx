import { useState } from 'react';
import './App.css'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact';
import weatherAppImg from './assets/project-image-weather-app.png'

function App() {
  const hideProjects = false;
  const hidePortrait = true;

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

  return (
    <>
      <Profile 
      emailLink='jag@davidjohnson.se'
      gitHubLink='github.com/davidkarljohnson'
      linkedInLink='linkedin.com/in/david-karl-johnson'
      hidePortrait={hidePortrait}
      />
      {hideProjects !== true && <Projects projectsArr={projects}/> }
      <Contact 
      emailLink='jag@davidjohnson.se'
      gitHubLink='github.com/davidkarljohnson'
      linkedInLink='linkedin.com/in/david-karl-johnson'
      />
    </>
  )
}

export default App


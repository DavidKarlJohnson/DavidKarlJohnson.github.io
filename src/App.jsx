import { useState } from 'react';
import './App.css'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact';

function App() {
  const [projects, setProjects] = useState(
    [
      {
        id: crypto.randomUUID(),
        imgSrc: null, 
        title: 'TODO list', 
        description: 'My TODO list', 
        gitHubLink: 'www.github.com',
        projectLink: 'www.davidjohnson.se'
      },
      {
        id: crypto.randomUUID(),
        imgSrc: null, 
        title: 'Weather app', 
        description: 'Simple weather app for displaying the local weather', 
        gitHubLink: 'www.github.com',
        projectLink: 'www.davidjohnson.se'
      },
      {
        id: crypto.randomUUID(),
        imgSrc: null, 
        title: 'Calculator', 
        description: 'Calculator that supports addition, subtraction, multiplication and division', 
        gitHubLink: 'www.github.com',
        projectLink: 'www.davidjohnson.se'
      },
      {
        id: crypto.randomUUID(),
        imgSrc: null, 
        title: 'Restaurant page', 
        description: 'Demo for a pizzeria', 
        gitHubLink: 'www.github.com',
        projectLink: 'www.davidjohnson.se'
      }
    ]);

  return (
    <>
      <Profile 
          gitHubLink='github.com/davidkarljohnson'
      linkedInLink='linkedin.com/in/david-karl-johnson'
      />
      <Projects projectsArr={projects}/>
      <Contact 
      email='jag@davidjohnson.se' 
      address='Test-Address 24' 
      phone='070-7005555' 
      gitHubLink='github.com/davidkarljohnson'
      linkedInLink='linkedin.com/in/david-karl-johnson'
      />
    </>
  )
}

export default App


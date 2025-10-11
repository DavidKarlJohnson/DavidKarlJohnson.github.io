import Project from "./Project";
import '../styles/Projects.css';


export default function Projects({projectsArr}) {
    return (
        <section className="projects">
            <h2>Mina projekt</h2>
            <div>
                { projectsArr.map(project => 
                    <Project 
                    key={project.id}
                    imgSrc={project.imgSrc} 
                    title={project.title}
                    description={project.description}
                    gitHubLink={project.gitHubLink}
                    projectLink={project.projectLink}
                    />
                ) } 
            </div>
        </section>
    );
};
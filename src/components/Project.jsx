import externalLinkLogo from '../assets/external-link-logo.svg';
import '../styles/Project.css';
import formatLink from '../utils/formatLink';
import ExternalSiteButton from './ExternalSiteButton';
import ToolImg from './ToolImg';

export default function Project({imgSrc=null, title, description, gitHubLink, projectLink, toolsUsed=null}) {
    const imgColors = ['#7eff89', '#ffe17e', '#ff7e7e', '#7effce', '#7ebaff', '#9a7eff', '#f07eff','#ff7ece'];
    const randColor = imgColors[Math.floor(Math.random() * imgColors.length)];


    return (
        <div className="project">
            {imgSrc !== null ? 
                <img src={imgSrc} className='project-img'/> : 
                <div className='project-img' style={{backgroundColor: randColor}}>
                    <span>Screenshot of project</span>
                </div>
            }
            <div>
                <div className='top-group'>
                    <h2>{title}</h2>
                    <div className="project-links">
                        <ExternalSiteButton
                        logoSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        url={gitHubLink}
                        title='GitHub'
                        />
                        <ExternalSiteButton 
                        logoSrc={externalLinkLogo}
                        url={projectLink}
                        title='Go to project'
                        />
                    </div>
                </div>
                <p>{description}</p>
                <div className='tools-used'>
                    {  toolsUsed !== null && 
                        toolsUsed.map(tool =>
                            <ToolImg name={tool}/>) 
                    }
                </div>
            </div>
        </div>
    )
};
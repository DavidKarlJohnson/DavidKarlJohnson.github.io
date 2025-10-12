import '../styles/Course.css';
import ToolImg from "./ToolImg"
import uuLogo from '../assets/uppsala-universitet-logo.png';
import externalLinkLogo from '../assets/external-link-logo.svg';
import ExternalSiteButton from './ExternalSiteButton';

export default function Course({ name, desc, hp, university, link=null, toolsArr }) {
    console.log(toolsArr);
    return (
        <div className='course'>
            <div className="top-group">
                <h3>{name}</h3>
                <div className="tools-group">
                    { toolsArr.map(tool => (
                        <ToolImg name={tool} key={tool}/>
                    )) }
                </div>
            </div>
            <div className='info-group'>
                <div>
                    <img src={uuLogo}></img>
                    <span>{university}</span>
                </div>
                <span>{hp} hp</span>
                { link !== null && <ExternalSiteButton 
                                        logoSrc={externalLinkLogo}
                                        url={link}
                                        title='Course link'
                                        /> 
                }
            </div>
            <p>{desc}</p>
        </div>
    )
}
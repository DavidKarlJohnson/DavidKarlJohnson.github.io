import '../styles/Course.css';
import ToolImg from "./ToolImg"
import uuLogo from '../assets/uppsala-universitet-logo.png';

export default function Course({ name, desc, hp, university, toolsArr }) {
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
            </div>
            <p>{desc}</p>
        </div>
    )
}
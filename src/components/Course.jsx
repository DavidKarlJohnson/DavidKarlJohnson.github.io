import '../styles/Course.css';
import ToolImg from "./ToolImg"

export default function Course({ name, desc, hp, toolsArr }) {
    console.log(toolsArr);
    return (
        <div className='course'>
            <div className="top-group">
                <h2>{name}</h2>
                <span>{hp}</span>
            </div>
            <p>{desc}</p>
            <div className="tools-group">
                { toolsArr.map(tool => (
                    <ToolImg name={tool} key={tool}/>
                )) }
            </div>
        </div>
    )
}
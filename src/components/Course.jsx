import '../styles/Course.css';
import ToolImg from "./ToolImg"

export default function Course({ name, desc, hp, toolsArr }) {
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
            <span>{hp}</span>
            <p>{desc}</p>
        </div>
    )
}
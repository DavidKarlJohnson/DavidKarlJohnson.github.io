import ToolImg from "./ToolImg"

export default function Course({ key, name, desc, hp, toolsArr }) {

    return (
        <div className='course'>
            <div className="top-group">
                <h2>{name}</h2>
                <span>{hp}</span>
            </div>
            <p>{desc}</p>
            <div className="tools-group">
                { toolsArr.map(tool => {
                    <ToolImg name={tool}/>
                }) }
            </div>
        </div>
    )
}
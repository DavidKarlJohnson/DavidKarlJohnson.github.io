export default function ToolImg({name}) {
    name = name.toLowerCase();

    return (
        <>
        { name.localeCompare('javascript') == 0 &&
            <img className='tool-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        }
        </>
    )
}
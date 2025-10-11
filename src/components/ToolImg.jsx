import '../styles/ToolImg.css';

export default function ToolImg({name}) {
    name = name.toLowerCase();

    return (
        <>
        { name.localeCompare('css') == 0 &&
            <img className='tool-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
        }
        { name.localeCompare('html') == 0 &&
            <img className='tool-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
        }
        { name.localeCompare('javascript') == 0 &&
            <img className='tool-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        }
        </>
    )
}
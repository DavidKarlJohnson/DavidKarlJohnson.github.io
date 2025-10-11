import '../styles/ToolImg.css';

export default function ToolImg({name}) {
    let imgSrc = '';

    switch (name.toLowerCase()) {
        case 'c':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg";
            break;
        case 'c++':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg";
            break;
        case 'css':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg";
            break;
        case 'erlang':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/erlang/erlang-original.svg";
            break;
        case 'figma':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg";
            break;
        case 'html':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg";
            break;
        case 'java':
            imgSrc = "src=https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg";
            break;
        case 'javascript':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
            break;
        case 'jira':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg";
            break;
        case 'node':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg";
            break;
        case 'python':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg";
            break;
        case 'react':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
            break;
        case 'sql':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg";
            break;
        case 'trello':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg";
            break;
        case 'typescript':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg";
            break;
        case 'vue':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg";
            break;
        case 'webpack':
            imgSrc = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg";
            break;
        default:
            imgSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name.toLowerCase()}/${name.toLowerCase()}-original.svg`;
            break;
    }
    return (
        <>
            {imgSrc && <img className='tool-img' src={imgSrc} title={name} />}
        </>
    );
}
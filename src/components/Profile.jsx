import '../styles/Profile.css';
import personLake from '../assets/person-lake.jpg';
import noProfilePic from '../assets/project-image-weather-app.png';
import ExternalSiteButton from './ExternalSiteButton';
import emailIcon from '../assets/email.svg'

export default function Profile({emailLink=null, gitHubLink, linkedInLink, hidePortrait}) {
    const name = "David Johnson";
    const aboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <section className="profile">
            <div>   
                { hidePortrait !== true && <img className="profile-picture" src={personLake} /> }
                { hidePortrait !== false && <img className="profile-picture" src={noProfilePic} /> }
                <span>{name}</span>
            </div>
            <div className="about-group">
                <h1>Om mig</h1>
                <p>{aboutMe}</p>
                <div>
                    <ExternalSiteButton 
                    logoSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    url={gitHubLink}
                    title='GitHub'
                    />
                    <ExternalSiteButton 
                    logoSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                    url={linkedInLink}
                    title='LinkedIn'
                    />
                    <ExternalSiteButton 
                    logoSrc={emailIcon}
                    url={emailLink}
                    title='Email'
                    /> 
                </div>
            </div>
        </section>
    );
}

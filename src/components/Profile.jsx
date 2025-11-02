import '../styles/Profile.css';
import personLake from '../assets/person-lake.jpg';
import ExternalSiteButton from './ExternalSiteButton';
import emailIcon from '../assets/email.svg'

export default function Profile({emailLink=null, gitHubLink, linkedInLink, hidePortrait}) {
    const name = "David Johnson";
    const aboutMe = 'Datavetenskapsstudent vid Uppsala universitet med bred teknisk kompetens inom programmering, systemutveckling och matematik'
    return (
        <section className="profile">
            <div>   
                { hidePortrait === false && <img className="profile-picture" src={personLake} /> }
                { hidePortrait === false && <span>{name}</span> }
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

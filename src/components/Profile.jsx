import '../styles/Profile.css';
import ExternalSiteButton from './ExternalSiteButton';
import emailIcon from '../assets/email.svg'
export default function Profile({emailLink=null, gitHubLink, linkedInLink, hidePortrait}) {
    const name = "David Johnson";
    const profilePicSrc = 'https://live.staticflickr.com/65535/54926208431_a4d2d55e8b_c.jpg';
    const aboutMe = 'Datavetenskapsstudent vid Uppsala universitet med breda kompetenser inom programmering, systemutveckling och matematik. Våren 2026 påbörjar jag min kandidatuppsats och letar nu efter ett spännande datavetenskapligt område att fördjupa mig i. Hör gärna av dig om du vill samarbeta eller har ett projekt som kan passa!'
    return (
        <section className="profile">
            <div>   
                { hidePortrait === false && <img className="profile-picture" src={profilePicSrc} /> }
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

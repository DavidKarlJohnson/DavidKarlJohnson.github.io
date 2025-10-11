import '../styles/Profile.css';
import personLake from '../assets/person-lake.jpg';
import ExternalSiteButton from './ExternalSiteButton';

export default function Profile() {
    const name = "David Johnson";
    const aboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const gitHubLink = "";
    const linkedinLink = "";
    const emailLink = "";

    return (
        <section className="profile">
            <div>   
                <img className="profile-picture" src={personLake} />
                <span>{name}</span>
            </div>
            <div className="about-group">
                <h1>Om mig</h1>
                <p>{aboutMe}</p>
                <div>
                    <ExternalSiteButton 
                    logoSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    url='github.com/davidjohnson'
                    title='GitHub'
                    />
                    <ExternalSiteButton 
                    logoSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                    url='linkedin.com'
                    title='LinkedIn'
                    />
                </div>
            </div>
        </section>
    );
}

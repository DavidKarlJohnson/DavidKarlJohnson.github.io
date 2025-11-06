import emailIcon from '../assets/email.svg'
import '../styles/Contact.css';
import ExternalSiteButton from './ExternalSiteButton';


export default function Contact({emailLink, gitHubLink, linkedInLink}) {
    return (
        <footer className="contact-group">
            <div>
                <h2>Kontakta mig</h2>
                {emailLink !== null && 
                    <div className='contact-info'>
                        <ExternalSiteButton 
                            logoSrc={emailIcon}
                            url={emailLink}
                            title='Email'
                        /> 
                        <span>{emailLink}</span>
                    </div>  
                }
                {linkedInLink !== null && 
                    <div className='contact-info'>
                        <ExternalSiteButton 
                            logoSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                            url={linkedInLink}
                            title='LinkedIn'
                        /> 
                        <span>{linkedInLink}</span>
                    </div>
                }
                {gitHubLink !== null && 
                    <div className='contact-info'>
                        <ExternalSiteButton
                            logoSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                            url={gitHubLink}
                            title='GitHub'
                        />
                        <span>{gitHubLink}</span>
                    </div>
                }
            </div>
        </footer>
    );
}
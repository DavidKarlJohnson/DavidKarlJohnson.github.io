import Icon from '@mdi/react';
import { mdiPhone, mdiEmail, mdiMapMarker } from '@mdi/js';
import formatLink from '../utils/formatLink';
import '../styles/Contact.css';
import personLake from '../assets/person-lake.jpg';
import ExternalSiteButton from './ExternalSiteButton';


export default function Contact({email=null, address=null, phone=null, gitHubLink, linkedInLink}) {
    return (
        <footer className="contact-group">
            <div>
                <h2>Kontakta mig</h2>
                <p>Please get in touch if you think our work could be mutually beneficial!</p>
                {address !== null && <
                    div className='contact-info'><Icon path={mdiMapMarker} size={1} /><span>{address}</span></div>}
                {phone !== null && 
                    <div className='contact-info'><Icon path={mdiPhone} size={1} /> <span>{phone}</span></div>}
                {email !== null && 
                    <div className='contact-info'><Icon path={mdiEmail} size={1} /><span>{email}</span></div>}
                <div className="contact-links">
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
                </div>
            </div>
            <img src={personLake} />
        </footer>
    );
}
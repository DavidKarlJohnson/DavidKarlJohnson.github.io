import '../styles/UniversityImg.css';
import uuLogo from '../assets/uppsala-universitet-logo.svg';
import guLogo from '../assets/goteborgs-universitet-logo.svg';
import luLogo from '../assets/linkopings-universitet-logo.svg';
import hibLogo from '../assets/hogskolan-i-boras-logo.svg';
import higLogo from '../assets/hogskolan-i-gavle-logo.svg';




export default function UniversityImg({name}) {
    let imgSrc = '';

    switch (name.toLowerCase()) {
        case 'uppsala universitet':
            imgSrc = uuLogo;
            break;
        case 'linköpings universitet':
            imgSrc = luLogo;
            break;
        case 'göteborgs universitet':
            imgSrc = guLogo;
            break;
        case 'högskolan i borås':
            imgSrc = hibLogo;
            break;
        case 'högskolan i gävle':
            imgSrc = higLogo;
            break;
        default:
            imgSrc = '';
            break;
    }
    return (
        <>
            {imgSrc && <img className='university-img' src={imgSrc} title={name} />}
        </>
    );
}
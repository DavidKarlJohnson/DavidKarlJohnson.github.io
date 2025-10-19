import '../styles/UniversityImg.css';
import uuLogo from '../assets/uppsala-universitet-logo.svg';
import guLogo from '../assets/goteborgs-universitet-logo.svg';


export default function UniversityImg({name}) {
    let imgSrc = '';

    switch (name.toLowerCase()) {
        case 'uppsala universitet':
            imgSrc = uuLogo;
            break;
        case 'göteborgs universitet':
            imgSrc = guLogo;
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
import formatLink from "../utils/formatLink"
import '../styles/ExternalSiteButton.css';


/**
 * Creates a button component with a background image that will redirect to the given site.
 * @param {string} logoSrc - Source of the img inside the button
 * @param {string} url - The site where to be opened when button is clicked
 * @param {string} title - Tooltip which'll be displayed when hovering the button  
 * @returns {JSX.Element} - Button element
 */
export default function ExternalSiteButton({logoSrc, url, title}) {
    // TODO: Add conditional logic for invalid arguments
    return ( 
    <button className="external-site-button">
        <a href={formatLink(url)} target="_blank" rel="noopener noreferrer" title={title}>
            <img src={logoSrc} />
        </a>
    </button> 
    )
}


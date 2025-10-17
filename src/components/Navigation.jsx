import '../styles/Navigation.css'

export default function Navigation() {

    function scrollTo(elementSelector) {
        document.querySelector(elementSelector).scrollIntoView(true);
    }

    return (
        <nav className="navigation">
            <button onClick={() => scrollTo('.profile')}>Om mig</button>
            <button onClick={() => scrollTo('.education')}>Utbildning</button>
            <button onClick={() => scrollTo('.projects')}>Projekt</button>
            <button onClick={() => scrollTo('.contact-group')}>Kontakt</button>
        </nav>
    )
}
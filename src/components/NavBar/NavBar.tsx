import { Link } from 'react-scroll';
import './styles.css';


export function NavBar() {

    return(
        <div className="portfolio-navbar">
            <div className="portfolio-navbar-name">
                <h3 className="portfolio-navbar-first-name">RODRIGO</h3>
                <h3 className="portfolio-navbar-last-name">RAMOS</h3>
            </div>
            <div className="portfolio-navbar-options">
                <Link to="hero" smooth={true} duration={500}>
                    <p>Início</p>
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                    <p>Skills</p>
                </Link>
                <Link to="about" smooth={true} duration={500}>
                    <p>Sobre</p>
                </Link>
                <p>Projetos</p>
            </div>
        </div>

    )
}
import './styles.css';
import IconLinkedIn from "../../assets/svg/IconLinkedIn.svg";
import IconGitHubColor from "../../assets/svg/IconGitHubColor.svg";
import IconWhatsApp from "../../assets/svg/IconWhatsApp.svg";

export function Footer() {
    return(
        <>
            <section className='portfolio-section-footer'>
                <div className='portfolio-footer-name'>
                    <h3 className="portfolio-footer-first-name">RODRIGO</h3>
                    <h3 className="portfolio-footer-last-name">RAMOS</h3>
                </div>
                <p>Contato:</p>
                <div className="portfolio-footer-icons">
                    <a href="https://www.linkedin.com/in/rodrigojoaoramos/" target="_blank" rel="noopener noreferrer">
                        <img src={IconLinkedIn} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/rodrigojramos" target="_blank" rel="noopener noreferrer">
                        <img src={IconGitHubColor} alt="GitHub" />
                    </a>
                    <a href="https://wa.me/5554991854828" target="_blank" rel="noopener noreferrer">
                        <img src={IconWhatsApp} alt="WhatsApp" />
                    </a>
                </div>
            </section>
        </>
    )
}
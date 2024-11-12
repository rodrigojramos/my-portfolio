import './styles.css';
import { Download } from "lucide-react";
import IconLinkedIn from "../../../../assets/svg/IconLinkedIn.svg";
import IconGitHubColor from "../../../../assets/svg/IconGitHubColor.svg";
import IconWhatsApp from "../../../../assets/svg/IconWhatsApp.svg";
import IconLine from "../../../../assets/svg/IconLine.svg";

export function Hero() {

    function handleClickBtnDownload() {
        const link = document.createElement("a");
        link.href = "/curriculo.pdf";
        link.download = "Currículo Rodrigo Ramos.pdf";
        link.click();
    }

    return(
        <>
            <section className="portfolio-section-hero" id="hero">
                <div className="portfolio-container-hero">
                    <div className="portfolio-bg">
                        <div className="portfolio-personal-info">
                            <p>Olá, visitante!</p>
                            <h1>Meu nome é Rodrigo</h1>
                            <p>Desenvolvedor Back-end</p>
                            <div className="portfolio-hero-icons">
                                <img src={IconLine} />
                                <a href="https://www.linkedin.com/in/rodrigojoaoramos/" target="_blank" rel="noopener noreferrer">
                                    <img src={IconLinkedIn} alt="LinkedIn" />
                                </a>
                                <a href="https://github.com/rodrigojramos" target="_blank" rel="noopener noreferrer">
                                    <img src={IconGitHubColor} alt="GitHub" />
                                </a>
                                <a href="https://wa.me/5554991854828" target="_blank" rel="noopener noreferrer">
                                    <img src={IconWhatsApp} alt="WhatsApp" />
                                </a>
                                <img src={IconLine} />
                            </div>
                            <button onClick={handleClickBtnDownload} className="portfolio-btn">
                                <Download />
                                Download CV
                            </button>      
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
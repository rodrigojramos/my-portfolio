import './styles.css';
import IconBigLine2 from "../../../../assets/svg/IconBigLine2.svg";
import IconJava from "../../../../assets/svg/IconJava.svg";
import IconSpring from "../../../../assets/svg/IconSpring.svg";
import IconPostgres from "../../../../assets/svg/IconPostgres.svg";
import IconDocker from "../../../../assets/svg/IconDocker.svg";
import IconTypeScript from "../../../../assets/svg/IconTypeScript.svg";
import IconReact from "../../../../assets/svg/IconReact.svg";
import IconHTML from "../../../../assets/svg/IconHTML.svg";
import IconCSS from "../../../../assets/svg/IconCSS.svg";
import IconGitHubColor from "../../../../assets/svg/IconGitHubColor.svg";
import IconMySQL from "../../../../assets/svg/IconMySql.svg";
import IconJUnit from "../../../../assets/svg/IconJUnit.svg";

export function Projects() {
    return(
        <>
            <section className="portfolio-section-projects" id="projects">
                <div className="portfolio-projects">
                    <h2>Projetos:</h2>
                    <div className="portfolio-projects-containers">
                        <div className="portfolio-projects-container">
                            <h4>Sistema de Reservas de Passagens</h4>
                            <img src={IconBigLine2} />
                            <p>Sistema de reservas de passagens aéreas para uma companhia fictícia. O projeto faz parte de uma aplicação fullstack para permitir a compra de passagens, gerenciamento de voos e check-ins online, com áreas específicas para usuários e administradores.</p>
                            <img src={IconBigLine2} />
                            <span>Back-end:</span>
                            <div className="portfolio-projects-icons-back">
                                <img src={IconJava} />
                                <img src={IconSpring} />
                                <img src={IconPostgres} />
                                <img src={IconDocker} />
                            </div>
                            <span>Front-end:</span>
                            <div className="portfolio-projects-icons-front">
                                <img src={IconHTML} />
                                <img src={IconCSS} />
                                <img src={IconTypeScript} />
                                <img src={IconReact} />
                            </div>
                            <img src={IconBigLine2} />
                            <div className="portfolio-projects-btn">
                                <a href="https://github.com/rodrigojramos/airline" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <img src={IconGitHubColor} alt="GitHub" />
                                        Repositório Back-end
                                    </button>
                                </a>
                                <a href="https://github.com/rodrigojramos/airline-frontend" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <img src={IconGitHubColor} alt="GitHub" />
                                        Repositório Front-end
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-projects-container">
                            <h4>E-commerce</h4>
                            <img src={IconBigLine2} />
                            <p>Aplicação de e-commerce full-stack que permite o usuário explorar uma variedade de produtos, adicioná-los ao carrrinho e gerenciar o inventário de forma eficiente. A aplicação oferece uma experiência de usuário fluida e responsiva.</p>
                            <img src={IconBigLine2} />
                            <span>Back-end:</span>
                            <div className="portfolio-projects-icons-back">
                                <img src={IconJava} />
                                <img src={IconSpring} />
                                <img src={IconPostgres} />
                            </div>
                            <span>Front-end:</span>
                            <div className="portfolio-projects-icons-front">
                                <img src={IconHTML} />
                                <img src={IconCSS} />
                                <img src={IconTypeScript} />
                                <img src={IconReact} />
                            </div>
                            <img src={IconBigLine2} />
                            <div className="portfolio-projects-btn">
                                <a href="https://github.com/rodrigojramos/dscommerce" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <img src={IconGitHubColor} alt="GitHub" />
                                        Repositório Back-end
                                    </button>
                                </a>
                                <a href="https://github.com/rodrigojramos/dscommerce-frontend" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <img src={IconGitHubColor} alt="GitHub" />
                                        Repositório Front-end
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-projects-container">
                            <h4>Agregador de investimentos</h4>
                            <img src={IconBigLine2} />
                            <p>Projeto de um agregador de investimentos que permite aos usuários criar uma conta, gerenciar suas ações e acompanhar o valor dos investimentos em tempo real. Para atualizar os valores das ações em tempo real foi integrada a API externa Brapi. Além disso, testes unitários foram implementados com JUnit5.</p>
                            <img src={IconBigLine2} />
                            <span>Back-end:</span>
                            <div className="portfolio-projects-icons-back">
                                <img src={IconJava} />
                                <img src={IconSpring} />
                                <img src={IconMySQL} />
                                <img src={IconDocker} />
                                <img src={IconJUnit} />
                            </div>
                            <span>Front-end:</span>
                            <div className="portfolio-projects-icons-front">
                                <span>Ainda não foi desenvolvido o front-end</span>
                            </div>
                            <img src={IconBigLine2} />
                            <div className="portfolio-projects-btn">
                                <a href="https://github.com/rodrigojramos/investment-aggregator" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <img src={IconGitHubColor} alt="GitHub" />
                                        Repositório Back-end
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
import './styles.css';
import IconJava from "../../../../assets/svg/IconJava.svg";
import IconJavaColor from "../../../../assets/svg/IconJavaColor.svg";
import IconSpring from "../../../../assets/svg/IconSpring.svg";
import IconMongo from "../../../../assets/svg/IconMongo.svg";
import IconJUnit from "../../../../assets/svg/IconJUnit.svg";
import IconTypeScript from "../../../../assets/svg/IconTypeScript.svg";
import IconTypeScriptColor from "../../../../assets/svg/IconTypeScriptColor.svg";
import IconJavaScript from "../../../../assets/svg/IconJavaScript.svg";
import IconReact from "../../../../assets/svg/IconReact.svg";
import IconHTML from "../../../../assets/svg/IconHTML.svg";
import IconCSS from "../../../../assets/svg/IconCSS.svg";
import IconDocker from "../../../../assets/svg/IconDocker.svg";
import IconDockerColor from "../../../../assets/svg/IconDockerColor.svg"
import IconFigma from "../../../../assets/svg/IconFigma.svg";
import IconGit from "../../../../assets/svg/IconGit.svg";
import IconGitHub from "../../../../assets/svg/IconGitHub.svg";
import IconPostman from "../../../../assets/svg/IconPostman.svg";
import IconBigLine from "../../../../assets/svg/IconBigLine.svg";
import IconDataBase from "../../../../assets/svg/IconDataBase.svg";

export function Skills() {
  return (
    <>
      <section className="portfolio-section-skills" id="skills">
        <div className="portfolio-skills">
          <div className="portfolio-skills-container">
            <img src={IconJavaColor} />
            <h4>Back-end</h4>
            <img src={IconBigLine} />
            <div className="portfolio-skills-icon">
              <img src={IconJava} />
              <p>Java</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconSpring} />
              <p>Spring Boot</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconDataBase} />
              <p>SQL</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconMongo} />
              <p>NoSQL</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconJUnit} />
              <p>JUnit5</p>
            </div>
          </div>
          <div className="portfolio-skills-container">
            <img src={IconDockerColor} />
            <h4>Outras Tecnologias</h4>
            <img src={IconBigLine} />
            <div className="portfolio-skills-icon">
              <img src={IconDocker} />
              <p>Docker</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconGit} />
              <p>Git</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconGitHub} />
              <p>GitHub</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconPostman} />
              <p>Postman</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconFigma} />
              <p>Figma</p>
            </div>
          </div>
          <div className="portfolio-skills-container">
            <img src={IconTypeScriptColor} />
            <h4>Front-end</h4>
            <img src={IconBigLine} />
            <div className="portfolio-skills-icon">
              <img src={IconHTML} />
              <p>HTML</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconCSS} />
              <p>CSS</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconJavaScript} />
              <p>JavaScript</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconTypeScript} />
              <p>TypeScript</p>
            </div>
            <div className="portfolio-skills-icon">
              <img src={IconReact} />
              <p>React.js</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

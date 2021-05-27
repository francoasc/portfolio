import React from "react";
import { StyledAbout, StyledSkillIcon } from "../../styles/about-styles";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import CV from "../../assets/FRANCO-HERRERA-ASCARATE-CV.pdf";
import { skills } from "../../utilities/icons";
import Fade from "react-reveal/Fade";

export const openLinkHandler = (url) => window.open(url);

function About() {
  return (
    <StyledAbout>
      <div className="container" name="aboutSection">
        <div className="about_me">
          <Fade left>
            <h4 className="title">More about me</h4>
          </Fade>
          <Fade left>
            <p className="description">
              I'm a full stack web developer and mobile developer currently
              based on Argentina. Since child my curiosity for the internet woke
              and I wanted to know how everything was built
            </p>
          </Fade>
          <Fade left>
            <p className="description_2">
              I love programming and see how from nowhere you can build
              fascinating things like this web for example 😉
            </p>
          </Fade>
          <Fade left>
            <p className="cv">
              Take a look at my{" "}
              <a href={CV} target="_blank" rel="noreferrer">
                <span>CV</span>
                <span id="logo_cv"> 📃</span>
              </a>
            </p>
          </Fade>

          <div className="skills_container">
            <Fade bottom>
              <h4>SKILLS</h4>
            </Fade>
            <div className="skills">
              {skills?.map(({ icon, name, theme }) => (
                <Fade bottom key={theme}>
                  <StyledSkillIcon theme={theme}>
                    {icon}
                    <div className="skill_name">{name}</div>
                  </StyledSkillIcon>
                </Fade>
              ))}
            </div>
          </div>
        </div>
        <div className="social_links">
          <div>
            <Fade top>
              <img id="social_img" alt="coding_image" />
            </Fade>
          </div>
          <Fade bottom duration={2000}>
            <h3>Find me in:</h3>

            <p
              id="github-p"
              onClick={() => openLinkHandler("https://github.com/francoasc")}
            >
              <span>
                <AiFillGithub size="1.3rem" />
                GitHub: @francoasc
              </span>
            </p>
            <p
              onClick={() =>
                openLinkHandler("https://www.linkedin.com/in/fhascarate/")
              }
            >
              <span>
                <AiOutlineLinkedin size="1.3rem" />
                LinkedIn: @fhascarate
              </span>
            </p>
          </Fade>
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;

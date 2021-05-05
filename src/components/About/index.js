import React from "react";
import { StyledAbout, StyledSkillIcon } from "../../styles/about-styles";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import CV from "../../assets/FRANCO-HERRERA-ASCARATE-CV.pdf";
import { skills } from "../../utilities/icons";

export const openLinkHandler = (url) => window.open(url);

function About() {
  return (
    <StyledAbout>
      <div className="container">
        <div className="about_me">
          <h4 className="title">More about me</h4>
          <p className="description">
            I'm a full stack web developer and mobile developer currently based
            on Argentina. Since child my curiosity for the internet woke and I
            wanted to know how everything was built
          </p>
          <p className="description_2">
            I love programming and see how from nowhere you can build
            fascinating things like this web for example 😉
          </p>
          <p className="cv">
            Take a look at my{" "}
            <a href={CV} target="_blank" rel="noreferrer">
              <span>CV</span>
              <span id="logo_cv"> 📃</span>
            </a>
          </p>

          <div className="skills_container">
            <h4>SKILLS</h4>
            <div className="skills">
              {skills?.map((skill) => (
                <StyledSkillIcon key={skill.name}>
                  {skill.icon}
                  <div className="skill_name">{skill.name}</div>
                </StyledSkillIcon>
              ))}
            </div>
          </div>
        </div>
        <div className="social_links">
          <div>
            <img id="social_img" alt="coding_image" />
          </div>
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
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;

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
          <h4 data-aos="fade-right" className="title">
            More about me
          </h4>
          <p data-aos="fade-right" className="description">
            I'm a full stack web developer and mobile developer currently based
            on Argentina. Since child my curiosity for the internet woke and I
            wanted to know how everything was built
          </p>
          <p data-aos="fade-right" className="description_2">
            I love programming and see how from nowhere you can build
            fascinating things like this web for example 😉
          </p>
          <p data-aos="fade-right" className="cv">
            Take a look at my{" "}
            <a href={CV} target="_blank" rel="noreferrer">
              <span>CV</span>
              <span id="logo_cv"> 📃</span>
            </a>
          </p>

          <div className="skills_container">
            <h4 data-aos="fade-up">SKILLS</h4>
            <div className="skills">
              {skills?.map((skill) => (
                <StyledSkillIcon key={skill.name} data-aos="fade-up">
                  {skill.icon}
                  <div className="skill_name">{skill.name}</div>
                </StyledSkillIcon>
              ))}
            </div>
          </div>
        </div>
        <div className="social_links">
          <div>
            <img data-aos="fade-down" id="social_img" alt="coding_image" />
          </div>
          <h3 data-aos="fade-up" data-aos-duration="2000">
            Find me in:
          </h3>
          <p
            id="github-p"
            onClick={() => openLinkHandler("https://github.com/francoasc")}
            data-aos="fade-up"
            data-aos-duration="2000"
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
            data-aos="fade-up"
            data-aos-duration="2000"
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

import React from "react";
import {
  StyledProjectCard,
  StyledProjects,
} from "../../styles/projects-styles";
import { projects } from "../../utilities/projects";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { openLinkHandler } from "../About/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <StyledProjects>
      <div className="container">
        <Zoom duration={1500}>
          <h1>Take a look at my projects</h1>
        </Zoom>
        <ul className="projects_container">
          {projects.map((project, i) => (
            <Fade delay={300} key={i}>
              <StyledProjectCard rowReverse={i} right={i}>
                <div className="project_content">
                  <Slide bottom>
                    <h3 className="project_title">{project.name}</h3>
                  </Slide>
                  <Slide bottom>
                    <div className="project_description">
                      <p>{project.description}</p>
                    </div>
                  </Slide>
                  <Slide left>
                    <div className="project_links">
                      <HiExternalLink
                        size="1.5rem"
                        id={`${project.link ? "icon" : "no-link"}`}
                        onClick={
                          project.link
                            ? () => openLinkHandler(project.link)
                            : null
                        }
                      />
                      <AiFillGithub
                        size="1.5rem"
                        id={`${project.repository ? "icon" : "no-link"}`}
                        onClick={
                          project.repository
                            ? () => openLinkHandler(project.repository)
                            : null
                        }
                      />
                    </div>
                  </Slide>
                </div>
                <div className="project_image">
                  <LazyLoadImage alt="alt_image" src={project.image} />
                </div>
              </StyledProjectCard>
            </Fade>
          ))}
        </ul>
      </div>
    </StyledProjects>
  );
}

export default Projects;

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

function Projects() {
  return (
    <StyledProjects>
      <div className="container">
        <h1 data-aos="zoom-in" data-aos-duration="1500">
          Take a look at my projects
        </h1>
        <ul className="projects_container">
          {projects.map((project, i) => (
            <StyledProjectCard
              key={i}
              rowReverse={i}
              right={i}
              data-aos={`${i % 2 === 0 ? "flip-left" : "flip-right"}`}
            >
              <div className="project_content">
                <h3 className="project_title">{project.name}</h3>
                <div className="project_description">
                  <p>{project.description}</p>
                </div>
                <div className="project_links">
                  <HiExternalLink
                    size="1.5rem"
                    id={`${project.link ? "icon" : "no-link"}`}
                    onClick={
                      project.link ? () => openLinkHandler(project.link) : null
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
              </div>
              <div className="project_image">
                <LazyLoadImage alt="alt_image" src={project.image} />
              </div>
            </StyledProjectCard>
          ))}
        </ul>
      </div>
    </StyledProjects>
  );
}

export default Projects;

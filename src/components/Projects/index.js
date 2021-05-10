import React from "react";
import {
  StyledProjectCard,
  StyledProjects,
} from "../../styles/projects-styles";
import { projects } from "../../utilities/projects";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { openLinkHandler } from "../About/index";

function Projects() {
  return (
    <StyledProjects>
      <div className="container">
        <h1>Take a look at my projects</h1>
        <ul className="projects_container">
          {projects?.map((project, i) => (
            <StyledProjectCard key={i} rowReverse={i} right={i}>
              <div className="project_content">
                <h3 className="project_title">{project.name}</h3>
                <div className="project_description">{project.description}</div>
                <div className="project_tech_container">
                  <ul className="project_tech_list">
                    <span>Stack:</span>

                    {project.techList.map((tech) => (
                      <span
                        key={tech}
                        style={{ listStyle: "none" }}
                        className="tech"
                      >
                        {tech}{" "}
                      </span>
                    ))}
                  </ul>
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
                        ? () => openLinkHandler(project.link)
                        : null
                    }
                  />
                </div>
              </div>
              <div className="project_image">
                <img alt="alt_image" src={project.image} />
              </div>
            </StyledProjectCard>
          ))}
        </ul>
      </div>
    </StyledProjects>
  );
}

export default Projects;

import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import projectsData, { Project } from "../utils/projectsData";
import { Trans, useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "../styles/Projects.css";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <section id="projects" className="projects-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="projects-title text-center">
              <h2>{t("projects.title")}</h2>
              <p>
                <Trans
                  i18nKey="projects.description"
                  components={{
                    1: <strong />,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="projects-content">
          <div className="row justify-content-center">
            {projectsData.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="project-box">
                  <div className="single-project">
                    <img
                      src={project.medias[0]}
                      alt={project.title}
                      className="img-fluid"
                      onClick={() => handleProjectClick(project)}
                    />
                  </div>
                  <div className="short-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="project-links">
                      {project.repoFrontend && project.repoBackend ? (
                        <>
                          <a
                            href={project.repoFrontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <FontAwesomeIcon icon={faGithub} /> Frontend
                            Repository
                          </a>
                          <a
                            href={project.repoBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <FontAwesomeIcon icon={faGithub} /> Backend
                            Repository
                          </a>
                        </>
                      ) : (
                        project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                          </a>
                        )
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FontAwesomeIcon icon={faLink} /> View Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          projectTitle={selectedProject.title}
          mediaUrls={selectedProject.medias}
          onClose={handleModalClose}
          show={showModal}
        />
      )}
    </section>
  );
};

export default Projects;

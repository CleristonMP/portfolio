import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import projectsData, { Project } from "../utils/projectsData";
import { useTranslation } from "react-i18next";
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
              <p>{t("projects.description")}</p>
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
                      src={project.images[0]}
                      alt={project.title}
                      className="img-fluid"
                      onClick={() => handleProjectClick(project)}
                    />
                  </div>
                  <div className="short-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
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
          imgsUrls={selectedProject.images}
          onClose={handleModalClose}
          show={showModal}
        />
      )}
    </section>
  );
};

export default Projects;

import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import projectsData, { Project } from "../utils/projectsData";
import "../styles/Projects.css";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

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
              <h2>Bem-vindo ao Meu Portfólio</h2>
              <p>Veja meus principais projetos abaixo:</p>
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
                      className="img-fluid w-100"
                      onClick={() => handleProjectClick(project)}
                    />
                  </div>
                  <div className="short-info">
                    <h4>{project.title}</h4>
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

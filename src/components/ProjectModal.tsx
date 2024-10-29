import React from "react";
import { Modal, Carousel } from "react-bootstrap";
import CustomCarouselPrevBtn from "./CustomCarouselPrevBtn";
import CustomCarouselNextBtn from "./CustomCarouselNextBtn";
import "../styles/ProjectModal.css";

type ProjectModalProps = {
  projectTitle: string;
  imgsUrls: string[];
  onClose: () => void;
  show: boolean;
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  projectTitle,
  imgsUrls,
  onClose,
  show,
}) => {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      size="xl"
      className="project-modal"
    >
      <div className="modal-close-button">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        />
      </div>
      <Modal.Body className="p-0">
        <Carousel
          interval={null}
          prevIcon={<CustomCarouselPrevBtn />}
          nextIcon={<CustomCarouselNextBtn />}
        >
          {imgsUrls.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                src={img}
                alt={`${projectTitle} - Slide ${index + 1}`}
                className="d-block w-100 h-auto"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;

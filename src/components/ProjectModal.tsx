import React from "react";
import { Modal, Carousel } from "react-bootstrap";
import CustomCarouselPrevBtn from "./CustomCarouselPrevBtn";
import CustomCarouselNextBtn from "./CustomCarouselNextBtn";
import { generateCaptionFromFileName } from "../utils/functions";
import "../styles/ProjectModal.css";

type ProjectModalProps = {
  projectTitle: string;
  mediaUrls: string[];
  onClose: () => void;
  show: boolean;
  autoPlay?: boolean;
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  projectTitle,
  mediaUrls,
  onClose,
  show,
  autoPlay = false,
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
          {mediaUrls.map((media, index) => {
            const isVideo = media.endsWith(".mp4");

            return (
              <Carousel.Item key={media}>
                {isVideo ? (
                  <video
                    controls
                    className="d-block h-auto carousel-video"
                    title={`${projectTitle} - Video ${index + 1}`}
                    autoPlay={autoPlay}
                    controlsList="nodownload noremoteplayback"
                  >
                    <source src={media} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                ) : (
                  <>
                    <img
                      src={media}
                      alt={`${projectTitle} - Slide ${index + 1}`}
                      className="d-block h-auto"
                    />
                    <Carousel.Caption className="project-caption">
                      <p>{generateCaptionFromFileName(media)}</p>
                    </Carousel.Caption>
                  </>
                )}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;

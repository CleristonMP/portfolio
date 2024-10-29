import React from "react";
import { Modal, ModalBody } from "react-bootstrap";

interface CertificateModalProps {
  show: boolean;
  onClose: () => void;
  certificateImage: string;
  certificateAlt: string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  show,
  onClose,
  certificateImage,
  certificateAlt,
}) => {
  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <ModalBody style={{ textAlign: "center" }}>
        <img
          src={certificateImage}
          alt={certificateAlt}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </ModalBody>
    </Modal>
  );
};

export default CertificateModal;

import React from "react";
import { Modal } from "react-bootstrap";

type ContactFormModalProps = {
  show: boolean;
  onClose: () => void;
};

const ContactFormModal: React.FC<ContactFormModalProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Contact Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc2vwbCABnMrjlcP59OOMIZtHVs-u778Ju_G-KHNVY8h7P6gg/viewform?usp=pp_url"
          width="100%"
          height={600}
          style={{ border: "none" }}
          title="Contact Form"
        ></iframe>
      </Modal.Body>
    </Modal>
  );
};

export default ContactFormModal;

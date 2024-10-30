import React, { useState } from "react";
import certificatesData, { Certificate } from "../utils/certificatesData";
import CertificateModal from "../components/CertificateModal";
import "../styles/Courses.css";

const Courses: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(
    null
  );

  const handleShowModal = (cert: Certificate) => {
    setSelectedCertificate(cert);
    setShowModal(true);
  };

  return (
    <section id="courses" className="courses-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="courses-intro">
              <h2 className="courses-title">Cursos realizados</h2>
              <p>
                Abaixo estão listados alguns dos principais cursos que já
                concluí.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {certificatesData.map((cert: Certificate) => (
            <div key={cert.id} className="col-lg-4 col-md-6">
              <div className="course-item">
                <div className="cert-img" onClick={() => handleShowModal(cert)}>
                  <img src={cert.certSrc} alt={cert.caption} />
                </div>
                <h4>{cert.caption}</h4>
                <p className="completion-date">
                  Data de conclusão: {cert.completionDate}
                </p>
                <p className="course-load">
                  Carga horária: {cert.courseLoad} horas
                </p>
                <details>
                  <summary>Veja mais</summary>
                  <dl>
                    {cert.topics.map((topic, index) => (
                      <div key={index}>
                        <dt>{topic.subject}</dt>
                        <dd>{topic.description}</dd>
                      </div>
                    ))}
                  </dl>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CertificateModal
        show={showModal}
        onClose={() => setShowModal(false)}
        certificateImage={selectedCertificate?.certSrc || ""}
        certificateAlt={selectedCertificate?.caption || ""}
      />
    </section>
  );
};

export default Courses;

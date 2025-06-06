import React, { useState } from "react";
import certificatesData, { Certificate } from "../utils/certificatesData";
import CertificateModal from "../components/CertificateModal";
import { useTranslation } from "react-i18next";
import "../styles/Courses.css";

const Courses: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const { t } = useTranslation();

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
              <h2 className="courses-title">{t("courses.title")}</h2>
              <p>{t("courses.sectionDescription")}</p>
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
                  {t("courses.completionDate", { date: cert.completionDate })}
                </p>
                <p className="course-load">
                  {t("courses.courseLoad", { hours: cert.courseLoad })}
                </p>
                <details>
                  <summary>{t("courses.seeMore")}</summary>
                  <dl>
                    {cert.topics.map((topic, index) => (
                      <div key={index}>
                        <dt>
                          {t("courses.topicSubject", {
                            subject: topic.subject,
                          })}
                        </dt>
                        <dd>
                          {t("courses.topicDescription", {
                            description: topic.description,
                          })}
                        </dd>
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

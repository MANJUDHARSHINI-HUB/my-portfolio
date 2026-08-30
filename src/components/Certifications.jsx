import { useState } from "react";
import { certifications } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";
import { CertificateIcon, ExternalLinkIcon, FileTextIcon } from "./Icons.jsx";

function CertCard({ cert }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = cert.image && !imageFailed;

  return (
    <div className="cert-card">
      <div className="cert-card__thumb">
        {showImage ? (
          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <CertificateIcon width={22} height={22} />
        )}
      </div>

      <div className="cert-card__body">
        <h3 className="cert-card__title">{cert.title}</h3>
        <p className="cert-card__issuer">{cert.issuer}</p>

        {(cert.verifyUrl || cert.pdf) && (
          <div className="cert-card__actions">
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card__link"
              >
                <ExternalLinkIcon width={14} height={14} />
                View Certificate
              </a>
            )}
            {cert.pdf && (
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card__link"
              >
                <FileTextIcon width={14} height={14} />
                PDF
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title="Courses and certifications."
          description="Verification links and certificate files are added as they become available."
        />

        <div className="cert__grid">
          {certifications.map((cert, i) => (
            <RevealOnScroll
              key={`${cert.issuer}-${cert.title}`}
              delay={(i % 3) * 60}
              direction="up"
            >
              <CertCard cert={cert} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

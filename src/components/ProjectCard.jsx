import { useRef, useState } from "react";
import { GitHubIcon, ExternalLinkIcon, GitBranchIcon } from "./Icons.jsx";

export default function ProjectCard({ project }) {
  const { name, description, tech, image, github, demo } = project;
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = image && !imageFailed;

  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <article
      className="project-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="project-card__media">
        {showImage ? (
          <img
            src={image}
            alt={`Screenshot of the ${name} project`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div
            className="project-card__placeholder"
            role="img"
            aria-label={`${name} — screenshot coming soon`}
          >
            <GitBranchIcon width={26} height={26} />
            <span>Screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{name}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__tags">
          {tech.map((t) => (
            <span key={t} className="tag tag--sm">
              {t}
            </span>
          ))}
        </div>

        {(github || demo) && (
          <div className="project-card__actions">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--sm btn--outline"
              >
                <GitHubIcon width={16} height={16} />
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--sm btn--outline"
              >
                <ExternalLinkIcon width={16} height={16} />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

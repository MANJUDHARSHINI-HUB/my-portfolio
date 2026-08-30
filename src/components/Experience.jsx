import { experience, education } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Experience &amp; Education" />

        <div className="experience__grid">
          <RevealOnScroll className="experience__column" delay={0} direction="left">
            <h3 className="experience__column-title">Experience</h3>
            <div className="experience__list">
              {experience.map((item) => (
                <div className="experience-card" key={item.role}>
                  <div className="experience-card__marker" aria-hidden="true" />
                  <div>
                    <h4 className="experience-card__role">{item.role}</h4>
                    <p className="experience-card__org">{item.organization}</p>
                    {item.duration && (
                      <p className="experience-card__duration">{item.duration}</p>
                    )}
                    {item.highlights.length > 0 && (
                      <ul className="experience-card__highlights">
                        {item.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="experience__column" delay={100} direction="right">
            <h3 className="experience__column-title">Education</h3>
            <div className="experience__list">
              {education.map((item) => (
                <div className="experience-card" key={item.degree}>
                  <div className="experience-card__marker" aria-hidden="true" />
                  <div>
                    <h4 className="experience-card__role">{item.degree}</h4>
                    <p className="experience-card__org">{item.institution}</p>
                    <p className="experience-card__duration">
                      {item.duration ?? item.status}
                    </p>
                    {item.details.length > 0 && (
                      <ul className="experience-card__highlights">
                        {item.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

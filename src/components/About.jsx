import { about } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="A student turning curiosity into working software."
        />

        <div className="about__grid">
          <RevealOnScroll className="about__text" delay={60} direction="left">
            {about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </RevealOnScroll>

          <RevealOnScroll className="about__panel" delay={140} direction="right">
            <p className="about__panel-label">Currently focused on</p>
            <ul className="about__focus-list">
              {about.focusAreas.map((area) => (
                <li key={area}>
                  <span className="about__focus-dot" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

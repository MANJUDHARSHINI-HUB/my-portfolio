import { skillGroups } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I build with."
          description="Grouped by area — no invented proficiency scores, just the tools I actively use and learn."
        />

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <RevealOnScroll
              key={group.category}
              className="skills__group"
              delay={i * 70}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <h3 className="skills__group-title">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    <span className="tag__dot" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

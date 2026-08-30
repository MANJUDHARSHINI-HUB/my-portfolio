import { projects } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built while learning."
          description="Practical projects that demonstrate hands-on experimentation across ML, computer vision, and generative AI."
        />

        <div className="projects__grid">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.name} delay={(i % 3) * 90} direction="scale">
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

import RevealOnScroll from "./RevealOnScroll.jsx";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <RevealOnScroll className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">
        <span className="eyebrow__dot" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </RevealOnScroll>
  );
}

import { profile } from "../data.js";
import { ArrowRightIcon, BracketsIcon, ChipIcon, OrbitIcon, SparkleIcon } from "./Icons.jsx";
import AvatarIllustration from "./AvatarIllustration.jsx";
import useParallax from "./useParallax.js";

export default function Hero() {
  const { ref, pos } = useParallax();

  // Different multipliers per layer create a depth effect as the
  // mouse moves — closer layers (icons) move more than far ones (glow).
  const layerStyle = (strength) => ({
    transform: `translate3d(${pos.x * strength}px, ${pos.y * strength}px, 0)`,
  });

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero__ambient" style={layerStyle(6)} aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow reveal-fade">
            <span className="eyebrow__dot" aria-hidden="true" />
            Portfolio
          </p>

          <h1 className="hero__name reveal-fade" style={{ transitionDelay: "60ms" }}>
            {profile.name}
          </h1>

          <p className="hero__roles reveal-fade" style={{ transitionDelay: "120ms" }}>
            {profile.roles.map((role, i) => (
              <span key={role}>
                {role}
                {i < profile.roles.length - 1 && (
                  <span className="hero__roles-dot" aria-hidden="true">/</span>
                )}
              </span>
            ))}
          </p>

          <h2 className="hero__headline reveal-fade" style={{ transitionDelay: "180ms" }}>
            {profile.headline}
          </h2>

          <p className="hero__subheadline reveal-fade" style={{ transitionDelay: "240ms" }}>
            {profile.subheadline}
          </p>

          <div className="hero__actions reveal-fade" style={{ transitionDelay: "300ms" }}>
            <a href="#projects" className="btn btn--primary">
              View Projects
              <ArrowRightIcon width={16} height={16} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__figure reveal-fade" style={{ transitionDelay: "160ms" }}>
          <div className="hero__figure-parallax" style={layerStyle(10)}>
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className="hero__photo"
              />
            ) : (
              <AvatarIllustration className="hero__avatar" />
            )}

            {/* Floating decorative icons — each drifts at its own rate.
                Outer div carries the mouse-parallax offset (inline style);
                inner span carries the independent CSS bob animation, since
                a single element can't take both an inline transform and a
                conflicting keyframe transform at once. */}
            <div className="hero__float hero__float--a" style={layerStyle(22)}>
              <span className="hero__float-inner">
                <BracketsIcon width={20} height={20} />
              </span>
            </div>
            <div className="hero__float hero__float--b" style={layerStyle(16)}>
              <span className="hero__float-inner">
                <ChipIcon width={22} height={22} />
              </span>
            </div>
            <div className="hero__float hero__float--c" style={layerStyle(28)}>
              <span className="hero__float-inner">
                <OrbitIcon width={26} height={26} />
              </span>
            </div>
            <div className="hero__float hero__float--d" style={layerStyle(14)}>
              <span className="hero__float-inner">
                <SparkleIcon width={16} height={16} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}

import { marqueeSkills } from "../data.js";
import { SparkleIcon } from "./Icons.jsx";

/**
 * A continuously scrolling strip of technology names. The list is
 * duplicated once so the CSS animation can loop seamlessly.
 */
export default function Marquee() {
  const items = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
            <SparkleIcon width={12} height={12} className="marquee__spark" />
          </span>
        ))}
      </div>
    </div>
  );
}

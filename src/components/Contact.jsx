import { contact } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  LinkedInIcon,
  GitHubIcon,
  LeetCodeIcon,
} from "./Icons.jsx";

const socialIcons = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  LeetCode: LeetCodeIcon,
};

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Reach out directly, or find me on the platforms below."
        />

        <div className="contact__grid">
          <RevealOnScroll className="contact__card" delay={0}>
            <span className="contact__icon">
              <PhoneIcon width={20} height={20} />
            </span>
            <div>
              <p className="contact__label">Phone</p>
              <a href={contact.phone.href} className="contact__value">
                {contact.phone.display}
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="contact__card" delay={60}>
            <span className="contact__icon">
              <MailIcon width={20} height={20} />
            </span>
            <div>
              <p className="contact__label">Email</p>
              <a href={contact.email.href} className="contact__value">
                {contact.email.display}
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="contact__card" delay={120}>
            <span className="contact__icon">
              <MapPinIcon width={20} height={20} />
            </span>
            <div>
              <p className="contact__label">Location</p>
              <p className="contact__value contact__value--static">
                {contact.location}
              </p>
            </div>
          </RevealOnScroll>

          {contact.socials.map((social, i) => {
            const Icon = socialIcons[social.label];
            return (
              <RevealOnScroll
                className="contact__card"
                delay={180 + i * 60}
                key={social.label}
              >
                <span className="contact__icon">
                  {Icon && <Icon width={20} height={20} />}
                </span>
                <div>
                  <p className="contact__label">{social.label}</p>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__value"
                  >
                    Visit profile
                  </a>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

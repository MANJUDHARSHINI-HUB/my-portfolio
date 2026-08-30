import { profile, contact } from "../data.js";
import { LinkedInIcon, GitHubIcon, LeetCodeIcon, MailIcon } from "./Icons.jsx";

const socialIcons = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  LeetCode: LeetCodeIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__tagline">{profile.roles.join(" · ")}</p>
        </div>

        <div className="footer__socials">
          {contact.socials.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="footer__icon-link"
              >
                {Icon && <Icon width={18} height={18} />}
              </a>
            );
          })}
          <a href={contact.email.href} aria-label="Email" className="footer__icon-link">
            <MailIcon width={18} height={18} />
          </a>
        </div>

        <p className="footer__copyright">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

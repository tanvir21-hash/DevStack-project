import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

const linkGroups = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const socials = [
  { label: "GitHub", icon: <FaGithub />, href: "https://github.com" },
  { label: "Twitter", icon: <FaTwitter />, href: "https://twitter.com" },
  { label: "LinkedIn", icon: <FaLinkedin />, href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          <div>
            <img src={Logo} alt="Dev Stack" className="h-8 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
              A simple way to compare popular developer tools and plan the
              stack for your next side project or startup.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-ink transition hover:text-accent"
                >
                  {social.icon}
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-body transition hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

    
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-accent">
              Privacy
            </a>
            <a href="#" className="transition hover:text-accent">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Link from "next/link";
import { useState } from "react";
import { Linkedin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../lib/i18n";

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
}

interface FooterProps {
  socialLinks?: SocialLink[];
  navLinks?: NavLink[];
  contactEmail?: string;
}

const defaultSocialLinks = [
  { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
];

const defaultNavLinks = [
  // { label: "footer.links.about", href: "/about" },
  { label: "footer.links.privacy", href: "/privacy" },
  { label: "footer.links.terms", href: "/terms" },
  // { label: "footer.links.contact", href: "/contact" },
];

export default function Footer({
  socialLinks = defaultSocialLinks,
  navLinks = defaultNavLinks,
  contactEmail = "info@payzln.com",
}: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setIsSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <Link href="/">
              <div className="logo-wrapper">
                <svg
                  className="logo-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 666 244"
                  width="160"
                  height="60"
                >
                  <defs>
                    <style>
                      {`.cls-1 { fill: #fff; }
                      .cls-2 { fill: #ed2024; fill-rule: evenodd; }
                      .cls-3 { display: none; }`}
                    </style>
                  </defs>
                  <g>
                    <g id="Layer_1">
                      <rect className="cls-3" width="666" height="244" />
                      <g>
                        <path
                          className="cls-2"
                          d="M146.92,130.88h21.01c26.58,0,44.94-17.88,44.94-43.51,0-21.05-13.92-34.49-35.76-34.49h-43.2l-6.34,40.07h-21.01c-26.58,0-44.94,17.88-44.94,43.51,0,21.05,13.92,34.49,35.76,34.49h43.2l6.34-40.07ZM124.07,115.09l-5.33,33.7h-14.87c-10.76,0-16.61-5.38-16.61-14.87,0-12.03,7.75-18.83,21.2-18.83h15.61ZM150.42,108.72h15.61c13.45,0,21.2-6.8,21.2-18.83,0-9.49-5.85-14.87-16.61-14.87h-14.87l-5.33,33.7Z"
                        />
                        <path
                          className="cls-1"
                          d="M271.22,127.31h-20.89v32.69h-16.6v-94.83h37.49c19.07,0,31.39,12.45,31.39,31s-12.45,31.13-31.39,31.13ZM267.97,79.96h-17.64v32.56h17.38c11.42,0,17.51-6.1,17.51-16.47s-6.23-16.09-17.25-16.09ZM330.78,161.68c-13.62,0-21.92-7.91-21.92-19.98s8.56-19.2,23.74-20.37l19.2-1.43v-1.43c0-8.69-5.19-12.19-13.23-12.19-9.34,0-14.53,3.89-14.53,10.64h-13.49c0-13.88,11.42-22.96,28.8-22.96s27.89,9.34,27.89,27.11v38.92h-13.88l-1.17-9.47c-2.72,6.62-11.42,11.16-21.4,11.16ZM335.97,149.75c9.73,0,15.96-5.84,15.96-15.7v-3.37l-13.36,1.04c-9.86.91-13.62,4.15-13.62,9.34,0,5.84,3.89,8.69,11.03,8.69ZM375.43,189.7v-13.23h9.47c6.23,0,10.12-1.43,12.84-8.95l1.82-4.8-25.81-66.81h16.73l16.47,46.7,17.38-46.7h16.34l-31.39,78.35c-4.8,11.93-11.55,16.86-22.05,16.86-4.41,0-8.3-.52-11.8-1.43ZM498.05,160h-51.76v-12.97l31.91-37.88h-31.91v-13.23h51.76v13.1l-32.43,37.75h32.43v13.23ZM526.93,160h-15.7V63.49h15.7v96.51ZM559.36,160h-15.83v-64.08h14.66l1.3,8.3c4.02-6.49,11.8-10.25,20.5-10.25,16.09,0,24.39,9.99,24.39,26.59v39.44h-15.83v-35.67c0-10.77-5.32-15.96-13.49-15.96-9.73,0-15.7,6.75-15.7,17.12v34.51Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
            <p className="footer-description">{t("footer.description")}</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-nav">
            <h3 className="footer-heading">{t("footer.quickLinks")}</h3>
            <ul className="footer-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{t(link.label)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">{t("footer.newsletter.title")}</h3>
            <p className="contact-description">
              {t("footer.newsletter.description")}
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.newsletter.placeholder")}
                  required
                  className="email-input"
                />
                <button type="submit" className="submit-button">
                  <Send size={20} />
                </button>
              </div>
              {isSubmitted && (
                <p className="success-message">
                  {t("footer.newsletter.success")}
                </p>
              )}
            </form>
            <p className="contact-email">
              {t("footer.newsletter.contact")}{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} PayzIn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

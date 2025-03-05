"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  CheckCircle,
  RefreshCw,
  Coins,
  BarChart2,
  Zap,
  CreditCard,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import "../lib/i18n";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const features = [
    {
      icon: <Coins size={24} />,
      title: "features.items.money",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "features.items.insights",
    },
    {
      icon: <Zap size={24} />,
      title: "features.items.integration",
    },
    {
      icon: <CreditCard size={24} />,
      title: "features.items.flexibility",
    },
  ];

  useEffect(() => {
    const animateFloatingElements = () => {
      const elements = document.querySelectorAll(".floating-element");
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const randomX = Math.sin(Date.now() / (1000 + index * 500)) * 15;
        const randomY = Math.cos(Date.now() / (1000 + index * 500)) * 15;

        element.style.transform = `translate(${randomX}px, ${randomY}px)`;
      });

      requestAnimationFrame(animateFloatingElements);
    };

    animateFloatingElements();
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="text-gradient">{t("hero.title.part1")}</span>{" "}
              {t("hero.title.part2")}
              <br />
              {t("hero.title.part3")}{" "}
              <span className="text-gradient">{t("hero.title.part4")}</span>
            </h1>
            <p className="hero-description">{t("hero.description")}</p>
            <div className="hero-cta">
              <Link href="#contact" className="button-primary">
                {t("hero.cta")}
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <div className="phone-mockup">
              <div className="notification floating-element">
                <div className="notification-content">
                  <h4>{t("hero.notification.greeting")}</h4>
                  <p>{t("hero.notification.message")}</p>
                  <button className="buy-now-button">
                    {t("hero.notification.cta")}
                  </button>
                </div>
              </div>

              <div className="woman-image">
                <Image
                  src="/images/hero-woman.svg"
                  alt="Woman using Payzln app"
                  width={1200}
                  height={1200}
                  className="image"
                  priority
                />
              </div>

              <div className="logo-badge floating-element">
                <div className="logo-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM28.5 15C28.5 19.142 25.142 22.5 21 22.5H15V29H10V10H21C25.142 10 28.5 13.358 28.5 17.5V15Z"
                      fill="#F03F3F"
                    />
                  </svg>
                </div>
                <div className="badge-text">
                  <span>{t("hero.badge")}</span>
                </div>
              </div>

              <div className="check-badge floating-element">
                <CheckCircle size={24} color="#F03F3F" />
              </div>

              <div className="refresh-badge floating-element">
                <RefreshCw size={24} color="#F03F3F" />
              </div>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{t(feature.title)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

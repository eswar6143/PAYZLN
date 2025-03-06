"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../lib/i18n";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const features = [
    {
      icon: (
        <Image
          src="/images/coins.svg"
          alt="Money icon"
          width={55}
          height={38}
        />
      ),
      title: "features.items.money",
    },
    {
      icon: (
        <Image
          src="/images/bar-chart.svg"
          alt="Insights icon"
          width={45}
          height={47}
        />
      ),
      title: "features.items.insights",
    },
    {
      icon: (
        <Image
          src="/images/zap.svg"
          alt="Integration icon"
          width={40}
          height={39}
        />
      ),
      title: "features.items.integration",
    },
    {
      icon: (
        <Image
          src="/images/credit-card.svg"
          alt="Flexibility icon"
          width={40}
          height={40}
        />
      ),
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
    <section className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="text-gradient">{t("hero.title.part1")}</span>{" "}
              <span className="text-gradient">{t("hero.title.part2")}</span>
              <br />
              <span className="text-gradient">
                {t("hero.title.part3")}
              </span>{" "}
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

              <div className="bell-badge floating-element">
                <Image
                  src="/images/bell-circle.svg"
                  alt=""
                  width={50}
                  height={50}
                  priority
                />
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
                  <Image
                    src="/images/payzln.svg"
                    alt="Check icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="badge-text">
                  <span>{t("hero.badge")}</span>
                </div>
              </div>

              <div className="check-badge floating-element">
                <Image
                  src="/images/check-circle.svg"
                  alt="Check icon"
                  width={50}
                  height={50}
                />
              </div>

              <div className="refresh-badge floating-element">
                <Image
                  src="/images/refresh-cw.svg"
                  alt="Refresh icon"
                  width={50}
                  height={50}
                />
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

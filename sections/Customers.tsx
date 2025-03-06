"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../lib/i18n";

interface Feature {
  icon: string;
  translationKey: string;
}

export default function Customers() {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: "/images/secure-card.svg",
      translationKey: "customers.features.money",
    },
    {
      icon: "/images/timer.svg",
      translationKey: "customers.features.links",
    },
    {
      icon: "/images/multi-options.svg",
      translationKey: "customers.features.options",
    },
  ];

  return (
    <section className="customers">
      <div className="container">
        <div className="customers-content">
          <div className="text-content">
            <h2 className="section-title">{t("customers.title")}</h2>
            <p className="section-description">{t("customers.description")}</p>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-card ${
                    index === 2 ? "feature-full" : ""
                  }`}
                >
                  <div className="feature-icon">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={66}
                      height={66}
                      priority
                    />
                  </div>
                  <h3 className="feature-title">{t(feature.translationKey)}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="image-content">
            <div className="image-wrapper">
              <Image
                src="/images/sitting-woman.png"
                alt="Happy customer using payment app"
                width={600}
                height={600}
                className="customer-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

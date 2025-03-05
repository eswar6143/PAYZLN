"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../lib/i18n";

interface Feature {
  translationKey: string;
}

export default function SuiteSpot() {
  const { t } = useTranslation();

  const features: Feature[] = [
    { translationKey: "suiteSpot.features.pos" },
    { translationKey: "suiteSpot.features.app" },
    { translationKey: "suiteSpot.features.gateway" },
    { translationKey: "suiteSpot.features.international" },
    { translationKey: "suiteSpot.features.analytics" },
  ];

  return (
    <section className="suite-spot">
      <div className="container">
        <div className="suite-content">
          <div className="text-content">
            <h2 className="section-title">{t("suiteSpot.title")}</h2>
            <p className="section-description">{t("suiteSpot.description")}</p>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <CheckCircle className="feature-icon" size={24} />
                  <span className="feature-text">
                    {t(feature.translationKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="image-content">
            <div className="phone-mockup">
              <Image
                src="/images/dashboard.svg"
                alt="PayZln Dashboard"
                width={400}
                height={800}
                className="dashboard-image"
              />
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { CreditCard, Link as LinkIcon, List } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../lib/i18n";

interface Feature {
  icon: React.ReactNode;
  translationKey: string;
}

export default function Customers() {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: <CreditCard className="text-primary" size={24} />,
      translationKey: "customers.features.money",
    },
    {
      icon: <LinkIcon className="text-primary" size={24} />,
      translationKey: "customers.features.links",
    },
    {
      icon: <List className="text-primary" size={24} />,
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
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{t(feature.translationKey)}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="image-content">
            <div className="image-wrapper">
              <Image
                src="/images/sitting-woman.svg"
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

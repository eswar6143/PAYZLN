"use client";

import { useTranslation } from "react-i18next";
import "../lib/i18n";
import Image from "next/image";

interface PaymentOption {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export default function PaymentOptions() {
  const { t } = useTranslation();

  const options: PaymentOption[] = [
    {
      icon: "/images/credit-card-2.svg",
      titleKey: "paymentOptions.items.methods.title",
      descriptionKey: "paymentOptions.items.methods.description",
    },
    {
      icon: "/images/settings.svg",
      titleKey: "paymentOptions.items.custom.title",
      descriptionKey: "paymentOptions.items.custom.description",
    },
    {
      icon: "/images/percent.svg",
      titleKey: "paymentOptions.items.offers.title",
      descriptionKey: "paymentOptions.items.offers.description",
    },
    {
      icon: "/images/global.svg",
      titleKey: "paymentOptions.items.international.title",
      descriptionKey: "paymentOptions.items.international.description",
    },
  ];

  return (
    <section className="payment-options">
      <div className="container">
        <div className="options-grid">
          {options.map((option, index) => (
            <div key={index} className="option-card">
              <div className="option-icon">
                <Image
                  src={option.icon}
                  alt={t(option.titleKey)}
                  width={96}
                  height={96}
                  priority={true}
                  className="payment-icon"
                />
              </div>
              <h3 className="option-title">{t(option.titleKey)}</h3>
              <p className="option-description">{t(option.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { CreditCard, Settings, Percent, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

interface PaymentOption {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

export default function PaymentOptions() {
  const { t } = useTranslation();

  const options: PaymentOption[] = [
    {
      icon: <CreditCard size={32} className="text-primary" />,
      titleKey: "paymentOptions.items.methods.title",
      descriptionKey: "paymentOptions.items.methods.description"
    },
    {
      icon: <Settings size={32} className="text-primary" />,
      titleKey: "paymentOptions.items.custom.title",
      descriptionKey: "paymentOptions.items.custom.description"
    },
    {
      icon: <Percent size={32} className="text-primary" />,
      titleKey: "paymentOptions.items.offers.title",
      descriptionKey: "paymentOptions.items.offers.description"
    },
    {
      icon: <Globe size={32} className="text-primary" />,
      titleKey: "paymentOptions.items.international.title",
      descriptionKey: "paymentOptions.items.international.description"
    }
  ];

  return (
    <section className="payment-options">
      <div className="container">
        <div className="options-grid">
          {options.map((option, index) => (
            <div key={index} className="option-card">
              <div className="option-icon">
                {option.icon}
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
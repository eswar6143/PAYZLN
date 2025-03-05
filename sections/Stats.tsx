'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

export default function Stats() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-wrapper">
          <div className="stats-grid">
            <div className={`stat-card ${isVisible ? 'animate' : ''}`}>
              <div className="stat-value">
                <span className="stat-prefix">{t('stats.items.merchants.prefix')}</span>
                <span className="stat-number">{t('stats.items.merchants.value')}</span>
                <span className="stat-suffix">{t('stats.items.merchants.suffix')}</span>
              </div>
              <div className="stat-label">{t('stats.items.merchants.label')}</div>
              <p className="stat-description">{t('stats.items.merchants.description')}</p>
            </div>

            <div className={`stat-card ${isVisible ? 'animate' : ''}`}>
              <div className="stat-value">
                <span className="stat-prefix">{t('stats.items.transactions.prefix')}</span>
                <span className="stat-number">{t('stats.items.transactions.value')}</span>
                <span className="stat-suffix">{t('stats.items.transactions.suffix')}</span>
              </div>
              <div className="stat-label">{t('stats.items.transactions.label')}</div>
              <p className="stat-description">{t('stats.items.transactions.description')}</p>
            </div>

            <div className={`stat-card ${isVisible ? 'animate' : ''}`}>
              <div className="stat-value">
                <span className="stat-prefix">{t('stats.items.crypto.prefix')}</span>
                <span className="stat-number">{t('stats.items.crypto.value')}</span>
                <span className="stat-suffix">{t('stats.items.crypto.suffix')}</span>
              </div>
              <div className="stat-label">{t('stats.items.crypto.label')}</div>
              <p className="stat-description">{t('stats.items.crypto.description')}</p>
            </div>
          </div>
          <div className="contact-button-wrapper">
            <button className="contact-button">{t('stats.cta')}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../lib/i18n";

interface StatValue {
  end: number;
  current: number;
  decimals: number;
}

export default function Stats() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Initialize stat values with decimal precision
  const [stats, setStats] = useState<{ [key: string]: StatValue }>({
    merchants: { end: 27, current: 0, decimals: 0 },
    transactions: { end: 2.4, current: 0, decimals: 1 },
    crypto: { end: 1.2, current: 0, decimals: 1 },
  });

  // Format number with appropriate decimals
  const formatNumber = (value: number, decimals: number) => {
    return value.toFixed(decimals);
  };

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

  // Animation effect when section becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 500;
    const steps = 60;
    const interval = duration / steps;

    const counters = Object.keys(stats).map((key) => {
      const endValue = stats[key].end;
      const step = endValue / steps;

      return setInterval(() => {
        setStats((prev) => ({
          ...prev,
          [key]: {
            ...prev[key],
            current: Math.min(prev[key].current + step, endValue),
          },
        }));
      }, interval);
    });

    return () => counters.forEach((counter) => clearInterval(counter));
  }, [isVisible]);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-wrapper">
          <div className="stats-grid">
            <div className={`stat-card ${isVisible ? "animate" : ""}`}>
              <div className="stat-value">
                <span className="stat-prefix">
                  {t("stats.items.merchants.prefix")}
                </span>
                <span className="stat-number">
                  {formatNumber(
                    stats.merchants.current,
                    stats.merchants.decimals
                  )}
                </span>
                <span className="stat-suffix">
                  {t("stats.items.merchants.suffix")}
                </span>
              </div>
              <div className="stat-label">
                {t("stats.items.merchants.label")}
              </div>
              <p className="stat-description">
                {t("stats.items.merchants.description")}
              </p>
            </div>

            <div className={`stat-card ${isVisible ? "animate" : ""}`}>
              <div className="stat-value">
                <span className="stat-prefix">
                  {t("stats.items.transactions.prefix")}
                </span>
                <span className="stat-number">
                  {formatNumber(
                    stats.transactions.current,
                    stats.transactions.decimals
                  )}
                </span>
                <span className="stat-suffix">
                  {t("stats.items.transactions.suffix")}
                </span>
              </div>
              <div className="stat-label">
                {t("stats.items.transactions.label")}
              </div>
              <p className="stat-description">
                {t("stats.items.transactions.description")}
              </p>
            </div>

            <div className={`stat-card ${isVisible ? "animate" : ""}`}>
              <div className="stat-value">
                <span className="stat-prefix">
                  {t("stats.items.crypto.prefix")}
                </span>
                <span className="stat-number">
                  {formatNumber(stats.crypto.current, stats.crypto.decimals)}
                </span>
                <span className="stat-suffix">
                  {t("stats.items.crypto.suffix")}
                </span>
              </div>
              <div className="stat-label">{t("stats.items.crypto.label")}</div>
              <p className="stat-description">
                {t("stats.items.crypto.description")}
              </p>
            </div>
          </div>
          <div className="contact-button-wrapper">
            <button className="contact-button">{t("stats.cta")}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

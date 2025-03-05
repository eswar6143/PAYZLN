"use client";

import { useTranslation } from "react-i18next";
import "../lib/i18n";
import Image from "next/image";

export default function Empowerment() {
  const { t } = useTranslation();

  return (
    <section className="empowerment">
      <div className="container">
        <div className="empowerment-card">
          <div className="empowerment-content">
            <div className="text-content">
              <h2 className="section-title">{t("empowerment.title")}</h2>
              <p className="section-description">
                {t("empowerment.description")}
              </p>
            </div>
            <div className="image-content">
              <div className="globe-illustration">
                <Image
                  src="/images/globe.svg"
                  alt="Globe illustration"
                  width={600}
                  height={399}
                  className="image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

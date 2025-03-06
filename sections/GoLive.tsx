"use client";

import { useState } from "react";
import {
  Package,
  Rocket,
  CreditCard,
  Headphones,
  CheckCircle,
  Lock,
  Circle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import "../lib/i18n";

interface Feature {
  icon: string;
  subtitleKey: string;
}

interface ChecklistItem {
  id: number;
  translationKey: string;
  completed: boolean;
  locked: boolean;
}

export default function GoLive() {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: "/images/access-key.svg",
      subtitleKey: "goLive.features.suite.subtitle",
    },
    {
      icon: "/images/flexible.svg",
      subtitleKey: "goLive.features.onboarding.subtitle",
    },
    {
      icon: "/images/api-access.svg",
      subtitleKey: "goLive.features.options.subtitle",
    },
    {
      icon: "/images/customer-support.svg",
      subtitleKey: "goLive.features.support.subtitle",
    },
  ];

  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    {
      id: 1,
      translationKey: "goLive.checklist.items.account",
      completed: true,
      locked: false,
    },
    {
      id: 2,
      translationKey: "goLive.checklist.items.verify",
      completed: true,
      locked: false,
    },
    {
      id: 3,
      translationKey: "goLive.checklist.items.setup",
      completed: true,
      locked: false,
    },
    {
      id: 4,
      translationKey: "goLive.checklist.items.integrate",
      completed: false,
      locked: false,
    },
    {
      id: 5,
      translationKey: "goLive.checklist.items.test",
      completed: false,
      locked: true,
    },
    {
      id: 6,
      translationKey: "goLive.checklist.items.live",
      completed: false,
      locked: true,
    },
  ]);

  const toggleItem = (itemId: number) => {
    setChecklistItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === itemId);
      if (itemIndex === -1 || prevItems[itemIndex].locked) return prevItems;

      const newItems = [...prevItems];
      newItems[itemIndex] = {
        ...newItems[itemIndex],
        completed: !newItems[itemIndex].completed,
      };

      if (newItems[itemIndex].completed && itemIndex < newItems.length - 1) {
        newItems[itemIndex + 1] = {
          ...newItems[itemIndex + 1],
          locked: false,
        };
      }

      if (!newItems[itemIndex].completed) {
        for (let i = itemIndex + 1; i < newItems.length; i++) {
          newItems[i] = {
            ...newItems[i],
            locked: true,
            completed: false,
          };
        }
      }

      return newItems;
    });
  };

  return (
    <section className="go-live">
      <div className="container">
        <div className="go-live-content">
          <div className="left-content">
            <h2 className="section-title">{t("goLive.title")}</h2>
            <p className="section-description">{t("goLive.description")}</p>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={48}
                      height={48}
                      priority
                    />
                  </div>
                  <div className="feature-text">
                    <div className="feature-title">
                      {t(feature.subtitleKey)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cta-wrapper">
              <button className="cta-button">{t("goLive.button")}</button>
            </div>
          </div>

          <div className="right-content">
            <div className="checklist">
              <div className="checklist-header">
                <h3>{t("goLive.checklist.title")}</h3>
              </div>
              <div className="checklist-items">
                {checklistItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`checklist-item ${
                      item.completed ? "completed" : ""
                    } ${item.locked ? "locked" : ""}`}
                    onClick={() => !item.locked && toggleItem(item.id)}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      cursor: item.locked ? "not-allowed" : "pointer",
                    }}
                  >
                    <div className="item-content">
                      <div className="checkbox">
                        {item.completed ? (
                          <CheckCircle
                            className="check-icon"
                            size={20}
                            strokeWidth={2.5}
                          />
                        ) : (
                          <Circle
                            className="empty-check"
                            size={20}
                            strokeWidth={2}
                          />
                        )}
                      </div>
                      <span className="item-text">
                        {t(item.translationKey)}
                      </span>
                    </div>
                    {item.locked && (
                      <Lock className="lock-icon" size={18} strokeWidth={2} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

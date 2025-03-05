"use client";

import { useState } from "react";
import {
  Package,
  Rocket,
  CreditCard,
  Headphones,
  CheckCircle,
  Lock,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import "../lib/i18n";

interface Feature {
  icon: React.ReactNode;
  titleKey: string;
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
      icon: <Package size={24} />,
      titleKey: "goLive.features.suite.title",
      subtitleKey: "goLive.features.suite.subtitle",
    },
    {
      icon: <Rocket size={24} />,
      titleKey: "goLive.features.onboarding.title",
      subtitleKey: "goLive.features.onboarding.subtitle",
    },
    {
      icon: <CreditCard size={24} />,
      titleKey: "goLive.features.options.title",
      subtitleKey: "goLive.features.options.subtitle",
    },
    {
      icon: <Headphones size={24} />,
      titleKey: "goLive.features.support.title",
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
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-text">
                    <div className="feature-title">{t(feature.titleKey)}</div>
                    <div className="feature-subtitle">
                      {t(feature.subtitleKey)}
                    </div>
                  </div>
                </div>
              ))}
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
                    onClick={() => toggleItem(item.id)}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      cursor: item.locked ? "not-allowed" : "pointer",
                    }}
                  >
                    <div className="item-content">
                      <div className="checkbox">
                        {item.completed ? (
                          <CheckCircle size={20} className="check-icon" />
                        ) : (
                          <div className="empty-check" />
                        )}
                      </div>
                      <span className="item-text">
                        {t(item.translationKey)}
                      </span>
                    </div>
                    {item.locked && <Lock size={18} className="lock-icon" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .checklist-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          animation: slideIn 0.5s ease-out backwards;
        }

        .item-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .checklist-item:last-child {
          border-bottom: none;
        }

        .checklist-item:not(.locked):hover {
          background: rgba(240, 63, 63, 0.05);
        }

        .checklist-item.completed {
          background: rgba(240, 63, 63, 0.05);
        }

        .checklist-item.locked {
          opacity: 0.6;
        }

        .checkbox {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .checklist-item:not(.locked):hover .checkbox {
          border-color: #f03f3f;
          transform: scale(1.1);
        }

        .check-icon {
          color: #f03f3f;
          animation: checkmark 0.3s ease-out;
        }

        .item-text {
          flex: 1;
          font-size: 16px;
          color: #09080a;
        }

        .lock-icon {
          color: rgba(0, 0, 0, 0.4);
          margin-left: 12px;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes checkmark {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

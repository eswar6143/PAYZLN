'use client';

import { useTranslation } from 'react-i18next';

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <main className="privacy-page">
      <div className="container">
        <div className="content-wrapper">
          <h1>Privacy Policy</h1>
          
          <section className="privacy-section">
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Business information</li>
              <li>Payment information</li>
              <li>Transaction data</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To process your transactions</li>
              <li>To communicate with you about our services</li>
              <li>To comply with legal obligations</li>
              <li>To detect and prevent fraud</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section className="privacy-section">
            <h2>4. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers and business partners</li>
              <li>Regulatory authorities</li>
              <li>Law enforcement agencies when required by law</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>
        </div>
      </div>

      <style jsx>{`
        .privacy-page {
          padding: 6rem 0;
          background: #fff;
          min-height: 100vh;
        }

        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #09080A;
          margin-bottom: 2rem;
        }

        .privacy-section {
          margin-bottom: 3rem;

          h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #09080A;
            margin-bottom: 1rem;
          }

          p {
            font-size: 1rem;
            line-height: 1.6;
            color: #616161;
            margin-bottom: 1rem;
          }

          ul {
            list-style: disc;
            margin-left: 1.5rem;
            margin-bottom: 1rem;

            li {
              color: #616161;
              margin-bottom: 0.5rem;
              line-height: 1.6;
            }
          }
        }
      `}</style>
    </main>
  );
}
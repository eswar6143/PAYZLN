'use client';

import { useTranslation } from 'react-i18next';

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <main className="terms-page">
      <div className="container">
        <div className="content-wrapper">
          <h1>Terms and Conditions</h1>
          
          <section className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Payzln's services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</p>
          </section>

          <section className="terms-section">
            <h2>2. Service Description</h2>
            <p>Payzln provides payment processing services, enabling businesses to accept various forms of payment from their customers. Our services include but are not limited to payment gateway integration, transaction processing, and payment analytics.</p>
          </section>

          <section className="terms-section">
            <h2>3. User Obligations</h2>
            <p>Users must:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of their account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the service for any illegal purposes</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. Fees and Payments</h2>
            <p>Users agree to pay all applicable fees associated with the use of Payzln services. Fees are subject to change with notice to users.</p>
          </section>

          <section className="terms-section">
            <h2>5. Privacy and Data Protection</h2>
            <p>We are committed to protecting your privacy and handling your data in accordance with applicable data protection laws. For more information, please refer to our Privacy Policy.</p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .terms-page {
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

        .terms-section {
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
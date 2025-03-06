"use client";

import { useTranslation } from "react-i18next";

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <main className="terms-page">
      <div className="container">
        <div className="content-wrapper">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last Revised: June 02, 2024</p>

          <section className="terms-section">
            <p>
              Welcome to Pay Zillion, a cryptocurrency-based platform operated
              and owned by BYTEX FINANCIAL LTD. (a sister company of RTB
              VENTURES INC), located at 777 Dunsmuir Street, Vancouver, BC V7Y
              1K4, Canada. By accessing or using Pay Zillion, you agree to
              adhere to these terms of service. If you do not accept these
              terms, please refrain from using our platform.
            </p>
          </section>

          <section className="terms-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing Pay Zillion, you confirm that you have read,
              comprehended, and accepted these terms of service. You also agree
              to comply with all relevant laws and regulations.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. User Account and Registration</h2>
            <ol>
              <li>
                You must be of legal age in your jurisdiction to use our
                services.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account and password.
              </li>
              <li>
                You agree to provide accurate, current, and complete information
                during registration.
              </li>
            </ol>
          </section>

          <section className="terms-section">
            <h2>3. Service Usage</h2>
            <ol>
              <li>
                You may only use our services for lawful and legitimate
                purposes.
              </li>
              <li>
                Engaging in illegal activities, such as fraud, money laundering,
                or hacking, on Pay Zillion is strictly prohibited.
              </li>
              <li>
                We reserve the right to terminate or suspend your account if we
                suspect a violation of these terms.
              </li>
            </ol>
          </section>

          <section className="terms-section">
            <h2>4. Fees and Payments</h2>
            <p>
              Users agree to pay all applicable fees associated with the use of
              Payzln services. Fees are subject to change with notice to users.
            </p>
          </section>

          <section className="terms-section">
            <h2>5. Privacy and Data Protection</h2>
            <p>
              We are committed to protecting your privacy and handling your data
              in accordance with applicable data protection laws. For more
              information, please refer to our Privacy Policy.
            </p>
          </section>

          <section className="terms-section">
            <h2>12. Contact Information</h2>
            <p>
              For questions or concerns about these terms, please get in touch
              with us at [contact@localhost] or through the Contact Us section
              on our website.
            </p>
            <p>
              By using Pay Zillion, you agree to comply with these terms. Please
              read them carefully to ensure you understand and adhere to them.
              Non-compliance may result in the termination of your account and
              possible legal action.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

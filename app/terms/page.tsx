"use client";

import { useTranslation } from "react-i18next";

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <main className="terms-page">
      <div className="container">
        <div className="content-wrapper">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last Revised: March 10, 2025</p>

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
            <h2>2. Service Usage</h2>
            <p>
              a. You may only use our services for lawful and legitimate
              purposes. <br />
              b. Engaging in illegal activities, such as fraud, money
              laundering, or hacking, on Pay Zillion is strictly prohibited.
              <br /> c. We reserve the right to terminate or suspend your
              account if we suspect a violation of these terms.
            </p>
            <h2>3. Cryptocurrency Transactions</h2>
            <p>
              a. We are not liable for any losses due to the volatility or
              fluctuations in cryptocurrency markets.
              <br /> b. You are solely responsible for the security of your
              cryptocurrency wallet.
            </p>
            <h2>4. Data Privacy</h2>
            <p>
              a. We collect and process personal information as detailed in our
              Privacy Policy.
              <br /> b. By using our services, you consent to the collection,
              use, and sharing of your information as described in our Privacy
              Policy.
            </p>
            <h2>5. Intellectual Property Rights</h2>
            <p>
              a. All content on Pay Zillion, including text, graphics, logos,
              and software, is protected by copyright and other intellectual
              property rights.
              <br /> b. You may not use, reproduce, or distribute our content
              without prior written permission.
            </p>
            <h2>6. Disclaimer</h2>
            <p>
              a. We do not guarantee the accuracy, completeness, or reliability
              of information on Pay Zillion. <br />
              b. We do not provide financial or investment advice.
            </p>
            <h2>7. Limitation of Liability</h2>
            <p>
              We are not responsible for any direct or indirect damages,
              including financial losses, arising from the use of Pay Zillion or
              its services.
            </p>
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold us harmless from any claims,
              damages, or liabilities arising from your use of Pay Zillion.
            </p>
            <h2>10. Modifications to Terms</h2>
            <p>
              We reserve the right to change these terms of service at any time.
              It is your responsibility to review these terms periodically for
              updates.
            </p>
            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Canada. Any disputes
              will be resolved in the courts of the Canada.{" "}
            </p>
            <h2>12. Contact Information</h2>
            <p>
              For questions or concerns about these terms, please get in touch
              with us at the Contact Us section on our website. By using Pay
              Zillion, you agree to comply with these terms. Please read them
              carefully to ensure you understand and adhere to them.
              Non-compliance may result in the termination of your account and
              possible legal action. has context menu
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

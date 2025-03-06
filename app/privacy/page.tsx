"use client";

import { useTranslation } from "react-i18next";

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <main className="privacy-page">
      <div className="container">
        <div className="content-wrapper">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: June 02, 2024</p>

          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              This Privacy Policy outlines our guidelines and practices
              regarding the collection, use, and disclosure of your information
              when you use our Service. It also explains your privacy rights and
              the legal protections available to you.
            </p>
            <p>
              We use your Personal Data to enhance and provide the Service. By
              using the Service, you consent to the collection and use of
              information as described in this Privacy Policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Interpretation and Key Terms</h2>
            <h3>Interpretation</h3>
            <p>
              Terms with capitalized initial letters are defined under specific
              conditions. These definitions remain consistent whether they
              appear in singular or plural form.
            </p>

            <h3>Key Definitions</h3>
            <ul>
              <li>
                <strong>Cookies:</strong> Small files placed on your computer,
                mobile device, or any other device by a website, containing
                details of your browsing history on that website among its many
                uses.
              </li>
              <li>
                <strong>Country:</strong> Refers to Canada.
              </li>
              <li>
                <strong>You:</strong> The individual accessing or using the
                Service, or the company or other legal entity on behalf of which
                such individual is accessing or using the Service, as
                applicable.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Collection and Utilization</h2>
            <h3>Types of Data Gathered</h3>
            <h4>Personal Data</h4>
            <p>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. This may include, but is not limited to:
            </p>
            <ul>
              <li>Email address</li>
              <li>Your Role</li>
              <li>Usage Data</li>
            </ul>

            <h3>Usage Data</h3>
            <p>
              Usage Data is collected automatically when using the Service. It
              may include information such as:
            </p>
            <ul>
              <li>Device's Internet Protocol (IP) address</li>
              <li>Browser type and version</li>
              <li>Pages visited and timing</li>
              <li>Mobile device information</li>
              <li>Unique device identifiers</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Monitoring Technologies and Cookies</h2>
            <p>
              We use Cookies and similar tracking technologies to track activity
              on our Service and store certain information. These include:
            </p>
            <ul>
              <li>
                <strong>Browser Cookies:</strong> Small files placed on your
                Device
              </li>
              <li>
                <strong>Web Beacons:</strong> Small electronic files for
                analytics
              </li>
              <li>
                <strong>Necessary Cookies:</strong> Essential for basic
                functionality
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Remember your
                preferences
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>How We Utilize Your Data</h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To manage your Account</li>
              <li>For contract performance</li>
              <li>To contact you</li>
              <li>To provide news and offers</li>
              <li>To manage your requests</li>
              <li>For business transfers</li>
              <li>For data analysis and service improvement</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Retention and Transfer</h2>
            <p>
              We retain your data only as long as necessary for the purposes
              outlined in this Privacy Policy. Your information may be processed
              in various locations where we operate or where our service
              providers are located.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Request deletion of your data</li>
              <li>Update or correct your information</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Security</h2>
            <p>
              While we implement commercially reasonable security measures, no
              method of transmission over the Internet or electronic storage is
              100% secure. We strive to protect your Personal Data but cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Legal Disclosure</h2>
            <p>We may disclose your information:</p>
            <ul>
              <li>During business transactions (mergers, acquisitions)</li>
              <li>For law enforcement purposes</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and property</li>
              <li>To prevent fraud or ensure user safety</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

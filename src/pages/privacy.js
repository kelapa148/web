import React from "react"
import Layout from "../components/layout"
import HelmetWrapper from "../components/helmetWrapper"

const PrivacyPage = () => (
  <Layout>
    <HelmetWrapper
      title="Privacy Policy"
      description="Privacy policy of COCONUT Computer Club."
      slug="/privacy"
    />
    <h1>Privacy Policy</h1>
    <div className="primary-content">
      <p>Last updated: September 2026</p>

      <p>
        COCONUT Computer Club ("we", "us", or "our") operates the website
        coconut.or.id (the "Website"). This Privacy Policy describes how we
        collect, use, and protect information when you visit the Website or
        communicate with us through it. By using the Website, you agree to
        the practices described in this policy.
      </p>

      <h2>Information We Collect</h2>

      <h3>Information You Provide</h3>
      <p>
        When you contact us through the contact form, we collect the
        information you choose to submit, such as your name, email address,
        subject, and message. We use this information solely to respond to
        your inquiry.
      </p>

      <h3>Information Collected Automatically</h3>
      <p>
        Like most websites, we use analytics tools to understand how visitors
        interact with the Website. These tools may collect aggregated and
        anonymized data such as pages visited, device type, browser type,
        approximate geographic region, and referring pages. This information
        helps us improve the Website and is not used to identify individual
        visitors.
      </p>

      <p>
        As part of standard operation, our web server infrastructure may keep
        access logs that include technical information such as internet
        protocol (IP) addresses, timestamps, and request details. These logs
        are used for security, troubleshooting, and site administration.
      </p>

      <h2>Cookies</h2>
      <p>
        The Website may use cookies and similar technologies to provide core
        functionality and to support analytics. You can control or disable
        cookies through your browser settings; however, some features of the
        Website may not function properly without them.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>To respond to inquiries and communicate with you</li>
        <li>To operate, maintain, and improve the Website</li>
        <li>To understand aggregate usage patterns</li>
        <li>To maintain the security and integrity of the Website</li>
      </ul>

      <h2>Sharing of Information</h2>
      <p>
        We do not sell, rent, or trade personal information. We do not
        disclose your information to third parties except where necessary to
        operate the Website or where required by applicable law.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        The Website may contain links to external websites that are not
        operated by us. We are not responsible for the content or privacy
        practices of such websites, and we encourage you to review their
        privacy policies.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain information only for as long as necessary to fulfill the
        purposes described in this policy, unless a longer retention period
        is required or permitted by law.
      </p>

      <h2>Your Rights</h2>
      <p>
        Subject to applicable law, you may request access to, correction of,
        or deletion of personal information we hold about you. To exercise
        these rights, please contact us at surat [AT] coconut.or.id.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        The Website is intended for a general audience and is not directed at
        children. We do not knowingly collect personal information from
        children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated effective date. We encourage
        you to review this policy periodically.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact
        us at surat [AT] coconut.or.id.
      </p>
    </div>
  </Layout>
)

export default PrivacyPage

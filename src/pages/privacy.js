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
      <p>
        This privacy policy explains how COCONUT Computer Club collects, uses,
        and protects personal information when you use coconut.or.id (the
        "Website").
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you use the contact form, we collect the information you provide:
        your name, email address, subject, and message. To help keep the form
        safe from abuse, we also process the IP address and browser user-agent
        of the sender, and a Cloudflare Turnstile verification token.
      </p>
      <p>
        We also use analytics tools that may collect anonymized usage data
        such as pages visited, device type, and approximate location, to help
        us understand how the Website is used.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        Information submitted through the contact form is used solely to
        respond to your inquiry. We do not sell, rent, or share your personal
        information with third parties for marketing purposes.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We rely on the following third-party services to operate the Website:
        EmailJS (delivery of contact form messages), Cloudflare Turnstile
        (spam protection), and Google Analytics (usage statistics). These
        services process data according to their own privacy policies.
      </p>

      <h2>Cookies</h2>
      <p>
        The Website may use cookies and similar technologies for security,
        analytics, and site functionality. You can control or disable cookies
        through your browser settings.
      </p>

      <h2>Data Retention</h2>
      <p>
        Contact form messages are retained only as long as necessary to
        respond to your inquiry and for internal records.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal
        information by contacting us at surat [AT] coconut.or.id.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. Changes will be
        posted on this page.
      </p>
    </div>
  </Layout>
)

export default PrivacyPage

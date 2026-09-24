import React from "react"
import Layout from "../components/layout"
import HelmetWrapper from "../components/helmetWrapper"

const JoinPage = () => (
  <Layout>
    <HelmetWrapper
      title="Join Us Now"
      description="Join COCONUT Computer Club: a community of students, professionals, and researchers collaborating on computer science and information technology."
      slug="/join"
    />
    <h1>Join Us Now</h1>
    <div className="primary-content">
      <p>
        COCONUT Computer Club (Computer Club Oriented Network, Utility &amp;
        Technology) is a think-tank and research community established in
        2008. We bring together students, professionals, and researchers who
        want to learn, build, and collaborate in computer science and
        information technology.
      </p>

      <h2>Who Can Join</h2>
      <p>
        We welcome students and fresh graduates, professionals, and
        researchers from any background. Our members come from different
        campuses, industries, and disciplines, united by curiosity and a
        willingness to collaborate.
      </p>

      <h2>What You Get</h2>
      <ul>
        <li>Hands-on projects across our focus areas: finance, energy, health, education, and infrastructure &amp; security</li>
        <li>Mentorship in programming, cybersecurity, machine learning, and more</li>
        <li>Workshops, open classes, and community events</li>
        <li>A network of engineers and researchers across Indonesia</li>
      </ul>

      <h2>How to Join</h2>
      <p>
        We open recruitment periodically through our events and open classes.
        To get started, reach out to us through the contact page or come to
        one of our open events.
      </p>

      <a className="button -primary" href="/contact">
        Contact Us &rarr;
      </a>
    </div>
  </Layout>
)

export default JoinPage

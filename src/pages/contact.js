import emailjs, { init } from "@emailjs/browser";
import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import HelmetWrapper from "../components/helmetWrapper";
import Layout from "../components/layout";

const TURNSTILE_SITE_KEY = "0x4AAAAAAE-aslG0x2WL3aML";

const getClientInfo = async () => {
  let ip = "";
  try {
    const res = await fetch("https://api.ipify.org?format=json", {
      cache: "no-store",
    });
    const data = await res.json();
    ip = data.ip || "";
  } catch (e) {
    // ignore
  }
  if (!ip) {
    try {
      const res = await fetch("https://ipwho.is/", { cache: "no-store" });
      const data = await res.json();
      ip = data.ip || "";
    } catch (e) {
      // ignore
    }
  }
  return {
    ipAddress: ip || "unknown",
    userAgent: navigator.userAgent || "unknown",
  };
};

const RequiredWarning = ({ fieldName }) => {
  return (
    <span style={{ color: "#ff4542" }}>{` — ${fieldName} is required!`}</span>
  );
};

const ContactPage = ({ data: { site } }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const [formError, setFormError] = useState([]);

  useEffect(() => {
    init(process.env.GATSBY_EMAILJS_USER_ID);
  }, []);

  useEffect(() => {
    if (window.turnstile) return;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <HelmetWrapper
        title={`Contact | ${site.siteMetadata.title}`}
        description={"Contact page of " + site.siteMetadata.description}
      />
      <div className="two-grids -contact">
        <div>
          <h1 className="post-title">Contact us</h1>
          <div className="primary-content">
            If you are interested to join the lab or collaborate, please do not
            hesitate to send us an email (surat [AT] coconut.or.id) or
            using the form in this page &rarr;
          </div>
          <div className="primary-content">
            <b>Undergraduate students: </b>
            Please contact{" "}
            <a href="https://coconut.or.id/people/abdrahman">Maman</a> to
            arrange a short meeting to discuss about research and/or potential
            projects.
          </div>
          <div className="primary-content">
            <b>Graduate students: </b>
            Due to limitation of the university's rule, We cannot hire
            graduate students yet. If you are interested in doing research,
            please send a CV with a brief research interest. Then you can
            arrange a discussion before applying. You can potentially apply to
            the Department of Information System at STMIK Profesional Makassar,
            Telkom University (Bandung), or
            Muhammadiyah University Of Makassar, Indonesia, where COCONUT members can co-advise. There are
            multiple options if you are interested.
          </div>
          <div className="primary-content">
            <b>Other positions: </b>We always actively look for interns and
            developers. If you are interested in doing internship (locally or
            remotely) or other positions such as developers, please also do not
            hesitate to email us to discuss.
          </div>
          <div className="primary-content">
            <b>Basecamp: </b>
            <ul>
              <li>
                Makassar: Jl. Mon. Emmy Saelan III, 2rd Floor, Makassar City,
                Sulawesi Selatan, Indonesia 90221.
              </li>
              <li>
                Bandung: Jalan Dago Pakar Mawar 1, Mekarsaluyu, Kabupaten
                Bandung.
              </li>
              <li>
                Jakarta: Jalan Warung Jati Timur I, Pejaten, Kecamatan
                Pancoran, Jakarta Selatan.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <form
            className="form-container"
            onSubmit={async (e) => {
              e.preventDefault();

              const formdata = new FormData(e.target);

              const templateParams = {
                name: formdata.get("w3lName"),
                replyTo: formdata.get("w3lSender"),
                subject: formdata.get("w3lSubject"),
                message: formdata.get("w3lMessage"),
              };

              setSendError("");
              setIsSending(false);

              // check required fields
              let checkedFields = [];

              Object.entries(templateParams).forEach(([key, value]) => {
                if (!value) {
                  checkedFields.push(key);
                } else {
                  checkedFields = checkedFields.filter(
                    (field) => field !== key
                  );
                }
              });

              // set state as batch to avoid race condition
              setFormError(checkedFields);

              // if there are no errors, verify Turnstile then send email
              if (checkedFields.length === 0) {
                const turnstileToken = window.turnstile
                  ? window.turnstile.getResponse()
                  : "";

                if (!turnstileToken) {
                  setSendError(
                    "Please complete the Cloudflare Turnstile check next to the submit button."
                  );
                  return;
                }

                setIsSending(true);

                const clientInfo = await getClientInfo();

                emailjs
                  .send(
                    process.env.GATSBY_EMAILJS_SERVICE_ID,
                    process.env.GATSBY_EMAILJS_TEMPLATE_ID,
                    {
                      ...templateParams,
                      "cf-turnstile-response": turnstileToken,
                      ipAddress: clientInfo.ipAddress,
                      userAgent: clientInfo.userAgent,
                    }
                  )
                  .then(
                    () => {
                      setSubmitted(true);
                    },
                    (rej) => {
                      console.log("failed with result:", rej);
                      console.log("failed detail:", JSON.stringify(rej, null, 2));
                      let msg = "Something went wrong. Please email us directly at surat [AT] coconut.or.id";
                      if (rej && typeof rej === "object") {
                        const detail = rej.text || rej.message || rej.error || "";
                        if (detail) msg = "Failed: " + detail;
                      }
                      setSendError(msg);
                      setIsSending(false);
                    }
                  );
              }
            }}
          >
            {submitted ? (
              <p style={{ margin: 0, lineHeight: "1.5em" }}>
                Your message has successfully been sent to COCONUT Administrator! It generally
                takes one to two days for him to reply.
              </p>
            ) : (
              <>
                {sendError && (
                  <p
                    style={{
                      margin: "0 0 1rem",
                      padding: "10px 12px",
                      background: "#ff45421a",
                      border: "1px solid #ff4542",
                      borderRadius: "6px",
                      color: "#ff4542",
                      fontSize: "0.9rem",
                    }}
                  >
                    {sendError}
                  </p>
                )}
                <div>
                  <label htmlFor="w3lName">
                    Name{" "}
                    {formError.includes("name") && (
                      <RequiredWarning fieldName={"Name"} />
                    )}
                  </label>
                  <input type="text" name="w3lName" id="w3lName" />
                </div>
                <div>
                  <label htmlFor="w3lSender">
                    Email
                    {formError.includes("replyTo") && (
                      <RequiredWarning fieldName={"Email"} />
                    )}
                  </label>
                  <input type="email" name="w3lSender" id="w3lSender" />
                </div>
                <div>
                  <label htmlFor="w3lSubject">
                    Subject
                    {formError.includes("subject") && (
                      <RequiredWarning fieldName={"Subject"} />
                    )}
                  </label>
                  <input type="text" name="w3lSubject" id="w3lSubject" />
                </div>
                <div>
                  <label htmlFor="w3lMessage">
                    Message
                    {formError.includes("message") && (
                      <RequiredWarning fieldName={"Message"} />
                    )}
                  </label>
                  <textarea name="w3lMessage" id="w3lMessage"></textarea>
                </div>
                {!isSending && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      className="cf-turnstile"
                      data-sitekey={TURNSTILE_SITE_KEY}
                    />
                    <input
                      type="submit"
                      className="button -primary"
                      style={{ marginRight: 0 }}
                      disabled={isSending}
                    />
                  </div>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

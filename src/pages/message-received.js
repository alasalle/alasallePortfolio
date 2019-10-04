import React from "react";
import SectionTitle from "../components/sectiontitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Sent = () => (
  <Layout>
    <SEO title="Message Received" />
    <section id="404" className="container" style={{ minHeight: "600px" }}>
      <div className="section-title">
        <SectionTitle title="Message Received" />
        <p class="text-primary">
          Thank you for getting in touch with me. I look forward to reading your message and getting back to you.
        </p>
      </div>
    </section>
  </Layout>
);

export default Sent;

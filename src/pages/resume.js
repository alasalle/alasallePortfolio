import React from "react";
import Helmet from "react-helmet";
import SectionTitle from "../components/sectiontitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Resume = () => {
  return (
    <Layout>
      <SEO />
      <Helmet>
        <script async src="https://sdk.canva.com/v1/embed.js" />
      </Helmet>
      <section id="404" className="container" style={{ minHeight: "600px" }}>
        <div className="section-title">
          <SectionTitle title="RESUME" />
          <div
            class="canva-embed"
            data-design-id="DADpobeTBV0"
            data-height-ratio="1.2941"
            style={{
              padding: "129.4118% 5px 5px 5px",
              background: "rgba(0, 0, 0, 0.03)",
              borderRadius: "8px"
            }}
          ></div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;

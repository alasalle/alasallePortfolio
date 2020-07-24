import React from "react";
import SectionTitle from "../components/sectiontitle";
import pic from "../../static/images/image.png";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../style/about.less";

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <section id="404" className="container" style={{ minHeight: "600px" }}>
        <div className="section-title">
          <SectionTitle title="ABOUT" />
        </div>
        <div className="img-container">
          <img
            src={pic}
            alt="Angela La Salle"
            style={{ maxWidth: "350px", width: "100%" }}
          />
        </div>
        <p class="text-primary">
          Angela La Salle is a Full Stack Software Developer, a recent graduate
          of Lambda School's Full Stack Web Development track, and served
          multiple times as a Team Lead for Labs students at Lambda School. In
          their off hours, Angela can usually be found reading or playing video
          games. Their background in education and passion for learning the
          latest and best in the web development field informed their approach
          to guiding students on their teams. Angela believes that teaching and
          mentorship is a field that can be transformative and exciting, and
          learning web development can be as much of a gift for others as it has
          been for them.
        </p>
        <br />
        <p class="text-primary">
          Angela has been an ambitious and engaged student of web development
          for the past 2 years. They consistently performed above expectations
          in coursework and in their capstone project that simulated a
          professional development team. Angela hopes to bring these experiences
          and their desire to always learn more with them everywhere they go,
          now and in the future.
        </p>
      </section>
    </Layout>
  );
};

export default About;

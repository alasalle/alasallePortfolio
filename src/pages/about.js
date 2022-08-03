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
          Hi there! My name is Angela. I'm a full stack software engineer
          with 2 years of professional experience in the field and was a
          student leader at Bloom Institute of Technology (Lambda School) for 
          2 years before that. I'm based out of Fort Wayne, Indiana, but was 
          born and raised in Florida. I've developed a real appreciation for 
          the seasons since moving up here. In my off hours, I can usually be found
          reading, playing video games, cooking, or spending time with my family.
          Funnily enough, my wife is also a software developer.
         </p>
         <br />
         <p class="text-primary">
          Before persuing my lifelong interest in software and all things internet,
          my background was in education. My experience in education and my passion 
          for learning has informed my approach to my career. I believe that teaching
          and mentorship can be exciting and transformative. Learning and sharing
          what I've learned has helped me more times than I can count since I've
          become a software engineer.
         </p>
         <br />
         <p class="text-primary">
          I've had the privilege to work as a student team leader, a freelance 
          developer, at a company specializing in RV-C hardware and software, 
          and now at a company that specializes in travel industry automation 
          and data. My core strengths lie in Javascript, React, Node, SQL, HTML, and
          CSS, but I've been branching out with AWS and have been having a blast.
          I've been getting a lot of use out of DynamoDB, Lambdas, Cognito, 
          and API Gateway. Cloud development is definitely my new love!
         </p>
      </section>
    </Layout>
  );
};

export default About;

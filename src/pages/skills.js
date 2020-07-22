import React from "react";
import SectionTitle from "../components/sectiontitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../style/about.less";

const Skills = () => {
  return (
    <Layout>
      <SEO title="Skills" />
      <section
        id="404"
        className="container skills-container"
        style={{ minHeight: "600px" }}
      >
        <div className="section-title">
          <SectionTitle title="SKILLS" />
        </div>
        <div
          className="logos-box"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-javascript-plain colored logocon"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>Javascript</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-react-original colored"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>React</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i class="devicon-css3-plain colored" style={{ fontSize: "60px" }}>
              <div style={{ fontSize: "16px", color: "black" }}>CSS</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i class="devicon-html5-plain colored" style={{ fontSize: "60px" }}>
              <div style={{ fontSize: "16px", color: "black" }}>HTML</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-nodejs-plain colored"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>Node.js</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-express-original colored"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>Express</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <img src="https://img.icons8.com/color/54/000000/redux.png" />
            <div style={{ fontSize: "16px", color: "black" }}>Redux</div>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <span
              class="iconify"
              data-icon="logos-auth0"
              data-inline="false"
              style={{ height: "61px", width: "58px" }}
            ></span>
            <div style={{ fontSize: "16px", color: "black" }}>Auth0</div>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <img src="https://img.icons8.com/color/54/000000/graphql.png" />
            <div style={{ fontSize: "16px", color: "black" }}>GraphQL</div>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-postgresql-plain colored"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>PostgreSQL</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-sass-original colored"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>Sass</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-less-plain-wordmark colored"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>Less</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-mongodb-plain colored"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>MongoDB</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-github-plain colored"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>Github</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i class="devicon-git-plain colored" style={{ fontSize: "60px" }}>
              <div style={{ fontSize: "16px", color: "black" }}>Git</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-heroku-original colored"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>Heroku</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <img src="https://img.icons8.com/color/60/000000/firebase.png" />
            <div style={{ fontSize: "16px", color: "black" }}>Firebase</div>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i
              class="devicon-python-plain colored"
              style={{ fontSize: "60px" }}
            >
              <div style={{ fontSize: "16px", color: "black" }}>Python</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i class="devicon-php-plain colored" style={{ fontSize: "60px" }}>
              <div style={{ fontSize: "16px", color: "black" }}>PHP</div>
            </i>
          </div>

          <div
            className="logo-box"
            style={{ margin: "10px", textAlign: "center" }}
          >
            <i class="devicon-mysql-plain colored" style={{ fontSize: "60px" }}>
              <div style={{ fontSize: "16px", color: "black" }}>mySQL</div>
            </i>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;

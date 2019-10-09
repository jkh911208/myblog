import React, { Fragment } from "react";
import Jumbotron from "../subcomponents/Jumbotron";
import { Link } from "react-router-dom";

const imgStyle = {
  objectFit: "cover",
  maxWidth: "100%",
  height: "auto"
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
  transform: "scale(1.2)",
  transition: "1s"
};

const Home = () => {
  return (
    <Fragment>
      <Jumbotron />
      {/* first introduction part */}
      <div className="container mb-4">
        <div className="row">
          <div className="col-sm-6 mb-4 pl-2 pr-2">
            <h1 className="pt-1 pb-2">
              <strong>Little bit about me</strong>
            </h1>
            <p className="pt-2">
              I am a software engineer, graduated from UT Dallas Computer
              Science. I am not only the developer, but also I love the computer
              hardware, especially the server hardware. Willing to learn more
              about the containerization and become a DevOps.
            </p>
            <p className="pb-2">
              I am a currently working as a Software Engineer at Dell EMC.
              Enthusiastic about writing any kinds of code, Data Science &
              Machine Learning, building custom PC and Virtualization. I like to
              learn new technologies and I gain knowledge by trial and errors.
            </p>
            <Link to="/about">
              <button type="button" className="btn btn-outline-dark pt-2">
                More About Me
              </button>
            </Link>
          </div>
          <div className="col-sm-6 mb-4">
            <a
              href="https://www.linkedin.com/in/gyuhyongjeon/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <img
                className="img-responsive"
                src="images/me.jpg"
                alt="Linkedin"
                style={imgStyle}
              />
            </a>
          </div>
        </div>
      </div>

      {/* second more things about me part */}
      <div className="bg-light pt-4 pb-4">
        <div className="container pb-4">
          <h1 className="text-center font-weight-bold">
            Even more things about me
          </h1>
          <h5 className="text-center">
            Check out my blog and my repository, you can also contact me
          </h5>
        </div>
        {/* dummy div for pedding */}
        <div className="pt-4 mb-4"></div>
        <div className="container pt-4">
          <div className="row">
            <div className="col-sm-4">
              <h1 className="text-center">My Blog</h1>
              <p className="pt-4 pl-4 pr-4 text-center pb-3">
                I write the blog about my computer experience and the personal
                projects that I am working on.
              </p>
              <h6 className="text-center pt-4 pb-2">GO TO BLOG</h6>
            </div>
            <div className="col-sm-4">
              <h1 className="text-center">Development</h1>
              <p className="pt-4 pl-4 pr-4 text-center">
                This is my self hosted git repository. You can check out all of
                my open source projects. There are few private repos, which you
                can't see.
              </p>
              <a
                href="https://www.github.com/jkh911208"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <h6 className="text-center pt-3 pb-2">GO TO REPOSITORY</h6>
              </a>
            </div>
            <div className="col-sm-4">
              <h1 className="text-center">Contact me</h1>
              <p className="pt-4 pl-4 pr-4 text-center">
                If you have any questions about me or my project, feel free to
                reach out to me. I am willing answer the questions and I can
                talk about technologies for hours.
              </p>
              <h6 className="text-center pt-3 pb-2">CONTACT JAMES</h6>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

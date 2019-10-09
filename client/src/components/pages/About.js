import React, { Fragment } from "react";

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

const About = () => {
  return (
    <Fragment>
      {/* start of My current job */}
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-sm-6 mb-4">
            <h1 className="pt-1 pb-2">
              <strong>My Current Job</strong>
            </h1>
            <p className="pt-2 pl-2 pr-2">
              I am working as a Software Engineer at Dell EMC. Working with a
              small developer team with various backgrounds. Mainly building the
              FlexManager, the management tool goes with Dell Servers.
            </p>
            <p className="pt-1 pl-2 pr-2">
              Our team is building a small part of the FlexManager. Currently
              working on retrieving the LC Logs from all the servers that is
              managed by the FlexManager.
            </p>
          </div>
          <div className="col-sm-6">
            <a
              href="https://www.dell.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <img
                className="img-responsive"
                src="images/vxrack.jpg"
                alt="dell"
                style={imgStyle}
              />
            </a>
          </div>
        </div>
      </div>

      {/* start of my professional experiences */}
      <div className="pt-4 pb-4 bg-light">
        <div className="container pr-2 pl-2">
          <h1 className="pt-2 pb-4">
            <strong>My Professional Experiences</strong>
          </h1>
          <h5 className="pb-2">
            Software Engineer I – Dell EMC – 01/2019 ~ Current
          </h5>
          <p className="pb-4">Switched to full-time from intern.</p>

          <h5 className="pb-2">
            Software Engineer Intern – Dell EMC – 05/2018 ~ 12/2018
          </h5>
          <p className="pb-4">
            I worked at the Dell EMC Richardson, TX office. As a Software
            Engineer Intern, I mainly worked on the PoC. Few months later, I
            started working on the iDrac Simulator, which is not part of
            development requirement, but it allowed us to test the software
            without buying couple of racks of servers.
          </p>

          <h5 className="pb-2">
            Help Desk IT Intern – CVE Technology Group – 07/2015 ~ 07/2016
          </h5>
          <p className="pb-4">
            The CVE Technology Group is located in Plano, TX. I worked as an
            Help Desk IT Intern. My main duty is resolve the tickets. Mainly
            fixing the computers and the network. CVE is a production company,
            so when they have a plan for new production line, I had to make sure
            that the plan is feasible for us to connect all the network to the
            computers in the new production line.
          </p>

          <h5 className="pb-2">
            PHP Backend Developer Intern – Inappin Co. LTD – 01/2015 ~ 04/2015{" "}
          </h5>
          <p className="pb-4">
            Inappin is located in Seoul, South Korea. The company was developing
            the mobile games. They used the PHP and MariaDB for the backend
            services. I worked with a small team of developers and game
            designers. It was my first real world experience in development.
            Even it was only three months long, I was able to learn a lot from
            the company and the team members.
          </p>

          <h5 className="pb-2">Sergeant – R.O.K. Army – 11/2011 ~ 07/2013</h5>
          <p className="pb-4">Confidential</p>
        </div>
      </div>

      {/* Start Education */}
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-sm-6 mb-4">
            <h1 className="pt-4 pb-4">
              <strong>Education</strong>
            </h1>
            <p>
              The University of Texas at Dallas, Bachelors in Computer Science.
            </p>
          </div>

          <div className="col-sm-6 mb-4">
            <a
              href="https://www.utdallas.edu/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <img
                className="img-responsive"
                src="images/utd.png"
                alt="dell"
                style={imgStyle}
              />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

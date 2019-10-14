import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none"
};

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container">
          <button
            className="navbar-toggler mr-auto"
            type="button"
            data-toggle="collapse"
            data-target="#topNavbar"
            aria-controls="topNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item nav-link mr-auto">
                <Link to="/" style={linkStyle}>
                  <h5>
                    <font color="white">Home</font>
                  </h5>
                </Link>
              </li>

              <li className="nav-item nav-link mr-auto">
                <Link to="/about" style={linkStyle}>
                  <h5>
                    <font color="white">About Me</font>
                  </h5>
                </Link>
              </li>

              <li className="nav-item nav-link mr-auto">
                <Link to="/contact" style={linkStyle}>
                  <h5>
                    <font color="white">Contact</font>
                  </h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;

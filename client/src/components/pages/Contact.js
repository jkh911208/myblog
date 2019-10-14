import React, { Fragment } from "react";

import ContactState from "../../context/contact/ContactState";


const Contact = () => {
  return (
    <ContactState>
    <Fragment>
      <div className="container pt-4 pb-4">
        <div className="row">
          {/* first column start */}
          <div className="col-sm-6 mt-4">
            <h1 className="pt-1 pb-2 mt-4">
              <strong>Contact Me</strong>
            </h1>
            <p className="pt-2 pr-4">
              Thank you for reaching me out, I am happy to answer any kinds of
              questions or even discuss about the technologies. Please feel free
              to contact me via the form on the right. I will try to reach back
              to you as soon as possible. However, please note that I am not
              always available, so don’t be mad even I don’t reach you back.
            </p>

            <h4 className="pt-1 pb-2 mt-4">
              <strong>My Location</strong>
            </h4>

            <p className="pt-">Dallas, TX</p>
          </div>

          {/* second column start */}
          <div className="col-sm-6 mt-4">
            <h1 className="pt-1 pb-2 mt-4">
              <strong>Get in Touch</strong>
            </h1>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Enter Email Subject"
                />
              </div>

              <div class="form-group">
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
    </ContactState>
  );
};

export default Contact;

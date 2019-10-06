import React, { Fragment } from "react";

const jumbotronStyle = {
  marginBottom: "1rem",
  paddingTop: "15%",
  paddingBottom: "15%",
  backgroundSize: "cover",
  backgroundImage:
    "url(https://github.com/jkh911208/myblog/blob/master/client/src/components/images/jumbotron.jpg)"
};

const Jumbotron = () => {
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid" style={jumbotronStyle}>
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Jumbotron;

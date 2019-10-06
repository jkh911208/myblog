import React, { Fragment } from "react";
import Jumbotron from "../subcomponents/Jumbotron";

const Home = () => {
  return (
    <Fragment>
      <Jumbotron />
      <div className="container">
        <h1>Home</h1>
      </div>
    </Fragment>
  );
};

export default Home;

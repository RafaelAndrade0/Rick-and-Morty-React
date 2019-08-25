import React, { Fragment } from "react";
import Characters from "../characters/Characters";
import Search from "../characters/Search";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Characters />
    </Fragment>
  );
};

export default Home;

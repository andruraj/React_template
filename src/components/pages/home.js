import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
};

Home.propTypes = {
  // prop: PropTypes
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

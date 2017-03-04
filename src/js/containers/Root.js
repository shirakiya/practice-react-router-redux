import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Root = (props) => {
  const { app } = props;

  return (
    <div>
      <h1>Hello, {app.name}!!</h1>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="report">Report</Link></li>
        </ul>
      </div>
      {props.children}
    </div>
  );
};

Root.propTypes = {};

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);

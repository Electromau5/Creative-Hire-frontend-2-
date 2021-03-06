import React, { Component } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";

import "./App.css";

import CustomLayout from "./containers/Layout";
import GuestRouter from "./guestRoute";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div className="App">
        {localStorage.getItem("token") !== null ? (
          <Router>
            <CustomLayout {...this.props}>
              <BaseRouter />
            </CustomLayout>
          </Router>
        ) : (
          <Router>
            <CustomLayout {...this.props}>
              <GuestRouter />
            </CustomLayout>
          </Router>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: localStorage.getItem("token") !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import { Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import LandingPage from "./containers/LadingPage";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const GuestRouter = () => (
  <div>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/forgot-password/" component={ForgotPassword} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
  </div>
);

export default GuestRouter;

import React, { Component } from 'react';
import { Router } from "@reach/router";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Login from './Login';


function Application() {
    const user = null;
    return (
          user ?
          <ProfilePage />
        :
          <Router>
            <SignUp path="/signup" />
            <Login path="/login" />
            <PasswordReset path = "/passwordreset" />
          </Router>
  
    );
  }
  export default Application;
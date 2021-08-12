import React, { useState } from 'react';
import Auth from '../utils/auth';

const Homepage = () => {

  return (
    <div className="content">
      <div className="homepage-description">
        <h2>With Stonetop Character Creator, create and edit characters in the fantastical world of Stonetop!</h2>
        <h3 className="title">Sign up or login below to get started!</h3>
      </div>
      <div className="login-signup-container">
        <div className="login-container">
          <h2>Login</h2>
          <div className="descriptors-inputs-container">
            <div className="descriptors">
              <h3>Email:</h3>
              <h3>Password:</h3>
            </div>
            <div className="inputs">
              <input type="email" name="email" id='login-email'></input>
              <input type="password" name="password"></input>
            </div>
          </div>
          <button>Login</button>
        </div>
        <div className="signup-container">
          <h2>Signup</h2>
          <div className="descriptors-inputs-container">
            <div className="descriptors">
              <h3>Username:</h3>
              <h3>Email:</h3>
              <h3>Password:</h3>
            </div>
            <div className="inputs">
              <input type="text" name="username"></input>
              <input type="email" name="email" id='signup-email'></input>
              <input type="password" name="password"></input>
            </div>
          </div>
          <button>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage;
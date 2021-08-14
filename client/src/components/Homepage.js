import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import village from '../img/stonetop-village.jpeg';

const Homepage = () => {

  // SIGNUP

  const [signupState, setSignupState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);

  const handleSignupChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setSignupState({
      ...signupState,
      [name]: value,
    });
  };


  const handleSignup = async (event) => {
    event.preventDefault();
    console.log(signupState);

    try {
      const { data } = await addUser({
        variables: { ...signupState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // LOGIN

  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  });
  const [login] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleLoginChange = (event) => {

    const { name, value } = event.target;

    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  // submit form
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...loginState },
      });

      Auth.login(data.login.token);

    } catch (e) {
      console.error(e);
    }

    // clear form values
    setLoginState({
      email: '',
      password: '',
    });
  };

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
              <input type="email" name="email" id='login-email' defaultValue={loginState.email} onChange={handleLoginChange}></input>
              <input type="password" name="password" defaultValue={loginState.password} onChange={handleLoginChange}></input>
            </div>
          </div>
          <button onClick={handleLogin}>Login</button>
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
              <input type="text" name="username" defaultValue={signupState.username} onChange={handleSignupChange}></input>
              <input type="email" name="email" id='signup-email' defaultValue={signupState.email} onChange={handleSignupChange}></input>
              <input type="password" name="password" defaultValue={signupState.password} onChange={handleSignupChange}></input>
            </div>
          </div>
          <button onClick={handleSignup}>Signup</button>
        </div>
      </div>
      <div className="village-pic-container">
        <img src={village} className="village-pic" alt="The village of Stonetop"></img>
      </div>
    </div>
  )
}

export default Homepage;
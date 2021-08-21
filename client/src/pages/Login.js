import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import village from '../img/stonetop-village.jpeg';

const Login = () => {

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

      Auth.login(data.addUser.token);

      window.localStorage.removeItem("maxHP");
      window.localStorage.removeItem("currentHP");
      window.localStorage.removeItem("damage");
      window.localStorage.removeItem("playbook");
      window.localStorage.removeItem("background");
      window.localStorage.removeItem("drive");
      window.localStorage.removeItem("origin");
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("str");
      window.localStorage.removeItem("dex");
      window.localStorage.removeItem("int");
      window.localStorage.removeItem("wis");
      window.localStorage.removeItem("con");
      window.localStorage.removeItem("cha");
      window.localStorage.removeItem("id");
      window.location.assign('/');

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

      window.localStorage.removeItem("maxHP");
      window.localStorage.removeItem("currentHP");
      window.localStorage.removeItem("damage");
      window.localStorage.removeItem("playbook");
      window.localStorage.removeItem("background");
      window.localStorage.removeItem("drive");
      window.localStorage.removeItem("origin");
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("str");
      window.localStorage.removeItem("dex");
      window.localStorage.removeItem("int");
      window.localStorage.removeItem("wis");
      window.localStorage.removeItem("con");
      window.localStorage.removeItem("cha");
      window.localStorage.removeItem("id");
      window.location.assign('/');

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
      <div className="login-description">
        <h2 className="title">Sign up or log in below to get started!</h2>
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

export default Login;
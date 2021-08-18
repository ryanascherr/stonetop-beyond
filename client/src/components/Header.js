import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

function Header() {

    let logoutBtn;
    let loginBtn;
    let myCharactersBtn;
    let makeCharacterBtn;

    if (Auth.loggedIn()) {
        logoutBtn = <button className="logout" onClick={logMeOut}>Log Out</button>;

        loginBtn = <div></div>;

        myCharactersBtn = <Link to="/sheet">
        <button className="header-link">My Characters</button></Link>;

        makeCharacterBtn = <Link to="/make">
        <button className="header-link">Make Character</button></Link>;
    } else {
        logoutBtn = <div></div>;
        loginBtn = <Link to="/login">
        <button className="header-link">Log In</button></Link>;
        myCharactersBtn = <div></div>;
        makeCharacterBtn = <div></div>;
    }

    function logMeOut() {
        Auth.logout();
    }

    return (
        <header className="header">
            <h1>Stonetop Character Creator</h1>
            <div className="header-links">
                <Link to="/">
                    <button className="header-link">Homepage</button>
                </Link>
                {loginBtn}
                {makeCharacterBtn}
                {myCharactersBtn}
                <Link to="/test">
                    <button className="header-link">Test</button>
                </Link>
            </div>
            {logoutBtn}
        </header>
    )
}

export default Header;
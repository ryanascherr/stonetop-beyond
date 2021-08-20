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

        myCharactersBtn = <Link to="/my-characters">
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
            </div>
            {logoutBtn}
        </header>
    )
}

export default Header;
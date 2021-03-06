import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

function Header() {

    let logoutBtn;
    let loginBtn;
    let myCharactersBtn;
    let makeCharacterBtn;

    const removeInfo = () => {
        window.localStorage.removeItem("playbook");
        window.localStorage.removeItem("background");
        window.localStorage.removeItem("drive");
    }

    if (Auth.loggedIn()) {
        logoutBtn = <button className="logout" onClick={logMeOut}>Log Out</button>;
        loginBtn = <div></div>;
        myCharactersBtn = <Link to="/my-characters" className="header-link">My Characters</Link>;
        makeCharacterBtn = <Link to="/make" className="header-link" onClick={removeInfo}>Make Character
            </Link>;
    } else {
        logoutBtn = <div></div>;
        loginBtn = <Link to="/login" className="header-link">Log In</Link>;
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
        window.localStorage.removeItem("image");
    }

    return (
        <header className="header">
            <h1>Stonetop Beyond</h1>
            <div className="header-links">
                <Link to="/" className="header-link">
                Homepage
                </Link>
                {loginBtn}
                {makeCharacterBtn}
                {myCharactersBtn}
                {logoutBtn}
            </div>
        </header>
    )
}

export default Header;
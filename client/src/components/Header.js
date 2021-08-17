import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

function Header() {

    let logoutBtn;

    if (Auth.loggedIn()) {
        logoutBtn = <button className="logout" onClick={logMeOut}>Logout</button>
    } else {
        logoutBtn = <div></div>
    }

    function logMeOut() {
        Auth.logout();
    }

    return (
        <header className="header">
            <h1>Stonetop Character Creator</h1>
            <Link to="/">
                <button>Info</button>
            </Link>
            <Link to="/homepage">
                <button>Homepage</button>
            </Link>
            <Link to="/sheet">
                <button>Character Sheet</button>
            </Link>
            <Link to="/make">
                <button>Make Character</button>
            </Link>
            {logoutBtn}
        </header>
    )
}

export default Header;
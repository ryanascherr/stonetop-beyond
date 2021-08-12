import React from 'react';
import Auth from '../utils/auth';

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
            {logoutBtn}
        </header>
    )
}

export default Header;
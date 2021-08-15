import React from 'react';
import $ from 'jquery';

function NavTabs({ currentPage, handlePageChange }) {

    let checked = `&#9989;`;
    let unchecked = `&#10060;`;

    let playbook = localStorage.getItem('playbook');
    let background = localStorage.getItem('background');
    let drive = localStorage.getItem('drive');
    let origin = localStorage.getItem('origin');
    let str = localStorage.getItem('str');

    $(document).ready(function () {
        if (playbook) {
            $(".playbook-check").html(checked);
        } else {
            $(".playbook-check").html(unchecked);
        }
    
        if (background) {
            $(".background-check").html(checked);
        } else {
            $(".background-check").html(unchecked);
        }
    
        if (drive) {
            $(".drive-check").html(checked);
        } else {
            $(".drive-check").html(unchecked);
        }
    
        if (origin) {
            $(".origin-check").html(checked);
        } else {
            $(".origin-check").html(unchecked);
        }
    
        if (str) {
            $(".stat-check").html(checked);
        } else {
            $(".stat-check").html(unchecked);
        }
    })

    return (
        <div>
            <div className="checks">
                <h2 className="playbook-check"> </h2>
                <h2 className="background-check"> </h2>
                <h2 className="drive-check"> </h2>
                <h2 className="origin-check"> </h2>
                <h2 className="stat-check"> </h2>
                <h2 className=""> </h2>
            </div>
            <div className="nav-tabs">
                <a
                    href="#playbook"
                    onClick={() => handlePageChange('Playbook')}
                    id="playbook-nav"
                    className={currentPage === 'Playbook' ? 'nav-link active' : 'nav-link'}
                >
                    Playbook
                </a>
                <a
                    href="#background"
                    onClick={() => handlePageChange('Background')}
                    className={currentPage === 'Background' ? 'nav-link active' : 'nav-link'}
                >
                    Background
                </a>
                <a
                    href="#drive"
                    onClick={() => handlePageChange('Drive')}
                    className={currentPage === 'Drive' ? 'nav-link active' : 'nav-link'}
                >
                    Drive
                </a>
                <a
                    href="#origin"
                    onClick={() => handlePageChange('Origin')}
                    className={currentPage === 'Origin' ? 'nav-link active' : 'nav-link'}
                >
                    Origin
                </a>
                <a
                    href="#stat"
                    onClick={() => handlePageChange('Stat')}
                    className={currentPage === 'Stat' ? 'nav-link active' : 'nav-link'}
                >
                    Stats
                </a>
                <a
                    href="#finalize"
                    onClick={() => handlePageChange('Finalize')}
                    className={currentPage === 'Finalize' ? 'nav-link active' : 'nav-link'}
                >
                    Finalize
                </a>
            </div>
        </div>
    );
}

export default NavTabs;
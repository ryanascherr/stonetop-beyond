import React from 'react';
import $ from 'jquery';
import Auth from '../utils/auth';

function MakeCharacter({ currentPage, handlePageChange }) {

    if (!Auth.loggedIn) {
        window.location.assign('/');
    }

    let checked = `&#9989;`;
    let unchecked = `&#10060;`;

    let playbook = localStorage.getItem('playbook');
    let background = localStorage.getItem('background');
    let drive = localStorage.getItem('drive');
    let origin = localStorage.getItem('origin');
    let str = localStorage.getItem('str');

    // let percentComplete = 0;

    // if (playbook) {
    //     percentComplete++;
    //     console.log(percentComplete);
    // }
    // if (background) {
    //     percentComplete++;
    //     console.log(percentComplete);
    // }
    // if (drive) {
    //     percentComplete++;
    //     console.log(percentComplete);
    // }
    // if (origin) {
    //     percentComplete++;
    //     console.log(percentComplete);
    // }
    // if (str) {
    //     percentComplete++;
    //     console.log(percentComplete);
    // }

    // if (percentComplete === 0) {
    //     $(".progress-percent").removeClass("zero");
    //     $(".progress-percent").removeClass("one");
    //     $(".progress-percent").removeClass("two");
    //     $(".progress-percent").removeClass("three");
    //     $(".progress-percent").removeClass("four");
    //     $(".progress-percent").removeClass("five");
    //     $(".progress-percent").addClass("zero");
    // }
    // if (percentComplete === 1) {
    //     $(".progress-percent").removeClass("zero");
    //     $(".progress-percent").removeClass("one");
    //     $(".progress-percent").removeClass("two");
    //     $(".progress-percent").removeClass("three");
    //     $(".progress-percent").removeClass("four");
    //     $(".progress-percent").removeClass("five");
    //     $(".progress-percent").addClass("one");
    // }
    // if (percentComplete === 2) {
    //     $(".progress-percent").removeClass("zero");
    //     $(".progress-percent").removeClass("one");
    //     $(".progress-percent").removeClass("two");
    //     $(".progress-percent").removeClass("three");
    //     $(".progress-percent").removeClass("four");
    //     $(".progress-percent").removeClass("five");
    //     $(".progress-percent").addClass("two");
    // }
    // if (percentComplete === 3) {
    //     $(".progress-percent").removeClass("zero");
    //     $(".progress-percent").removeClass("one");
    //     $(".progress-percent").removeClass("two");
    //     $(".progress-percent").removeClass("three");
    //     $(".progress-percent").removeClass("four");
    //     $(".progress-percent").removeClass("five");
    //     $(".progress-percent").addClass("three");
    // }
    // if (percentComplete === 4) {
    //     $(".progress-percent").removeClass("zero");
    //     $(".progress-percent").removeClass("one");
    //     $(".progress-percent").removeClass("two");
    //     $(".progress-percent").removeClass("three");
    //     $(".progress-percent").removeClass("four");
    //     $(".progress-percent").removeClass("five");
    //     $(".progress-percent").addClass("four");
    // }
    // if (percentComplete === 5) {
    //     $(".progress-percent").removeClass("zero");
    //     $(".progress-percent").removeClass("one");
    //     $(".progress-percent").removeClass("two");
    //     $(".progress-percent").removeClass("three");
    //     $(".progress-percent").removeClass("four");
    //     $(".progress-percent").removeClass("five");
    //     $(".progress-percent").addClass("five");
    // }

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
        <div className="checks-nav">
            {/* <div className="progress-bar">
                <div className="progress-percent"></div>
            </div> */}
            <div className="checks">
                {/* checks */}
                <h2 className="playbook-check"> </h2>
                <h2 className="background-check"> </h2>
                <h2 className="drive-check"> </h2>
                <h2 className="origin-check"> </h2>
                <h2 className="stat-check"> </h2>
                <h2 className=""> </h2>
            </div>
            <div className="nav-tabs">
                {/* nav-tabs */}
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

export default MakeCharacter;
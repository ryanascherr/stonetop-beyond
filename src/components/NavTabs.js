import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="nav-tabs">
        <a
            href="#playbook"
            onClick={() => handlePageChange('Playbook')}
            className={currentPage === 'Playbook' ? 'nav-link active' : 'nav-link'}
        >
            Playbook
        </a>
        <a
            href="#background"
            onClick={() => handlePageChange('Background')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Background' ? 'nav-link active' : 'nav-link'}
        >
            Background
        </a>
        <a
            href="#drive"
            onClick={() => handlePageChange('Drive')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Drive' ? 'nav-link active' : 'nav-link'}
        >
            Drive
        </a>
        <a
            href="#origin"
            onClick={() => handlePageChange('Origin')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Origin' ? 'nav-link active' : 'nav-link'}
        >
            Origin
        </a>
        <a
            href="#stat"
            onClick={() => handlePageChange('Stat')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Stat' ? 'nav-link active' : 'nav-link'}
        >
            Stat
        </a>
    </div>
  );
}

export default NavTabs;
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
    </div>
  );
}

export default NavTabs;
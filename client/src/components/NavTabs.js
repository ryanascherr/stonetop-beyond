import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="nav-tabs">
        <a
            href="#playbook"
            onClick={() => handlePageChange('Playbook')}
            className={currentPage === 'Playbook' ? 'nav-link left active' : 'left nav-link'}
        >
            Playbook
        </a>
        <a
            href="#background"
            onClick={() => handlePageChange('Background')}
            className={currentPage === 'Background' ? 'nav-link left active' : 'nav-link left'}
        >
            Background
        </a>
        <a
            href="#drive"
            onClick={() => handlePageChange('Drive')}
            className={currentPage === 'Drive' ? 'nav-link left active' : 'nav-link left'}
        >
            Drive
        </a>
        <a
            href="#origin"
            onClick={() => handlePageChange('Origin')}
            className={currentPage === 'Origin' ? 'nav-link right active' : 'nav-link right'}
        >
            Origin
        </a>
        <a
            href="#stat"
            onClick={() => handlePageChange('Stat')}
            className={currentPage === 'Stat' ? 'nav-link right active' : 'nav-link right'}
        >
            Stats
        </a>
        <a
            href="#finalize"
            onClick={() => handlePageChange('Finalize')}
            className={currentPage === 'Finalize' ? 'nav-link right active' : 'nav-link right'}
        >
            Finalize
        </a>
    </div>
  );
}

export default NavTabs;
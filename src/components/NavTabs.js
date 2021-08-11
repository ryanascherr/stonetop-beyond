import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#playbook"
              onClick={() => handlePageChange('Playbook')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Playbook' ? 'nav-link active' : 'nav-link'}
            >
              Playbook
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#background"
              onClick={() => handlePageChange('Background')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Background' ? 'nav-link active' : 'nav-link'}
            >
              Background
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#drive"
              onClick={() => handlePageChange('Drive')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Drive' ? 'nav-link active' : 'nav-link'}
            >
              Drive
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#origin"
              onClick={() => handlePageChange('Origin')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Origin' ? 'nav-link active' : 'nav-link'}
            >
              Origin
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#stat"
              onClick={() => handlePageChange('Stat')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Stat' ? 'nav-link active' : 'nav-link'}
            >
              Background
            </a>
          </li>
        </ul>
    </div>
  );
}

export default NavTabs;
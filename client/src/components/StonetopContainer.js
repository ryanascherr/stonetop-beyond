import React, {useState} from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Header from './Header';
import Homepage from './Homepage';
import Playbook from '../pages/Playbook';
import Background from '../pages/Background';
import Drive from '../pages/Drive';
import Origin from '../pages/Origin';
import Stat from '../pages/Stat';
import Finalize from '../pages/Finalize';
import CharacterSheet from './CharacterSheet';
import "../style.css";
import Auth from '../utils/auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function StonetopContainer() {

  let [currentPage, setCurrentPage] = useState('');

  if (currentPage === "" && window.location.hash) {
    currentPage = window.location.hash;
    currentPage = currentPage.slice(1);
    currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    console.log(currentPage);
  }

  const renderPage = () => {
    if (currentPage === 'Background') {
      return <Background />;
    }
    if (currentPage === 'Drive') {
      return <Drive />;
    }
    if (currentPage === 'Origin') {
      return <Origin />;
    }
    if (currentPage === 'Stat') {
      return <Stat />;
    }
    if (currentPage === 'Finalize') {
      return <Finalize />;
    }
    return <Playbook />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  let landingPage = "";
  let render;

  if (Auth.loggedIn()) {
    console.log({currentPage});
    landingPage = <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    render = renderPage();

  } else {
    landingPage = <Homepage />
  }

  return (
    <div>
        <Header />
        {/* {landingPage}
        {render} */}
        {/* <CharacterSheet /> */}
        <div className="">
            <Route exact path="/sheet">
              <CharacterSheet />
            </Route>
            <Route exact path="/make">
              {landingPage}
              {render}
            </Route>
        </div>
        <Footer />
    </div>
  );
}
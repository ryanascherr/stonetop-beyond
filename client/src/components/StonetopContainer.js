import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Playbook from '../pages/Playbook';
import Background from '../pages/Background';
import Drive from '../pages/Drive';
import Origin from '../pages/Origin';
import Stat from '../pages/Stat';
import Finalize from '../pages/Finalize';
import CharacterSheet from './CharacterSheet';
import MyCharacters from './MyCharacters';
import Misc from '../pages/Misc';
import Moves from '../pages/Moves';
import BasicMoves from '../pages/BasicMoves';
import CharacterStats from '../pages/CharacterStats';
import "../style.css";
import Homepage from './Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { useParams } from 'react-router-dom';

export default function StonetopContainer() {

  let [currentPage, setCurrentPage] = useState('');

  let [currentCharacterPage, setCharacterCurrentPage] = useState('');

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

  const renderCharacterSheet = () => {
    if (currentCharacterPage === 'Misc') {
      return <Misc />;
    }
    if (currentCharacterPage === 'Moves') {
      return <Moves />;
    }
    if (currentCharacterPage === 'BasicMoves') {
      return <BasicMoves />;
    }
    return <CharacterStats />;
  };

  const handleCharacterPageChange = (page) => setCharacterCurrentPage(page);

  // if (Auth.loggedIn()) {
  //   landingPage = <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
  //   render = renderPage();

  // } else {
  //   landingPage = <Login />
  // }

  const { username: userParam } = useParams();

  let { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  localStorage.setItem('username', user.username);

  return (
    <div>
      <Header />
      <div className="">
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/my-characters">
          <MyCharacters />
        </Route>
        <Route exact path="/sheet">
          <CharacterSheet currentPage={currentCharacterPage} handleCharacterPageChange={handleCharacterPageChange}/>
          {renderCharacterSheet()}
        </Route>
        <Route exact path="/make">
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </Route>
      </div>
      <Footer />
    </div>
  );
}
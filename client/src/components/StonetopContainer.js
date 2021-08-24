import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "../style.css";

import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import MakeCharacters from '../pages/MakeCharacter';
import MyCharacters from '../pages/MyCharacters';
import CharacterSheet from '../pages/CharacterSheet';

import Footer from './Footer';
import Header from './Header';
import Playbook from './Playbook';
import Background from './Background';
import Drive from './Drive';
import Origin from './Origin';
import Stat from './Stat';
import Finalize from './Finalize';
import CharacterStats from './CharacterStats';
import Misc from './Misc';
import Moves from './Moves';
import BasicMoves from './BasicMoves';

export default function StonetopContainer() {

  let [currentPage, setCurrentPage] = useState('');

  if (currentPage === "" && window.location.hash) {
    currentPage = window.location.hash;
    currentPage = currentPage.slice(1);
    currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
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

  let [currentCharacterPage, setCharacterCurrentPage] = useState('');

  if (currentCharacterPage === "" && window.location.hash) {
    currentCharacterPage = window.location.hash;
    currentCharacterPage = currentCharacterPage.slice(1);
    currentCharacterPage = currentCharacterPage.charAt(0).toUpperCase() + currentCharacterPage.slice(1);
  }

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

  const handleCharacterPageChange = (page2) => setCharacterCurrentPage(page2);

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
        <Route exact path="/characters/:characterId">
          <CharacterSheet currentPage={currentCharacterPage} handleCharacterPageChange={handleCharacterPageChange}/>
          {renderCharacterSheet()}
        </Route>
        <Route exact path="/make">
          <MakeCharacters currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </Route>
      </div>
      <Footer />
    </div>
  );
}
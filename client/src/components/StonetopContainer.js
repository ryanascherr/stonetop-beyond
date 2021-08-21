import React, { useState } from 'react';
import MakeCharacters from '../pages/MakeCharacter';
import Footer from './Footer';
import Header from './Header';
import Login from '../pages/Login';
import Playbook from './Playbook';
import Background from './Background';
import Drive from './Drive';
import Origin from './Origin';
import Stat from './Stat';
import Finalize from './Finalize';
import CharacterSheet from '../pages/CharacterSheet';
import MyCharacters from '../pages/MyCharacters';
import Misc from './Misc';
import Moves from './Moves';
import BasicMoves from './BasicMoves';
import CharacterStats from './CharacterStats';
import "../style.css";
import Homepage from '../pages/Homepage';
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
  }

  if (currentCharacterPage === "" && window.location.hash) {
    currentCharacterPage = window.location.hash;
    currentCharacterPage = currentCharacterPage.slice(1);
    currentCharacterPage = currentCharacterPage.charAt(0).toUpperCase() + currentCharacterPage.slice(1);
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
          <MakeCharacters currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </Route>
      </div>
      <Footer />
    </div>
  );
}
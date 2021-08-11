import React  from 'react';
import Footer from './Footer';
import Header from './Header';
import Homepage from './Homepage';
import Playbooks from './Playbooks';
import "../style.css";
// import Auth from '../utils/auth';

export default function PupotonContainer() {

  return (
    <div>
        <Header />
        <Homepage />
        <Footer />
    </div>
  );
}
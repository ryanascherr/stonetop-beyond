import React, {useState} from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Header from './Header';
// import Homepage from './Homepage';
import Playbook from './pages/Playbook';
import Background from './pages/Background';
import Drive from './pages/Drive';
import Origin from './pages/Origin';
import Stat from './pages/Stat';
import Finalize from './pages/Finalize';
import "../style.css";
// import Auth from '../utils/auth';

export default function StonetopContainer() {

  const [currentPage, setCurrentPage] = useState('Playbook');

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

  return (
    <div>
        <Header />
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
    </div>
  );
}
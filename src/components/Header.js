

import React, { useState } from 'react';
import Navigation from '../Navigation';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';


function Header() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage)
    {
      case 'Portfolio':
        return <Portfolio/>;
      case 'Resume':
        return <Resume/>;
      case 'Contact':
        return <Contact/>;
      default:
        return <About/>;
    }
  };

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Header;

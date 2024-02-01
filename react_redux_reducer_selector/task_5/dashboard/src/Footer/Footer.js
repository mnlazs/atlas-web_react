import React from "react";
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer() {
  const handleContactClick = () => {
    // Lógica para manejar el clic en "Contact us"
  };

  return (
    <AppContext.Consumer>
      {({ user }) => (
        <footer className="Footer-main">
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
          {user.isLoggedIn && (
            <p>
              <button onClick={handleContactClick}>Contact us</button>
            </p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;

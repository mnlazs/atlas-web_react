import React from "react";
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext'; // Asegúrate de que la ruta de importación sea correcta

function Footer() {
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <footer className="Footer-main">
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
          {user.isLoggedIn && (
            <p>
              <a href="#">Contact us</a>
            </p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;

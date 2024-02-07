import React from "react";
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';
import { connect } from 'react-redux';

function Footer() {
  const handleContactClick = () => {
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

// Crea la función mapStateToProps
const mapStateToProps = (state) => ({
  user: state.uiReducer.user, // Ajusta este camino según la estructura de tu estado de Redux
});

// Conecta el componente Footer a Redux
export default connect(mapStateToProps)(Footer);

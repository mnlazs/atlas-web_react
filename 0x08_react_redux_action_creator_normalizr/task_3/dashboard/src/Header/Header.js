import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext'; // Asegúrate de que la ruta de importación sea correcta

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <div>
        <div className={css(styles.header)}>
          <img src="logo.png" alt="Logo" className={css(styles.logo)} />
          <h1 className={css(styles.title)}>Dashboard</h1>
        </div>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            Welcome {user.email} (<span onClick={logOut} style={{cursor: 'pointer'}}>logout</span>)
          </div>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  title: {
    fontSize: '24px',
  },
  logoutSection: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
});

export default Header;

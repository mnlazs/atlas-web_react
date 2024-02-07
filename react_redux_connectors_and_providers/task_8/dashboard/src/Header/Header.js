import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { logout } from '../actions/authActions';

class Header extends Component {
  render() {
    const { user, logout } = this.props; // Usa destructuring para acceder a las props

    return (
      <div>
        <div className={css(styles.header)}>
          <img src="logo.png" alt="Logo" className={css(styles.logo)} />
          <h1 className={css(styles.title)}>Dashboard</h1>
        </div>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            Welcome {user.email} (<span onClick={logout} style={{cursor: 'pointer'}}>logout</span>)
          </div>
        )}
      </div>
    );
  }
}

// función mapStateToProps
const mapStateToProps = (state) => ({
  user: state.uiReducer.user, // Ajusta este camino según la estructura de tu estado de Redux
});

// Define mapDispatchToProps para conectar el creador de acción logout
const mapDispatchToProps = {
  logout, // Esto automáticamente enlazará el creador de acción logout a dispatch
};

// Estilos usando Aphrodite
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

// Conecta el componente Header a Redux
export default connect(mapStateToProps, mapDispatchToProps)(Header);

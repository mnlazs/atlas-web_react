import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <div className={css(styles.header)}>
      <img src="logo.png" alt="Logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>Dashboard</h1>
    </div>
  );
};

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
});

export default Header;

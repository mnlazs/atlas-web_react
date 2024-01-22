import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <div className={css(styles.loginContainer)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.inputGroup)}>
        <label htmlFor='email' className={css(styles.label)}>Email:</label>
        <input type='email' id='email' name='email' className={css(styles.input)}/>
      </div>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input type="password" id="password" name="password" className={css(styles.input)}/>
      </div>
      <button className={css(styles.loginButton)}>OK</button>
    </div>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    fontSize: '16px',
    fontFamily: 'Franklin Gothic Medium, Arial, sans-serif',
    width: '100%',
    textAlign: 'center',
    paddingTop: '20px',
    margin: '200px 0',
  },
  inputGroup: {
    margin: '10px 0',
    '@media (max-width: 900px)': {
      display: 'block',
    },
  },
  label: {
    marginRight: '10px',
    '@media (max-width: 900px)': {
      display: 'block',
      marginBottom: '5px',
    },
  },
  input: {
    marginRight: '10px',
    '@media (max-width: 900px)': {
      display: 'block',
      marginBottom: '10px',
    },
  },
  loginButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      display: 'block',
      width: '100%',
      margin: '10px 0',
    },
  },
});

export default Login;

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <div className={css(styles.loginContainer)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'> Email: </label>
      <input type='email' id='email' name='email'/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
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
  loginButton: {
    backgroundColor: 'blue', // Add your button styling here
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  // Add any additional styles as needed
});

export default Login;

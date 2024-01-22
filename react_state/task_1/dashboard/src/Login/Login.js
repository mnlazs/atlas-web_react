import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.updateEnableSubmit);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.updateEnableSubmit);
  }

  updateEnableSubmit() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  render() {
    return (
      <div className={css(styles.loginContainer)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.inputGroup)}>
            <label htmlFor='email' className={css(styles.label)}>Email:</label>
            <input 
              type='email' 
              id='email' 
              name='email' 
              value={this.state.email}
              onChange={this.handleChangeEmail}
              className={css(styles.input)}
            />
          </div>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="password" className={css(styles.label)}>Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={this.state.password}
              onChange={this.handleChangePassword}
              className={css(styles.input)}
            />
          </div>
          <input 
            type="submit" 
            className={css(styles.loginButton)} 
            value="OK" 
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
    );
  }
}

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

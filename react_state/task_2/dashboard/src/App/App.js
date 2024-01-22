import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import AppContext from './AppContext'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.logOut();
    }
  }

  toggleDrawer() {
    this.setState(prevState => ({ displayDrawer: !prevState.displayDrawer }));
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { displayDrawer, user } = this.state;
    const { isLoggedIn } = user;

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className="menuItem" onClick={this.handleDisplayDrawer}>N O T I F I C A C I O N E S</div>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={listNotifications}
        />

        <div className={css(styles.app)}>
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Your random text here</p>
          </BodySection>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

// estilos definidos con Aphrodite

const styles = StyleSheet.create({
app: {
  textAlign: 'center',
  backgroundColor: '#f3f3f3',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'black',
},
menuItem: {
  backgroundColor: '#282c34',
    minHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
},
body: {
  fontSize: '16px',
  fontFamily: "'Franklin Gothic Medium', 'Arial', sans-serif",
  width: '100%', // Ocupa todo el ancho disponible
  textAlign: 'center',
  paddingTop: '20px', // Espacio en la parte superior
  margin: '200px 0', // Añade un margen arriba y abajo
},

footer: {
  borderTop: '2px solid #000',
  fontFamily: "'Franklin Gothic Medium', 'Arial', sans-serif",
  fontStyle: 'italic',
},
});

export default App;

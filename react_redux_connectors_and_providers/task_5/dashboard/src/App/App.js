import React, { Component } from 'react';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActions';
import { connect } from 'react-redux';
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
import propTypes from 'defaultProps';
import PropTypes from 'prop-types';
import { loginRequest } from '../actions/uiActionCreators';

const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.isLoggedIn, // Asume que uiReducer es tu reducer y tiene una propiedad isLoggedIn
  displayDrawer: state.uiReducer.listNotificationDrawerVisible, // Asume que uiReducer maneja este estado
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
      ]
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  handleDisplayDrawer() {
    this.props.dispatch(showDrawer());
  }

  handleHideDrawer() {
    this.props.dispatch(hideDrawer());
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.logOut();
    }
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(notification => notification.id !== id)
    });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  } 


  render() {
    const { user, listNotifications } = this.state;
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className="menuItem" onClick={displayNotificationDrawer}>Toggle Notifications</div>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={hideNotificationDrawer}
          listNotifications={listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
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

// definicion de  propTypes y defaultProps
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired, // Asegúrate de incluir la prop login aquí
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};


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
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);

//biblioteca de importacion 
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
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  toggleDrawer() {
    this.setState(prevState => ({ displayDrawer: !prevState.displayDrawer }));
  }

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];

    return (
      <>
        <div className="menuItem" onClick={this.toggleDrawer}>Toggle Notifications</div>
        <Notifications displayDrawer={displayDrawer} listNotifications={listNotifications} />
        <div className={css(styles.app)}>
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Your random text here</p>
          </BodySection>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

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

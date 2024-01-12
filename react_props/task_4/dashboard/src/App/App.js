import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Asegúrate de que esté bien escrito "PropTypes"
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  const [displayDrawer, setDisplayDrawer] = useState(false);

  const toggleDrawer = () => {
    setDisplayDrawer(!displayDrawer);
  };

  return (
    <>
      <div className="menuItem" onClick={toggleDrawer}>Toggle Notifications</div>
      {displayDrawer && <Notifications />}
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;

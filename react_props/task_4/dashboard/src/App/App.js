import React from 'react';
import Protypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';


function App({ isLoggedIn}) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />]
        {isLoggedIn ? <CourseList /> : <Login />}
        <Login />
        <Footer />
      </div>
    </>
  );
}

App.prototype = {
  isLoggedIn: Protypes.bool
};

App.prototype = {
  isLoggedIn: false
};

export default App;

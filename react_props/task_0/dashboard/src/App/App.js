import React from 'react';
import logo from './atlas_logo.webp';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';


function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <body className="App-body">
          <Login />
        </body>
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default App;

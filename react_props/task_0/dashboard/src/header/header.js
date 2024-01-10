import React from 'react';
import logo from './atlas_logo.webp'; // Asegúrate de reemplazar 'path_to_holberton_logo.svg' con la ruta correcta al logo de Holberton
import './header.css';
import { getFullYear, getFooterCopy } from './utils';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
      </body>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default Header;

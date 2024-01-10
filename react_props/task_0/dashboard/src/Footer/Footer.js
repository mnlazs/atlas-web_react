import React from 'react';
import logo from './atlas_logo.webp'; // Asegúrate de reemplazar 'path_to_holberton_logo.svg' con la ruta correcta al logo de Holberton
import './footer.css';
import { getFullYear, getFooterCopy } from './utils';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">
      </body>
      <footer className="App-footer">
        <p>{getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default footer;

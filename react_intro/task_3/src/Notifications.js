// task_2/dashboard/src/Notifications.js
import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png'; // Importa la imagen close-icon.png
import { getLatestNotification } from './utils';

export default function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{ float: 'right' }} // Estilo inline para colocar el botón a la derecha
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="Close Icon" />
      </button>
      <p>Here is the list of notifications:</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }} // Usar dangerouslySetInnerHTML para mostrar HTML
        ></li>
      </ul>
    </div>
  );
}

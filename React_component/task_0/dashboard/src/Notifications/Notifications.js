import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { NotificationItemShape } from './NotificationItemShape'; // Asegúrate de que la ruta es correcta
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer, listNotifications }) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button style={{ float: 'right' }} aria-label="Close" onClick={handleButtonClick}>
            <img src={closeIcon} alt="Close Icon" />
          </button>
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications:</p>
              <ul>
                {listNotifications.map(notification => (
                  <NotificationItem key={notification.id} {...notification} />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;

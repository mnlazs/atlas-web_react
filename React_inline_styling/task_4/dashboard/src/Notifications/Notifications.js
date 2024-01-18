import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css, keyframes } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import  NotificationItemShape  from './NotificationItemShape';
import NotificationItem from './NotificationItem';


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleButtonClick() {
    console.log('Close button has been clicked');
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        {displayDrawer ? null : (
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.notificationsPanel)}>
            <button onClick={this.handleButtonClick} className={css(styles.closeButton)}>
              <img src={closeIcon} alt="Close" className={css(styles.closeIcon)} />
            </button>
            {listNotifications.length === 0 ? (
              <p>No new notifications</p>
            ) : (
              <ul>
                {listNotifications.map(({ id, type, value, html }) => (
                <NotificationItem
                key={id}
                type={type}
                value={value}
                html={html}
                markAsRead={this.markAsRead}
                id={id}
                />
                ))}
              </ul>
            )}
          </div>
        )}
      </>
    );
  }
}

// Definición de las animaciones
const bounce = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

const fadeIn = keyframes({
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  },
});

// Estilos del componente
const styles = StyleSheet.create({
  notificationsPanel: {
    border: '2px solid rgb(9, 195, 37)',
    padding: '10px',
    fontFamily: 'Franklin Gothic Medium, Arial, sans-serif',
    fontStyle: 'italic',
    color: 'rgb(9, 195, 37)',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    maxWidth: '300px',
    position: 'fixed',
    top: '30px',
    right: '10px',
    zIndex: '100',
  },
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
  closeButton: {
    float: 'right',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: '5px',
  },
  closeIcon: {
    width: '15px',
    height: '15px',
  },
  // ... otros estilos ...
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;

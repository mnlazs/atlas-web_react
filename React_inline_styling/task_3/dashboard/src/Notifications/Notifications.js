import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import { NotificationItemShape } from './NotificationItemShape';
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
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notificationsPanel)}>
            {/* ... el resto de tu componente ... */}
          </div>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  notificationsPanel: {
    border: '2px solid rgb(9, 195, 37)',
    padding: '10px',
    fontFamily: 'Franklin Gothic Medium, Arial, sans-serif',
    fontStyle: 'italic',
    color: 'rgb(9, 195, 37)',
    backgroundColor: 'lightgray', // You can customize the background color here
    borderRadius: '5px', // Customize border radius
    maxWidth: '300px', // Customize maximum width
    position: 'fixed',
    top: '30px',
    right: '10px',
    zIndex: '100',
  },
  closeIcon: {
    float: 'right',
    cursor: 'pointer',
  },
  notificationList: {
    listStyle: 'none',
    padding: '0',
  },
  notificationItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  priorityDefault: {
    color: 'rgb(80, 4, 231)',
  },
  priorityUrgent: {
    color: 'red',
  },
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

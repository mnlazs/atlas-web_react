import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
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
          <div className="Notifications">
            <button style={{ float: 'right' }} aria-label="Close" onClick={this.handleButtonClick}>
              <img src={closeIcon} alt="Close Icon" />
            </button>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications:</p>
                <ul>
                  {listNotifications.map(notification => (
                    <NotificationItem
                      key={notification.id}
                      {...notification}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';

const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`;

const NotificationsPanel = styled.div`
  border: 2px solid rgb(9, 195, 37);12332e3 
  padding: 10px;
  font-family: Franklin Gothic Medium, Arial, sans-serif;
  font-style: italic;
  color: rgb(9, 195, 37);
  background-color: lightgray;
  border-radius: 5px;
  max-width: 300px;
  position: fixed;
  top: 30px;
  right: 10px;
  z-index: 100;
`;

const MenuItem = styled.div`
  float: right;
  background-color: #fff8f8;
  cursor: pointer;
  &:hover {
    animation: ${fadeIn} 1s, ${bounce} 0.5s;
    animation-iteration-count: 3;
  }
`;

const CloseButton = styled.button`
  float: right;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;
`;

const CloseIcon = styled.img`
  width: 15px;
  height: 15px;
`;

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length
        || nextProps.displayDrawer !== this.props.displayDrawer;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleButtonClick() {
    console.log('Close button has been clicked');
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
        {!displayDrawer && (
          <MenuItem onClick={handleDisplayDrawer}>  //aqui se añade el elemento OnClick
            <p>Your notifications</p>
          </MenuItem>
        )}
        {displayDrawer && (
          <NotificationsPanel>
            <CloseButton onClick={this.handleHideDrawer}>
              <CloseIcon src={closeIcon} alt="Close" />
            </CloseButton>
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
          </NotificationsPanel>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
};

export default Notifications;

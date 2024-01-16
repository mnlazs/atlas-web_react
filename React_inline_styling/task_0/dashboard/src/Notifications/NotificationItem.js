import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    const listItemContent = html ? (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
    ) : (
      <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>
    );

    return listItemContent;
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;

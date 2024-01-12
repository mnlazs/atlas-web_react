import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  const listItemContent = html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  ) : (
    <li data-notification-type={type}>{value}</li>
  );

  return listItemContent;
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;

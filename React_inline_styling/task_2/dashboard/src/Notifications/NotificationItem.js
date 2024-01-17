import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
  notifications: {
    border: '2px solid rgb(9, 195, 37)',
    padding: '10px',
    fontFamily: 'Franklin Gothic Medium, Arial, sans-serif',
    fontStyle: 'italic',
    color: 'rgb(9, 195, 37)',
  },
  default: {
    color: 'rgb(80, 4, 231)',
  },
  urgent: {
    color: 'red',
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;

    // Aplicar estilos basados en el tipo
    const style = type === 'default' ? styles.default : styles.urgent;

    const listItemContent = html ? (
      <li
        className={css(style)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
    ) : (
      <li
        className={css(style)}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );

    return (
      <div className={css(styles.notifications)}>
        <ul>
          {listItemContent}
        </ul>
      </div>
    );
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

export default NotificationItem;

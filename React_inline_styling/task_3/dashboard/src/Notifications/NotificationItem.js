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
  // Nuevos estilos
  notificationItem: {
    width: '100%', // Toma todo el ancho de la pantalla
    borderBottom: '1px solid black', // Borde negro en la parte inferior
    fontSize: '20px', // Tamaño de fuente de 20px
    padding: '10px 8px', // Padding de 10px en la parte superior e inferior, 8px en los lados
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;

    // Aplicar estilos basados en el tipo
    const style = [type === 'default' ? styles.default : styles.urgent, styles.notificationItem];

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

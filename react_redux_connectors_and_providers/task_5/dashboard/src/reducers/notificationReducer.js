import { fromJS } from 'immutable'; // Importa fromJS si decides usar Immutable para el estado
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE, // Asegúrate de haber definido este tipo de acción
} from './notificationActionTypes';

// Estado inicial con Immutable
const initialState = fromJS({
  filter: 'DEFAULT',
  notifications: [],
  loading: false, // Atributo de carga añadido al estado inicial
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Actualiza el estado con los datos de las notificaciones, marcándolos como no leídos
      return state.mergeDeep({
        notifications: action.data.map(notification => ({ ...notification, isRead: false })),
      });

    case MARK_AS_READ:
      // Marca una notificación como leída
      return state.update('notifications', notifications =>
        notifications.map(notification =>
          notification.get('id') === action.index ? notification.set('isRead', true) : notification
        ),
      );

    case SET_TYPE_FILTER:
      // Actualiza el filtro
      return state.set('filter', action.filter);

    case SET_LOADING_STATE:
      // Actualiza el estado de carga
      return state.set('loading', action.isLoading);

    default:
      return state;
  }
};

export default notificationReducer;

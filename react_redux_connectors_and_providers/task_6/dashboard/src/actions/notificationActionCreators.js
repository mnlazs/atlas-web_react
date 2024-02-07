import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

// Acciones existentes
function markAsAread(index) {
  return { type: MARK_AS_READ, index };
}

function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}

// Nuevas acciones creadoras
export function setLoadingState(isLoading) {
  return { type: SET_LOADING_STATE, isLoading };
}

export function setNotifications(notifications) {
  return { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications };
}

export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true)); // Inicia el estado de carga

    // Realiza la petición para obtener las notificaciones
    fetch('/notifications.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setNotifications(data)); // Establece las notificaciones con los datos obtenidos
      })
      .catch(error => console.error("Fetching notifications failed", error))
      .finally(() => {
        dispatch(setLoadingState(false)); // Finaliza el estado de carga
      });
  };
}

// "Ligando" las acciones (si aún necesitas estas versiones ligadas)
export const boundMarkAsRead = (index) => dispatch => dispatch(markAsAread(index));
export const boundSetNotificationFilter = (filter) => dispatch => dispatch(setNotificationFilter(filter));

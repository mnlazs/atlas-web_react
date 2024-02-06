import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

function markAsAread(index) {
  return { type: MARK_AS_READ, index };
}

function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}

// "Ligando" las acciones
export const boundMarkAsRead = (index) => markAsAread.bind(null, index);
export const boundSetNotificationFilter = (filter) => setNotificationFilter.bind(null, filter);

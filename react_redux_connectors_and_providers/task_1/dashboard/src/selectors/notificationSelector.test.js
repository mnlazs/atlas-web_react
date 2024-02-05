import { fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
} from './notificationSelector';

// Estado de prueba simulado
const state = fromJS({
  notifications: {
    filter: 'DEFAULT',
    notifications: {
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: true }
    }
  }
});

describe('notificationSelector', () => {
  it('filterTypeSelected works as expected', () => {
    const selectedFilter = filterTypeSelected(state);
    expect(selectedFilter).toEqual('DEFAULT');
  });
});

it('getNotifications returns a list of the message entities within the reducer', () => {
  const notifications = getNotifications(state);
  expect(notifications.toJS()).toEqual({
    1: { id: 1, type: 'default', value: 'New course available', isRead: false },
    2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
    3: { id: 3, type: 'urgent', value: 'New data available', isRead: true }
  });
});


it('getUnreadNotifications returns a list of the message entities within the reducer', () => {
  const unreadNotifications = getUnreadNotifications(state);
  expect(unreadNotifications.toJS()).toEqual({
    1: { id: 1, type: 'default', value: 'New course available', isRead: false },
    2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false }
  });
});

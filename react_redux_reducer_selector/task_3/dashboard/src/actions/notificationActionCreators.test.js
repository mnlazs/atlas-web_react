// src/actions/notificationActionCreators.test.js

import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('notificationActionCreators', () => {
  it('markAsAread returns the correct action object', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };
    expect(markAsAread(index)).toEqual(expectedAction);
  });

  it('setNotificationFilter returns the correct action object for default filter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter,
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });

  // Puedes agregar otro test para el filtro URGENT si es necesario
});


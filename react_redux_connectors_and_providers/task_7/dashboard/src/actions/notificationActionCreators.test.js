import { setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

describe('notificationActionCreators', () => {
  it('setLoadingState crea la acción correcta', () => {
    const expectedAction = { type: SET_LOADING_STATE, isLoading: true };
    expect(setLoadingState(true)).toEqual(expectedAction);
  });

  it('setNotifications crea la acción correcta', () => {
    const testData = [{ id: 1, value: 'Test Notification' }];
    const expectedAction = { type: FETCH_NOTIFICATIONS_SUCCESS, data: testData };
    expect(setNotifications(testData)).toEqual(expectedAction);
  });
});

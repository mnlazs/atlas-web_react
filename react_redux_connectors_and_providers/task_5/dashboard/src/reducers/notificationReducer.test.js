import notificationReducer from './notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('debería retornar el estado inicial', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      filter: 'DEFAULT',
      notifications: [],
      loading: false,
    });
  });

  it('SET_LOADING_STATE debería actualizar el estado de loading correctamente', () => {
    const initialState = { loading: false };
    const action = { type: SET_LOADING_STATE, isLoading: true };
    const expectedState = { loading: true };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('FETCH_NOTIFICATIONS_SUCCESS debería actualizar el estado con las notificaciones', () => {
    const initialState = { notifications: [] };
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [{ id: 1, type: 'default', value: 'New course available' }],
    };
    const expectedState = {
      notifications: [{ id: 1, type: 'default', value: 'New course available', isRead: false }],
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});

import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './uiActionCreators';
import * as actionTypes from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('dispatches LOGIN and LOGIN_SUCCESS when login is successful', () => {
        fetchMock.getOnce('/login-success.json', { body: {}, status: 200 });

        const expectedActions = [
            { type: actionTypes.LOGIN }, // Asegúrate de que la acción LOGIN esté definida
            { type: actionTypes.LOGIN_SUCCESS }
        ];

        const store = mockStore({});

        return store.dispatch(actions.loginRequest('user@example.com', 'password'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('dispatches LOGIN and LOGIN_FAILURE when login fails', () => {
        fetchMock.getOnce('/login-success.json', { status: 500 });

        const expectedActions = [
            { type: actionTypes.LOGIN }, // Asegúrate de que la acción LOGIN esté definida
            { type: actionTypes.LOGIN_FAILURE }
        ];

        const store = mockStore({});

        return store.dispatch(actions.loginRequest('user@example.com', 'password'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});


describe('UI Action Creators', () => {
  it('login creates the correct action', () => {
    const action = login('user@example.com', 'password123');
    expect(action).toEqual({
      type: LOGIN,
      user: { email: 'user@example.com', password: 'password123' },
    });
  });

  it('logout creates the correct action', () => {
    const action = logout();
    expect(action).toEqual({ type: LOGOUT });
  });

  it('displayNotificationDrawer creates the correct action', () => {
    const action = displayNotificationDrawer();
    expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('hideNotificationDrawer creates the correct action', () => {
    const action = hideNotificationDrawer();
    expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});

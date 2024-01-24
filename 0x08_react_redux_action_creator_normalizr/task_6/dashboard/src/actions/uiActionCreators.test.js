import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

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

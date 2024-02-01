import { Map } from 'inmutable';

// Estado inicial
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}),
});

// Reducer
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', true);
    case 'HIDE_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', false);
    case 'LOGIN_SUCCESS':
      return state.set('isUserLoggedIn', true);
    case 'LOGIN_FAILURE':
    case 'LOGOUT':
      return state.set('isUserLoggedIn', false);
    default:
      return state;
  }
};

export default uiReducer;

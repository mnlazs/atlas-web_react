import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import * as actionTypes from './uiActionTypes';

export const loginSuccess = () => ({
    type: actionTypes.LOGIN_SUCCESS
});

export const loginFailure = () => ({
    type: actionTypes.LOGIN_FAILURE
});

export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password)); // Asegúrate de que la acción 'login' esté definida
        fetch('/login-success.json')
            .then(response => {
                if (response.ok) {
                    dispatch(loginSuccess());
                } else {
                    dispatch(loginFailure());
                }
            })
            .catch(() => dispatch(loginFailure()));
    };
};

function login(email, password) {
  return { type: LOGIN, user: { email, password }};
}

function logout() {
  return { type: LOGOUT };
}

function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

// "Ligando" las acciones
export const boundLogin = (email, password) => login.bind(null, email, password);
export const boundLogout = () => logout.bind(null);
export const boundDisplayNotificationDrawer = () => displayNotificationDrawer.bind(null);
export const boundHideNotificationDrawer = () => hideNotificationDrawer.bind(null);

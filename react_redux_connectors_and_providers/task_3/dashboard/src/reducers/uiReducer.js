import { Map } from 'immutable';

// Estado inicial
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}), // Asumiendo que 'user' es un Map para mantener la consistencia con Immutable.js
});

// Reducer
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', true);
    case 'HIDE_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', false);
    case 'LOGIN_SUCCESS': // Actualizado para reflejar el cambio a LOGIN_SUCCESS
      // Establece 'isUserLoggedIn' a true y actualiza 'user' con la información proporcionada
      return state
        .set('isUserLoggedIn', true)
        .set('user', Map(action.payload.user)); // Asume que la acción incluye 'user' en 'payload'
    case 'LOGIN_FAILURE':
      // Opcional: manejar un fallo en el login, por ejemplo, limpiando el estado del usuario
      return state.set('isUserLoggedIn', false).set('user', Map({}));
    case 'LOGOUT':
      // Establece 'isUserLoggedIn' a false y limpia 'user'
      return state.set('isUserLoggedIn', false).set('user', Map({}));
    default:
      return state;
  }
};

export default uiReducer;

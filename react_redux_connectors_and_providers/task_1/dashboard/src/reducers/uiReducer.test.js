import uiReducer from './uiReducer';
import { Map } from 'immutable';

// Si el estado inicial no está exportado desde uiReducer, puedes definirlo aquí para las pruebas
const initialState = Map ({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}),
});

describe('uiReducer', () => {
  // Test 1: Verificar el estado inicial
  it('debería retornar el estado inicial si no se pasa ninguna acción', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  // Test 2: Verificar el estado para una acción no manejada
  it('debería retornar el estado inicial si se pasa una acción no manejada', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(undefined, action)).toEqual(initialState);
  });

  // Test 3: Verificar cambio en el estado para DISPLAY_NOTIFICATION_DRAWER
  it('debería cambiar isNotificationDrawerVisible a true para DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true
    };
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

});

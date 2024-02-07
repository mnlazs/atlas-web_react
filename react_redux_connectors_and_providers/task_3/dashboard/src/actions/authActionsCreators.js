// Tipos de acciones
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';

// Creador de acción para el inicio de sesión
export const loginRequest = (credentials) => {
  return (dispatch) => {
    // Aquí se simula una llamada a la API
    setTimeout(() => {
      // Supongamos que la "API" retorna un token de usuario ficticio
      const userToken = 'abc123';
      dispatch({ type: LOGIN_SUCCESS, payload: userToken });
    }, 1000);
  };
};

// Creador de acción para el cierre de sesión
export const logout = () => {
  return {
    type: LOGOUT
  };
};

// Exportar los creadores de acciones
export { LOGIN_SUCCESS, LOGOUT };

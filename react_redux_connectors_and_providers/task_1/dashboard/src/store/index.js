import { createStore, combineReducers } from 'redux';
import uiReducer from '../reducers/uiReducer'; // Ajusta la ruta de importación según la ubicación de tu reducer

const rootReducer = combineReducers({
  uiReducer, // Aquí puedes añadir más reducers si lo necesitas
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Habilita la extensión Redux DevTools
);

export default store;

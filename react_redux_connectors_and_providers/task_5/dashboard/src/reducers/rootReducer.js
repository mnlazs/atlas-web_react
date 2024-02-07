// Importa combineReducers de redux
import { combineReducers } from 'redux';

// Importa cada uno de tus reducers
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';

// Combina los reducers en un rootReducer
const rootReducer = combineReducers({
  // La clave 'courses' mapeará al estado manejado por courseReducer
  courses: courseReducer,
  // La clave 'notifications' mapeará al estado manejado por notificationReducer
  notifications: notificationReducer,
  // La clave 'ui' mapeará al estado manejado por uiReducer
  ui: uiReducer,
});

// Exporta el rootReducer
export default rootReducer;

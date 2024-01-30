import { createStore, combineReducers } from 'redux';
import courseReducer from './courseReducer'; // Asegúrate de que la ruta sea correcta

const rootReducer = combineReducers({
  course: courseReducer,
});

const store = createStore(rootReducer);

export default store;

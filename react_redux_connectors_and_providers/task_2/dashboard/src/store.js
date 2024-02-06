import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import uiReducer from './reducers/uiReducer';

const rootReducer = combineReducers({
  uiReducer, // y otros reducers que tengas
});

// Crea el store aplicando el middleware redux-thunk y habilitando Redux DevTools
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk) // Aplica el middleware redux-thunk
  )
);

export default store;

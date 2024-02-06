import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import store from './store'; 
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import uiReducer from './reducers/uiReducer';
const rootReducer = combineReducers({
  uiReducer,
});

// Crea el store aplicando el middleware redux-thunk
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk) // Aplica el middleware redux-thunk
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

export default store;
export { loginRequest, logout };

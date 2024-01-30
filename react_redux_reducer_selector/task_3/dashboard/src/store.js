import { createStore, combineReducers } from 'redux';
import courseReducer from './reducers/courseReducer';
import notificationReducer from './notificationReducer';


const rootReducer = combineReducers({
  course: courseReducer,
  Notifications: notificationReducer,
});

const store = createStore(rootReducer);
export default store;

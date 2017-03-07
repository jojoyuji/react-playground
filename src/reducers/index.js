import {combineReducers} from 'redux';

//reducers goes in here
import todos from './todosReducer';
import app from './appReducer';

export default combineReducers({
  todos,
  app,
})





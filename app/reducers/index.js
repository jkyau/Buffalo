import { combineReducers } from 'redux';
import * as recipesReducer from './recipes'
import * as gifsReducer from './gifs'

export default combineReducers(Object.assign(
  recipesReducer,
  gifsReducer,
));

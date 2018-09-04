import { combineReducers } from 'redux';
import count from './count';
import list from './list';

export default combineReducers({
  count,
  list
});
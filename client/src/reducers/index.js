import { combineReducers } from 'redux';
import alert from './alert';
import lang from './lang';
import auth from './auth';
import profile from './profile';
import settings from './settings';
import reviews from './reviews';

export default combineReducers({
  alert,
  lang,
  auth,
  profile,
  settings,
  reviews
});

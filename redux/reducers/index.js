import { combineReducers } from 'redux';
import admin from './admin';
import schoolData from './schoolData';
import generateCodes from './generateCodes';
import payment from './payment';
import code from './code';
import valueCards from './valueCards';
import getStarted from './getStarted';

const reducers = combineReducers({
  admin,
  schoolData,
  generateCodes,
  payment,
  code,
  valueCards,
  getStarted
});

export default reducers;

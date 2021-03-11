/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import systemReducer from './system/reducers';
import weatherReducer from './weather/reducers';
import { Weather } from './weather/types';

const rootReducer = combineReducers({
  system: systemReducer,
  weather: weatherReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;

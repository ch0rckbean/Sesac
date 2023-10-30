import { combineReducers } from 'redux';
// reducer 호출
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleRedecer';
import moneyReducer from './moneyReducer';
import onOffReducer from './onOffReducer';

// combineReducers: reducer 여러개를 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  bank: moneyReducer,
  light: onOffReducer,
});

export default rootReducer;

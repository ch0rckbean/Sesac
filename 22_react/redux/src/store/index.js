import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleRedecer';
import moneyReducer from './moneyReducer';

// combineReducers: reducer 여러개를 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  bank: moneyReducer,
});

export default rootReducer;

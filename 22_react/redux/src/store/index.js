import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleRedecer';

// combineReducers: reducer 여러개를 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
});

export default rootReducer;

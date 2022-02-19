import { combineReducers } from 'redux';
import { connectionReducer } from './connectionReducer';

const reducers = combineReducers({
  connection: connectionReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;

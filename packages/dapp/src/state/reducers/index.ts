import { combineReducers, Reducer } from 'redux';
import { connectionReducer } from './connectionReducer';

const reducers: Reducer = combineReducers({
  connection: connectionReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;

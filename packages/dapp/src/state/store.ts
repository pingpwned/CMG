import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

import { applyMiddleware, createStore, compose } from 'redux';

import thunk from 'redux-thunk';
//import promise from 'redux-promise-middleware';

import reducer from './reducers';


let middlewares = [
  thunk,
];
if (process.env.NODE_ENV !== 'production') {
  middlewares = [
    ...middlewares,
    require('redux-perf-middleware').perflogger,
    require('redux-logger')(),
  ]
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware.apply(this, middlewares)
));

export default store;

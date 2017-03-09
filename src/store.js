import { applyMiddleware, createStore } from 'redux';

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

const store = createStore(reducer, applyMiddleware.apply(this, middlewares));

export default store;

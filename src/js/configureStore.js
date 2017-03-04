import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import app from './reducers/app';
import todos from './reducers/todos';

export default function configureStore(history, initialState) {
  const reducer = combineReducers({
    routing: routerReducer,
    app,
    todos,
  });

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history),
      ),
    ),
  );

  return store;
}

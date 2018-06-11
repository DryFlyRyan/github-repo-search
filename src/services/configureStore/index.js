import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import rootReducer from '../root/rootReducer';
import rootSaga from '../root/rootSaga';

export const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={
      process.env.REACT_APP_REDUX_DEVTOOLS_VISIBLE
    }
    defaultPosition={process.env.REACT_APP_REDUX_DEVTOOLS_POSITION || 'right'}
  >
    <LogMonitor theme="solarized" />
  </DockMonitor>
);

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware), DevTools.instrument())
  );

  let sagaTask = sagaMiddleware.run(rootSaga);

  // Verifies we are not in production and HMR is turned on
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      // Listens for any changes from the rootReducer and its dependencies and swaps out the reducer on changes
      module.hot.accept('../root/rootReducer', () => {
        const nextRootReducer = require('../root/rootReducer'); // eslint-disable-line
        store.replaceReducer(nextRootReducer.default);
      });
      // Listends for any changes from the rootSaga and its dependencies and swaps out the sagas on changes
      module.hot.accept('../root/rootSaga', () => {
        const newSagas = require('../root/rootSaga'); // eslint-disable-line
        sagaTask.cancel();
        sagaTask.done.then(() => {
          sagaTask = sagaMiddleware.run(newSagas.default);
        });
      });
    }
  }

  return store;
};

export default configureStore;

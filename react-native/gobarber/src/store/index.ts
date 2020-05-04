import { createStore, applyMiddleware, compose } from 'redux';
import { createOffline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import createSagaMiddleware from 'redux-saga';
import reducers from './combineReducers';
import sagas from './combineSagas';

const sagaMiddleware = createSagaMiddleware();
const middlewareList = [
  /* other middleware here */
  sagaMiddleware,
];

const {
  middleware: offlineMiddleware,
  enhanceReducer,
  enhanceStore,
} = createOffline(offlineConfig);
const middleware = applyMiddleware(...middlewareList, offlineMiddleware);

const store = createStore(
  enhanceReducer(reducers),
  compose(enhanceStore, middleware),
);
sagaMiddleware.run(sagas);

export { store };

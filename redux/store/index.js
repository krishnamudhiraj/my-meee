import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initState from './initialState';
import reducers from '../reducers';

const makeConfiguredStore = (enhancedReducers, initialState, middleware) => {
  if (middleware) {
    return createStore(enhancedReducers, initialState, middleware);
  }
  return createStore(enhancedReducers, initialState);
};

export const configureStore = (initialState = initState) => {
  if (process.env.NODE_ENV === 'production') {
    if (typeof window === 'undefined') {
      return makeConfiguredStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
      );
    } else {
      // we need it only on client side
      const { persistStore, persistReducer } = require('redux-persist');
      const storage = require('redux-persist/lib/storage').default;
      const persistConfig = {
        key: 'nextjs',
        storage,
        // blacklist: ['schoolData'],
      };
      const persistedReducer = persistReducer(persistConfig, reducers);
      const store = makeConfiguredStore(
        persistedReducer,
        initialState,
        compose(applyMiddleware(thunk))
      );
      store.__persistor = persistStore(store); // Nasty hack

      return store;
    }
  } else {
    if (typeof window === 'undefined') {
      return makeConfiguredStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
      );
    } else {
      // we need it only on client side
      const { persistStore, persistReducer } = require('redux-persist');
      const storage = require('redux-persist/lib/storage').default;
      const persistConfig = {
        key: 'nextjs',
        storage,
        // blacklist: ['schoolData'],
      };
      const persistedReducer = persistReducer(persistConfig, reducers);
      const reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;
      const store = makeConfiguredStore(
        persistedReducer,
        initialState,
        reduxCompose(applyMiddleware(thunk))
      );
      store.__persistor = persistStore(store); // Nasty hack
      return store;
    }
  }
};

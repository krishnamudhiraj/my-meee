import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialState from './initialState';
import reducers from '../reducers';

const rootPersistConfig = {
  key: 'root',
  storage,
  transforms: [],
};

const appReducer = persistCombineReducers(rootPersistConfig, reducers);

const configureStore = () => {
  const store = createStore(appReducer, initialState, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;

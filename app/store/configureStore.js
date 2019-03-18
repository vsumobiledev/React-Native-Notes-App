import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const config = {
  key: 'root',
  storage,
  blacklist: ['reviewsList'],
  debug: true //to get useful logging
};

const middleware = [thunk];

// eslint-disable-next-line no-undef
if (__DEV__) {
  middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducer);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  //   console.log('Test', store.getState());
});
const configureStore = () => {
  return { persistor, store };
};

export default configureStore;

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer} from './reducer';
import thunkMiddlware from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks'],
};
const rootReducer = combineReducers({
  reducer: persistReducer(persistConfig, reducer),
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddlware));

export * from './action';
export const persistor = persistStore(store);

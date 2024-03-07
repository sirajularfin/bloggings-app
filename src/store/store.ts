import {legacy_createStore as createStore} from 'redux';
import RootReducer from './rootReducer';

const store = createStore(RootReducer);
console.log('Initial state: ', store.getState());

export default store;

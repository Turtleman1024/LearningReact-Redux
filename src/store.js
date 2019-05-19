import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

//Create store documentation: https://github.com/reduxjs/redux/blob/master/docs/api/createStore.md
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));


export default store;

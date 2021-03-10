import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer/index';
import reduxLogger from 'redux-logger'

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxLogger)
)
export default store;
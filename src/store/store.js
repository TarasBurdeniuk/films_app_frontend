import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/mainReducer';

const middleWare = applyMiddleware(thunk);

const store = createStore(rootReducer, compose(middleWare));

export default store;

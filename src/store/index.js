import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//通过applyMiddleware使用thunk中间件
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: []
});

//纯函数 （reducer可以接收state，但绝不能修改state）
export default (state = defaultState, action) => {
  //immutable set方法会结合之前immutable对象的值和设置的值，返回一个新的对象
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.SEARCH_HOT:
      return state.set('list', action.data);
    default:
      return state;
  }
}
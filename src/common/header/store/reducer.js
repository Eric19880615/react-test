import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false
});

//纯函数 （reducer可以接收state，但绝不能修改state）
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    //immutable set方法会结合之前immutable对象的值和设置的值，返回一个新的对象
    return state.set('focused', true);
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  return state;
}
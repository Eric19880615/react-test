import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
});

const changeHot = (data) => ({
  type: constants.SEARCH_HOT,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

//搜索框聚焦请求热门数据
export const getHotList = () => {
  return (dispatch) => {
    axios.get('/api/list.json').then((res) => {
      const data = res.data;
      dispatch(changeHot(data.data));
    }).catch(() => {
      console.log('error');
    })
  }
};
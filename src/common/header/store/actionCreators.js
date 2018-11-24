import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

const changeHot = (data) => ({
  type: constants.SEARCH_HOT,
  data: fromJS(data)
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
import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

const homeData = (result) => ({
  type: constants.FETCH_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  authorList: result.authorList
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
});

export const fetchHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = homeData(result);
      dispatch(action);
    });
  }
};

//点击加载更多
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      const action = addHomeList(result, page + 1);
      dispatch(action);
    });
  }
};
import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  authorList: [],
  articlePage: 1,
  showScroll: false
});

//获取首页数据
const fetchHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    authorList: fromJS(action.authorList)
  });
};

//加载更多
const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FETCH_HOME_DATA:
      return fetchHomeData(state, action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}
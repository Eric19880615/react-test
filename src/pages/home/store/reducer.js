import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  authorList: [],
  articlePage: 1
});

//纯函数 （reducer可以接收state，但绝不能修改state）
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FETCH_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        authorList: fromJS(action.authorList)
      });
    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      });
      // return state.set('articleList', state.get('articleList').concat(action.list));
    default:
      return state;
  }
}
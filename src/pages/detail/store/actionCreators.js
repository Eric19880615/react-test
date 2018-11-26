import * as constants from './constants';
import axios from 'axios';

const fetchDetail = (title, content) => ({
  type: constants.FETCH_DETAIL,
  title,
  content
});

export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      const result = res.data.data;
      dispatch(fetchDetail(result.title, result.content));
    })
  }
};
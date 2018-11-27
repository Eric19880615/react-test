import * as constants from './constants';
import axios from 'axios';

const fetchDetail = (title, content) => ({
  type: constants.FETCH_DETAIL,
  title,
  content
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
      dispatch(fetchDetail(result.title, result.content));
    }).catch((error) => {

    })
  }
};
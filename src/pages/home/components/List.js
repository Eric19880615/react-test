import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {ListItem, ListInfo, LoadMore} from '../style';
import {actionCreators} from '../store';

class List extends Component {
  render() {
    const {list, getMoreList, articlePage} = this.props;
    return (
      <Fragment>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img
                  src={item.get('imageUrl')}
                  alt=""/>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(articlePage)}>阅读更多</LoadMore>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMoreList(articlePage) {
    dispatch(actionCreators.getMoreList(articlePage));
  }
});

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
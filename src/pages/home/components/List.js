import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {ListItem, ListInfo, LoadMore} from '../style';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class List extends PureComponent {
  render() {
    const {list, getMoreList, articlePage} = this.props;
    return (
      <Fragment>
        {
          list.map((item) => {
            return (
              <Link to="/detail" key={item.get('id')}>
                <ListItem>
                  <img
                    src={item.get('imageUrl')}
                    alt=""/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
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
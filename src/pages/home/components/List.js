import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {ListItem, ListInfo} from '../style';

class List extends Component {
  render() {
    const {list} = this.props;
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
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList'])
});

export default connect(mapStateToProps, null)(List);
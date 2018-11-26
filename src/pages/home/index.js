import React, {Component} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
               src="//upload.jianshu.io/admin_banners/web_images/4581/8cfb95afa4ac98683ce1b9ab0f835f425e6a7df5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
               alt=''/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.fetchHomeData();
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchHomeData() {
    const action = actionCreators.fetchHomeData();
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(Home);
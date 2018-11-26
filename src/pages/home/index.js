import React, {PureComponent} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store'

class Home extends PureComponent {
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
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }

      </HomeWrapper>
    )
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScroll);
  }

  componentDidMount() {
    this.props.fetchHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScroll);
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeData() {
    const action = actionCreators.fetchHomeData();
    dispatch(action);
  },

  changeScroll() {
    let distance = document.documentElement.scrollTop;
    if (distance > 300) {
      const action = actionCreators.toggleTopShow(true);
      dispatch(action);
    } else {
      const action = actionCreators.toggleTopShow(false);
      dispatch(action);
    }
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
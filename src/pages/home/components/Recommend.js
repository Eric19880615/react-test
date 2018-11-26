import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RecommendDiv, RecommendItem} from '../style';

class Recommend extends Component {
  render() {
    const {list} = this.props;
    return (
      <RecommendDiv>
        {
          list.map((item) => {
            return (
              <RecommendItem key={item.get('id')} imageUrl={item.get('imageUrl')}/>
            )
          })
        }
      </RecommendDiv>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(mapStateToProps, null)(Recommend);
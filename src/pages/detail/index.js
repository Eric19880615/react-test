import React, {Component} from 'react';
import {DetailWrapper, Header, Content} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Detail extends Component {
  render() {
    const {title, content} = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}}/>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.fetchDetail();
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetail() {
    dispatch(actionCreators.getDetail());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
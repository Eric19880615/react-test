import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AuthorDiv, SearchInfo, SearchInfoList, SearchInfoSwitch, SearchInfoTitle, SearchInfoItem} from '../style';

class Writer extends Component {
  render() {
    const {list, handleChangePage} = this.props;
    return (
      <AuthorDiv>
        <SearchInfo>
          <SearchInfoTitle>
            推荐作者
            <SearchInfoSwitch
            onClick={() => handleChangePage(this.spinIcon)}
            >
              <i ref={(icon) => {
                this.spinIcon = icon
              }} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map((item) => {
                return (
                  <SearchInfoItem key={item.get('id')}>
                    <img src={item.get('imageUrl')} alt=""/>
                    <div className='name'>
                      <p>{item.get('name')}</p>
                      <span>写了{item.get('total')}字 · {item.get('like')}喜欢</span>
                    </div>
                    <a className='focus' href='/'>
                      + 关注
                    </a>
                  </SearchInfoItem>
                )
              })
            }
          </SearchInfoList>
        </SearchInfo>
      </AuthorDiv>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'authorList'])
});

const mapDispatchToProps = (dispatch) => ({
  handleChangePage(spin) {
    //icon旋转动画
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Writer);
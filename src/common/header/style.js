import styled from 'styled-components';
import logo from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({href: '/'})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logo});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 100%;
`;

export const NavItem = styled.div`
  color: #333;
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
     position: absolute;
     right: 5px;
     bottom: 4px;
     width: 30px;
     line-height: 30px;
     border-radius: 15px;
     text-align: center;
     &.focused {
      background: #888;
      color: #fff;
     }
   }
`;

export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 10px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  margin-left: 20px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 220px;
  }
  &.slide-enter {
    transition: all .5s ease-out;
  }
  &.slide-enter-active {
    width: 220px;
  }
  &.slide-exit {
    transition: all .5s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 58px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  margin-top: 10px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
`;
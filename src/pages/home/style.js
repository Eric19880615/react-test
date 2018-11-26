import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
  padding-top: 30px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin-left: -18px;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  img {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  img {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  padding-right: 20px;
  box-sizing: border-box;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const RecommendDiv = styled.div`
  margin-top: -4px;
  min-height: 228px;
`;

export const RecommendItem = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  line-height: 49px;
  box-sizing: border-box; 
  img {
    height: 100%;
    width: 100%;
  }
`;

export const AuthorDiv = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const SearchInfo = styled.div`
  width: 240px;
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  
`;

export const SearchInfoItem = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 20px;
  padding: 0 5px;
  margin-bottom: 10px;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    color: #333;
    border-color: #b4b4b4;
  }
  img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-right: 10px;
  }
  .name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .focus {
    text-decoration: none;
    color: #999;
  }
`;
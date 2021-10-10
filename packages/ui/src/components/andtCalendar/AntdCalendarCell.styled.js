import styled from 'styled-components';

export const Wrapper = styled.div`
  div {
    padding: 0;
  }

  font-weight: 400;
  font-size: 16px;
  
  //overflow: visible;
`;

export const Line = styled.div`
  height: 2px;
  margin: 4px;
  background-color: rgb(229, 229, 229);
`;

export const Day = styled.div`
  text-align: right;
`;

export const List = styled.div`
  box-sizing: border-box;
  height: 120px;
  //overflow: hidden;
`;

export const Event = styled.div`
  //background-color: lightblue; 
  //border: 1px solid darkgray;
  margin: 2px 0;
  height: 20px;
`;

export const EventInner = styled.div`
  z-index: 99999;
  position: absolute;
  font-size: 16px;
  //overflow:hidden; //超出的文本隐藏
  //text-overflow:ellipsis; //溢出用省略号显示
  white-space:nowrap; //溢出不换行
`;

export const EventExtension = styled.div`
  //border: 1px solid darkgray;
  overflow: visible;
  margin: 2px 0;
  height: 20px;
  font-size: 16px;
  //overflow:hidden; //超出的文本隐藏
  //text-overflow:ellipsis; //溢出用省略号显示
  white-space:nowrap; //溢出不换行
`;

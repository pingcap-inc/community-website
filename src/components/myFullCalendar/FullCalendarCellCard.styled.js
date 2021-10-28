import styled from 'styled-components';
import { Space } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

export const Wrapper = styled.div`
  padding: 8px;
  width: 300px;
  //background-color: #e9eaee;
`;

export const Header = styled(Space).attrs({
  align: 'center',
})`
  margin-bottom: 10px;
  font-size: 12px;
`;

export const Dot = styled(Space)`
  width: 8px;
  height: 8px;
`;

export const Date = styled(Space)`
  margin-left: 2px;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;

  a {
    color: #000c17;
  }
`;

export const Image = styled.div`
  margin-bottom: 10px;
  width: 100%;
  min-height: 140px;
  img {
    width: 100%;
  }
`;

export const Location = styled.div`
  margin-bottom: 10px;

  ul {
    ${mixins.reset()};
    list-style: none;

    .anticon {
      margin-right: 5px;
    }

    li {
      line-height: 1.2;
      display: inline-block;
      padding-right: 0.5rem;
      margin-right: 0.5rem;
      color: ${colors.F2};
      border-right: 1px solid ${colors.F2};

      &:last-child {
        padding-left: 0;
        margin-right: 0;
        border-right: none;
      }
    }
  }
`;

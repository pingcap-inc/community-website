import styled from 'styled-components';
import { Col, Form, Pagination as AntPagination } from 'antd';
import { Styled, colors, mixins } from '@tidb-community/ui';

const { Content, Section, Title } = Styled;

export { Content, Title };

export const Container = styled(Section)`
  ${mixins.responsive()};
`;

export const Filters = styled(Form)`
  margin-bottom: 2rem;
`;

export const DropdownWrapper = styled(Col).attrs({
  xs: 24,
  md: 6,
})`
  .ant-select {
    width: 100%;
  }
`;

export const ActivityCard = styled(Col).attrs({
  xs: 24,
  sm: 12,
  md: 8,
  lg: 6,
})`
  h3 {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

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

export const ImageWrapper = styled.div`
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  height: 150px;
  margin-bottom: 0.5rem;
`;

export const SpinContainer = styled.div`
  ${mixins.flexCenter()};
  margin: 3.5rem auto;
`;

export const Pagination = styled(AntPagination).attrs({
  size: 'small',
})`
  margin-top: 2rem;
  text-align: center;
`;

import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';
import { Radio, Row } from 'antd';

import { Section, Content } from '~/pages/home/index.styled';

export { Content };

export const Container = styled(Section)`
  && {
    text-align: center;
    padding-top: 5rem;
    background: ${colors.M2};

    ${(props) =>
      props.isSmallScreen &&
      css`
        ${Title} {
          &::after {
            display: none;
          }
        }

        ${Navs} {
          .ant-radio-button-wrapper {
            padding: 0 1rem;
          }
        }

        ${HowTo} {
          height: 218px;
          background-image: url('/images/home/banner-howto-mobile.svg');
        }
      `};
  }
`;

export const Navs = styled(Radio.Group)`
  && {
    margin-bottom: 3rem;

    .ant-radio-button-wrapper {
      ${mixins.verticalLineMiddle('45px')};
      border-color: ${colors.T2};
      padding: 0 2rem;

      &:first-child {
        border-left-color: ${colors.T2};
      }

      &:hover {
        color: ${colors.M1};
        background: ${colors.B1};
        border-color: ${colors.B1};

        &:first-child {
          border-left-color: ${colors.B1};
        }

        .ant-radio-button-wrapper-checked {
          &::before {
            background-color: ${colors.B1};
          }
        }
      }
    }

    .ant-radio-button-wrapper-checked {
      font-size: 16px;
      color: ${colors.F1};

      &::before {
        background-color: ${colors.T2};
      }
    }
  }
`;

export const Title = styled.h2`
  display: inline-block;
  font-size: 36px;
  line-height: 1;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    display: block;
    height: 12px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${colors.T1};
    z-index: -1;
  }
`;

export const Intro = styled.p`
  ${mixins.reset()};
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const Numbers = styled(Row)`
  em {
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    color: #37a379;
  }

  span {
    display: block;
    font-size: 18px;
  }
`;

export const HowTo = styled.div`
  ${mixins.flexCenter()};
  color: ${colors.M1};
  background: url('/images/home/banner-howto-desktop.svg') no-repeat center center;
  background-size: cover;
  height: 123px;
`;

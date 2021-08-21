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
      `};
  }
`;

export const Navs = styled(Radio.Group)`
  && {
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
  margin: 3rem 0;

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
  ${mixins.flexVerticalCenter()};
  text-align: left;
  color: ${colors.M1};
  background: url('/images/home/banner-howto-desktop.svg') no-repeat center center;
  background-size: cover;
  height: 123px;

  h2,
  ul {
    ${mixins.reset()};
    color: ${colors.M1};
    font-size: 18px;
    font-weight: normal;
  }

  h2 {
    display: inline-block;
    margin-right: 4rem;
  }

  ul {
    display: inline;
    list-style: none;

    li {
      margin-left: 3rem;
      display: inline-block;
      border-left: 6px solid ${colors.T1};
      padding-left: 1rem;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  ${(props) =>
    props.isSmallScreen &&
    css`
      height: 218px;
      background-image: url('/images/home/banner-howto-mobile.svg');

      ${Content} {
        flex-direction: column;

        h2,
        ul,
        li {
          display: block;
        }

        h2,
        ul {
          padding: 0 1rem;
        }

        li {
          margin: 0;
          margin-top: 1rem;
        }
      }
    `};
`;

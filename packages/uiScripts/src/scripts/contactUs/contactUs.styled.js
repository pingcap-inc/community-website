import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import IconSvg from './icon.svg';

export const Container = styled.div`
  ${mixins.size('42px')};
  ${mixins.flexCenter()};
  z-index: 1001;
  border-radius: 50%;
  background: ${colors.B1};
  position: fixed;
  right: 2rem;
  bottom: 2rem;
`;

export const Icon = styled(IconSvg)`
  ${mixins.size('26px')};
`;

export const PopoverContainer = styled.div`
  && {
    position: relative;
    width: 160px;

    .anticon {
      color: ${colors.AntD.warning};
      margin-right: 0.2rem;
    }

    ul {
      ${mixins.resetList()};

      li {
        margin-bottom: 0.5rem;

        &:last-child {
          margin-bottom: 0;
        }
      }

      ${(props) =>
        props.isDisabled &&
        css`
          h3,
          p {
            color: ${colors.C4};
          }

          a {
            display: block;
            cursor: not-allowed;
          }
        `}
    }

    h3,
    p {
      ${mixins.reset()};
    }

    h3 {
      ${mixins.typography('p2')};
      color: ${colors.F1};
    }

    p {
      ${mixins.typography('p3')};
      color: ${colors.C4};
    }
  }
`;

export const PopoverDesc = styled.div`
  && {
    ${mixins.typography('p3')};
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid ${colors.T2};

    a,
    span {
      &,
      &:hover {
        cursor: pointer;
        color: ${colors.B1};
      }
    }
  }
`;

export const GuideContent = styled.div`
  && {
    position: absolute;
    top: 0;
    left: -232px;
    width: 200px;

    p {
      ${mixins.typography('p2')}
      margin-bottom: 1rem;
    }

    p,
    .ant-btn {
      color: ${colors.M1};
    }

    ${(props) =>
      props.isSmallScreen &&
      css`
        left: -16px;
        top: -160px;
      `}
  }
`;

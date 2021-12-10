import styled from 'styled-components';
import { colors as themeColors, mixins } from '@tidb-community/ui';
import { borderRadiusSize } from '../common.styled';

export const avatarSize = 32;
const colors = {
  primary: themeColors.B1,
  black: themeColors.F1,
  borderGray: themeColors.T2,
};

export const Container = styled.div`
  list-style: none;
  display: block;

  > :first-child {
    border-top-left-radius: ${borderRadiusSize};
    border-top-right-radius: ${borderRadiusSize};
  }

  > :last-child {
    border-bottom-left-radius: ${borderRadiusSize};
    border-bottom-right-radius: ${borderRadiusSize};
  }
`;

export const CoverImageContainer = styled.div`
  width: 100%;
  padding-top: 28.5714%; /* 7:2 Aspect Ratio */
  position: relative;
  border-bottom: 1px solid ${colors.borderGray};
  overflow: hidden;
`;

export const CoverImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

export const Content = styled.div`
  background: white;
  padding: 22px 24px 30px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorAvatar = styled.div`
  max-width: ${avatarSize}px;
  min-width: ${avatarSize}px;
  margin-right: 8px;
  cursor: pointer;
`;

export const AuthorInfo = styled.div`
  flex: 1;
  font-size: 12px;
  line-height: 17px;
`;

export const AuthorName = styled.div`
  display: flex;
`;

export const AuthorNameBase = styled.div`
  color: #2c2c2c;
  cursor: pointer;
`;

export const AuthorNameExtend = styled.div`
  margin-left: 0.25rem;
`;

export const AuthorPublishedAt = styled.div`
  color: #565656;
`;

export const Title = styled.div`
  ${mixins.lineClamp(3)};
  margin-top: 8px;
  margin-left: ${avatarSize + 8}px;
  a {
    display: block;
    font-size: 24px;
    line-height: 33px;
    color: ${colors.black} !important;
    &:hover {
      color: ${colors.primary} !important;
      text-decoration: none !important;
    }
  }
`;

export const Meta = styled.div`
  margin-top: 4px;
  margin-left: ${avatarSize + 8}px;
`;

export const Category = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${borderRadiusSize};
  border: 1px solid ${colors.borderGray};
  color: ${colors.black};
  font-size: 12px;
  line-height: 17px;
  cursor: pointer;

  transition: color 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: ${colors.primary};
    border-color: ${colors.primary};
  }
`;

export const Tag = styled.span`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 16px;
  }
  font-size: 12px;
  line-height: 17px;
  color: ${colors.black};
  transition: color 0.25s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }

  &:before {
    content: '# ';
  }
`;

export const Interactions = styled.div`
  margin-top: 14px;
  margin-left: ${avatarSize + 8}px;
  color: ${colors.black};
  font-size: 12px;
  line-height: 17px;
`;

export const InteractionItem = styled.span`
  &:not(:first-child) {
    margin-left: 24px;
  }

  .text {
    margin-left: 4px;
  }
`;

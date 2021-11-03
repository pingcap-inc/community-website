import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Title = styled.div`
  ${mixins.typography('h3')}
`;

export const Description = styled.div`
  ${mixins.typography('p2')}
  margin-top: 1rem;
  //height: ${(22 / 14) * 14 * 3}px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示。
  -webkit-line-clamp: 3; // 这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
  -webkit-box-orient: vertical; // 从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
`;

export const Footer = styled.div`
  ${mixins.typography('p2')}
  color: ${colors.C4};
  margin-top: 1rem;
`;

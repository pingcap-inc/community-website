import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const BannerContent = styled.div`
  ${mixins.typography('p2')}
  margin: auto;
  width: 470px;
`;

export const BannerImage = styled.img.attrs({
  src: '/images/account/organization-new-banner.png',
  alt: 'banner image',
})`
  width: 100%;
  margin-bottom: 26px;
`;

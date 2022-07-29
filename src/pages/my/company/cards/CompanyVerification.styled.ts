import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';
import { Upload, Button } from 'antd';
import Anchor from '~/components/Anchor';

export const Container = styled.div`
  ${mixins.boxShadow()};
  ${mixins.borderRadius()};
  padding: 1rem;
  border: 1px solid ${colors.C2};
  display: flex;
  align-items: center;
  ${mixins.onMobile(css`
    flex-direction: column;
  `)};
`;

const iconSize = 50;
export const Start = styled.div`
  svg {
    width: ${iconSize}px;
    height: ${iconSize}px;
  }
`;

export const Center = styled.div`
  margin: 0 1rem;
`;

export const Title = styled.div`
  ${mixins.typography('h3')};
`;

export const Description = styled.div`
  color: ${colors.C4};
  margin-top: 0.25rem;
`;

export const SendVerifyCodeButton = styled(Button).attrs({
  type: 'link',
  size: 'small',
})`
  padding: 0 !important;
  line-height: 1 !important;
  height: 14px !important;
  //cursor: pointer;
  //color: ${colors.B1};
`;

export const UploadBox = styled(Upload.Dragger)`
  .ant-upload {
    padding: 0.5rem 1rem !important;
    text-align: left;
  }
`;

export const PrivacyPolicyAnchor = styled(Anchor)`
  color: ${colors.B1};
  //text-decoration: underline;
`;

export const End = styled.div``;

import styled from 'styled-components';
import { Alert as AntAlert } from 'antd';

export const Alert = styled(AntAlert)`
  margin-bottom: 2rem;

  a {
    margin-left: 0.5rem;
  }
`;

export const TitleBadge = styled.div`
  border: 1px solid #e9eaee;
  background-color: #e9eaee88;
  border-radius: 12px;
  color: #9f9f9f;
  font-size: 12px;
  font-weight: normal;
  padding: 2px 8px;
`;

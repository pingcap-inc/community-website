import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const iconSize = '64px';
export const Icon = styled.div`
  margin-right: 24px;
  img,
  svg {
    width: ${iconSize};
    height: ${iconSize};
  }
`;

export const Text = styled.div`
  //font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height */
  letter-spacing: 0.2em;
  color: #ffffff;
`;

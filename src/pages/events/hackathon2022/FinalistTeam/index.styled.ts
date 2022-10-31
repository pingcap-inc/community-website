import styled from 'styled-components';

export const MyContainer = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  //width: 100%;
  overflow: hidden;
`;

export const SectionTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const SectionBody = styled.div`
  margin-top: 16px;
  overflow: hidden;
  width: 100%;

  table {
    background: #282a36;
    border: 1px solid rgba(237, 237, 237, 0.2);
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    width: 100%;
    thead {
      tr {
        padding: 0 !important;
        th {
          text-align: left;
          white-space: nowrap;
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        td {
          div {
            overflow: hidden;
            height: 20px;
            line-height: 20px;
          }
        }
      }
    }
  }
`;

export const Tooltip = styled.div`
  color: #ffffff;
`;
export const TooltipProjectName = styled.div`
  font-size: 24px;
  letter-spacing: 0.2em;
`;
export const TooltipIntroduction = styled.div`
  color: #efefef;
  margin-top: 24px;
  font-size: 16px;
`;
export const TooltipAction = styled.div<{ $color: string }>`
  margin-top: 24px;
  a {
    color: #fff;
    height: 24px;
    line-height: 1;
  }
  svg:hover,
  a:hover {
    color: ${({ $color }) => $color};
  }
`;
export const TooltipActionItem = styled.div``;

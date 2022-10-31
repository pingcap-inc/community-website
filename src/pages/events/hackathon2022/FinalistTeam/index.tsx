import * as React from 'react';
import { Col, Row, Tooltip } from 'antd';

import * as Styled from './index.styled';
import { dataFinalist, IFinalistGroupItem } from '../data';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IFinalistGroupItem[];
}

const FinalistTeam: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.MyContainer {...rest}>
      <Row gutter={[24, 24]}>
        {dataFinalist.map((group) => (
          <Col md={24} lg={12}>
            <Styled.Section>
              <Styled.SectionTitle style={{ color: group.color }}>{group.name}</Styled.SectionTitle>
              <Styled.SectionBody>
                <table cellPadding={8}>
                  <thead>
                    <tr style={{ background: group.color }}>
                      <th>团队名称</th>
                      <th>项目名称</th>
                      <th>决赛得分</th>
                      <th>决赛排名</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((value) => (
                      <tr key={value.teamName}>
                        <td>
                          <Tooltip placement={'topLeft'} title={value.teamName}>
                            <div>{value.teamName}</div>
                          </Tooltip>
                        </td>
                        <td style={{ color: group.color }}>
                          <Tooltip placement={'topLeft'} title={value.projectName}>
                            <div>{value.projectName}</div>
                          </Tooltip>
                        </td>
                        <td>
                          <div>{value.score}</div>
                        </td>
                        <td>
                          <div>{value.rank}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Styled.SectionBody>
            </Styled.Section>
          </Col>
        ))}
      </Row>
    </Styled.MyContainer>
  );
};

export default FinalistTeam;

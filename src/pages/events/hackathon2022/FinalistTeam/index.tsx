import * as React from 'react';
import { Col, Row, Space, Tooltip } from 'antd';

import * as Styled from './index.styled';
import { dataFinalist, IFinalistGroupItem } from '../data';
import Anchor from '~/components/Anchor';
import { GithubFilled, PlayCircleFilled } from '@ant-design/icons';

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
                          <Tooltip
                            placement={'bottomLeft'}
                            title={
                              <Styled.Tooltip>
                                {/*<Styled.TooltipProjectName>{value.projectName}</Styled.TooltipProjectName>*/}
                                <Styled.TooltipIntroduction>{value.introduction}</Styled.TooltipIntroduction>
                                <Styled.TooltipAction $color={group.color}>
                                  <Space size={16}>
                                    {value.githubUrl.length === 0 ? (
                                      <Tooltip title={'仅提供获奖团队的 GitHub 链接'}>
                                        <a>
                                          <Styled.TooltipActionItem>
                                            <GithubFilled style={{ fontSize: 24 }} />
                                          </Styled.TooltipActionItem>
                                        </a>
                                      </Tooltip>
                                    ) : (
                                      <Anchor href={value.githubUrl}>
                                        <Styled.TooltipActionItem>
                                          <GithubFilled style={{ fontSize: 24 }} />
                                        </Styled.TooltipActionItem>
                                      </Anchor>
                                    )}
                                    {!value.playbackUrl.startsWith('http') ? (
                                      <Tooltip title={value.playbackUrl}>
                                        <a>
                                          <Styled.TooltipActionItem>
                                            <PlayCircleFilled style={{ fontSize: 24 }} />
                                          </Styled.TooltipActionItem>
                                        </a>
                                      </Tooltip>
                                    ) : (
                                      <Anchor href={value.playbackUrl}>
                                        <Styled.TooltipActionItem>
                                          <PlayCircleFilled style={{ fontSize: 24 }} />
                                        </Styled.TooltipActionItem>
                                      </Anchor>
                                    )}
                                    <Anchor href={value.rfcUrl}>
                                      <Styled.TooltipActionItem>RFC</Styled.TooltipActionItem>
                                    </Anchor>
                                  </Space>
                                </Styled.TooltipAction>
                              </Styled.Tooltip>
                            }
                          >
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

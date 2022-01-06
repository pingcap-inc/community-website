import * as Styled from './index.styled';
import React, { useContext, useState } from 'react';
// @ts-ignore
import Layout from '~/pages/vip-center/layout';
import { Button, Col, Modal, Progress, Row } from 'antd';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { api } from '@tidb-community/datasource';
// @ts-ignore
import { PageLoader } from '~/components';
import { MeContext } from '../../context/me.context';

const Page = () => {
  const { isReady } = useRouter();

  const { data } = useSWR<api.ApiResponse<{ data: api.points.GetMeData }, any>, any>(isReady && ['points.getMe']);
  const { data: badges } = useSWR<api.ApiResponse<api.asktug.Badges, any>, any>(isReady && ['asktug.getBadgesList']);
  const pointsData = data?.data;
  const badgesData = badges?.data;

  const [checkedIn, setCheckedIn] = useState(pointsData?.is_today_checked);
  const [checkInMessage, setCheckInMessage] = useState('');

  const checkIn = async () => {
    const res = await api.points.checkIn();
    if (res.data) {
      setCheckedIn(true);
      setCheckInMessage(
        `成功签到！\n连续签到 ${res.data.continues_checkin_count} 天, 成功获得 ${res.data.points} 积分奖励\n。明天继续签到可获得 ${res.data.tomorrow_points} 积分。`
      );
      setIsModalVisible(true);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { meData } = useContext(MeContext);

  if (!data || !badges)
    return (
      <Layout>
        <PageLoader />
      </Layout>
    );

  return (
    <Layout>
      <Styled.Title>会员等级</Styled.Title>
      <Styled.LevelContainer>
        <Row justify="space-between">
          <div>
            <Styled.Name>{meData.username}</Styled.Name>
            <Styled.Level>V{pointsData.current_level}</Styled.Level>
          </div>
          <Button type="primary" onClick={checkIn} disabled={!checkedIn}>
            {checkedIn ? '签到' : '已签到'}
          </Button>
          <Modal title="签到成功" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>{checkInMessage}</p>
          </Modal>
        </Row>
        <Row align="middle">
          <Styled.Score>{pointsData.current_points}</Styled.Score>
          <Styled.Rank>/rank {pointsData.current_rank}</Styled.Rank>
        </Row>
        <Progress percent={pointsData.level_desc.progress * 100} />
        <Styled.Tip>
          还差 {pointsData.level_desc.min_exps - pointsData.current_points} 经验升级为 V{pointsData.current_level + 1}
          ，查看<Styled.Link>升级小攻略</Styled.Link>
        </Styled.Tip>
      </Styled.LevelContainer>
      <Styled.Title>徽章成就</Styled.Title>
      <Styled.BadgesContainer>
        <Row gutter={[16, 16]}>
          {badgesData.map((badge) => (
            <Col sm={12} md={8} lg={6}>
              <Styled.Badge owned={badge.has_badge}>
                <Styled.BadgeIcon src={badge.image} />
                <Styled.BadgeName>{badge.name}</Styled.BadgeName>
              </Styled.Badge>
            </Col>
          ))}
        </Row>
      </Styled.BadgesContainer>
    </Layout>
  );
};

export default Page;

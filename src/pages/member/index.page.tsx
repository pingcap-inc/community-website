import React, { useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Col, Modal, Row } from 'antd';
import useSWR from 'swr';
import { api } from '@tidb-community/datasource';

import { PageLoader } from '~/components';
import { MeContext } from '~/context';

import * as Styled from './index.styled';
import Layout from './layout';
import * as process from 'process';

const Page = () => {
  const { isReady } = useRouter();

  const { data, mutate } = useSWR<api.ApiResponse<{ data: api.points.GetMeData }, any>, any>(
    isReady && ['points.getMe']
  );
  const { data: badges } = useSWR<api.ApiResponse<api.asktug.Badges, any>, any>(isReady && ['asktug.getBadgesList']);
  const pointsData = data?.data;
  const badgesData = badges?.badges;

  const badgesDataOrdered = useMemo(() => {
    const has = badgesData?.filter((value) => value.has_badge) ?? [];
    const notHas = badgesData?.filter((value) => !value.has_badge) ?? [];
    return [...has, ...notHas];
  }, [badgesData]);

  const [checkInMessage, setCheckInMessage] = useState('');

  const checkIn = async () => {
    const res = await api.points.checkIn();
    if (res.data) {
      setCheckInMessage(
        `成功签到！\n连续签到 ${res.data.continues_checkin_count} 天, 成功获得 ${res.data.points} 积分奖励\n。明天继续签到可获得 ${res.data.tomorrow_points} 积分。`
      );
      setIsModalVisible(true);
    }
    await mutate();
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { meData } = useContext(MeContext);

  if (!data || !badges || !meData)
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
          <Button type="primary" onClick={checkIn} disabled={pointsData.is_today_checked}>
            {!pointsData.is_today_checked ? '签到' : '已签到'}
          </Button>
          <Modal
            title="签到成功"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                关闭
              </Button>,
            ]}
          >
            <p>{checkInMessage}</p>
          </Modal>
        </Row>
        <Row align="middle">
          <Styled.ExpLabel> 经验值 </Styled.ExpLabel>
          <Styled.Score>{pointsData.current_exps}</Styled.Score>
          <Styled.Rank>/排名 {pointsData.current_rank}</Styled.Rank>
        </Row>
        <Styled.Tooltip
          align={{
            offset: [-16, 0],
            // @ts-ignore
            targetOffset: [-pointsData.level_desc.progress * 100 + '%', 0],
          }}
          placement="topLeft"
          title={`当前经验值 ${pointsData.current_exps}`}
        >
          <Styled.Progress showInfo={false} percent={pointsData.level_desc.progress * 100} />
        </Styled.Tooltip>
        <Styled.Tip>
          还差 {pointsData.level_desc.max_exps - pointsData.current_exps} 经验升级为 V{pointsData.current_level + 1}
          ，查看
          <Styled.Link fontSize="14px" href="/member/rules">
            升级小攻略
          </Styled.Link>
        </Styled.Tip>
      </Styled.LevelContainer>
      <Styled.Title>
        徽章成就
        <Styled.Count>
          {badgesData.filter((v) => v.has_badge).length} / {badgesData.length}
        </Styled.Count>
      </Styled.Title>
      <Styled.BadgesContainer>
        <Row gutter={[16, 8]}>
          {badgesDataOrdered.map((badge) => (
            <Col xs={12} md={8} lg={6}>
              <Styled.Badge owned={badge.has_badge}>
                <Styled.BadgeIcon src={`${process.env.NEXT_PUBLIC_ASKTUG_WEBSITE_BASE_URL ?? ''}/${badge.image_url}`} />
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

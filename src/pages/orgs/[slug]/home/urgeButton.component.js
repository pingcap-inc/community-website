import React, { useState } from 'react';
import { Button, Popconfirm, Skeleton } from 'antd';
import { ThunderboltFilled } from '@ant-design/icons';
import { Link } from '@tidb-community/ui';

import * as Styled from './home.styled';

const TooltipContent = () => (
  <Styled.Tooltips>
    <b>加急贴响应时效</b>
    <br />
    工作时间：周一至周五 10:00 - 18:00 一小时内响应
    <br />
    非工作时间（含法定节假日）：顺延至下一个工作日 11:00 前响应（如遇线上紧急事故，请
    <Link href="https://tidb.io/contact-us/incident" target="_blank" rel="noreferrer">
      联系社区专家
    </Link>
    ）
  </Styled.Tooltips>
);

const LoadingContent = () => <Skeleton active />;
const NormalContent = ({ urgeStatus }) => (
  <>
    {urgeStatus.consumed_points} 积分兑换 1 次加急权益，当前积分余额 {urgeStatus.user_current_points}
  </>
);
const PoorContent = ({ urgeStatus }) => {
  return (
    <>
      <NormalContent urgeStatus={urgeStatus} />
      （请参考
      <Link
        href="https://accounts.pingcap.com/points?from=from_parent_mindnote#/rules"
        target="_blank"
        rel="noreferrer"
      >
        积分获取指南
      </Link>
      、
      <Link href="https://asktug.com/t/topic/93912?from=from_parent_mindnote" rel="noreferrer" target="_blank">
        问题搜索指南
      </Link>
      ，或者请团队其他成员帮你加急~）
    </>
  );
};
const ForbiddenContent = () => {
  return (
    <>
      无法加急，帖子分类已被修改，请查看
      <Link href="https://asktug.com/t/topic/93405" target="_blank" rel="noreferrer">
        团队认证操作指南
      </Link>
    </>
  );
};

const renderContent = (data, loading) => {
  if (loading) {
    return <LoadingContent />;
  }
  let top;
  if (data.is_qa_topic) {
    if (data.consumed_points <= data.user_current_points) {
      top = <NormalContent urgeStatus={data} />;
    } else {
      top = <PoorContent urgeStatus={data} />;
    }
  } else {
    top = <ForbiddenContent />;
  }

  return (
    <>
      {top}
      <TooltipContent />
    </>
  );
};

const canUrge = (data, loading) => {
  return !loading && data.is_qa_topic && data.consumed_points <= data.user_current_points;
};

const UrgeButton = ({ topic, urging, urge, preUrge }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const onVisibleChange = async (visible) => {
    if (visible) {
      setData((await preUrge(topic.id)).data);
      setLoading(false);
    } else {
      setData(undefined);
      setLoading(true);
    }
  };

  return (
    <Popconfirm
      placement="rightTop"
      icon={<Styled.InfoCircleFilled />}
      okText="确定"
      cancelText="取消"
      onConfirm={() => urge(topic.id)}
      onVisibleChange={onVisibleChange}
      disabled={urging || topic.urgencies.length}
      title={<Styled.PopContent>{renderContent(data, loading)}</Styled.PopContent>}
      okButtonProps={{
        disabled: !canUrge(data, loading) || topic.urgencies.length,
        loading: urging || loading,
      }}
    >
      <Button icon={<ThunderboltFilled />} size="small" disabled={urging || topic.urgencies.length}>
        {topic.urgencies.length ? '已加急' : '加急'}
      </Button>
    </Popconfirm>
  );
};

export default UrgeButton;

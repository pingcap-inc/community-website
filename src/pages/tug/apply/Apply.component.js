import React, { useState } from 'react';
import Router from 'next/router';
import { Modal, Button } from 'antd';

import styles from './Apply.module.scss';
import Container from '~/components/Container/Container';
import { CoreLayout } from '~/layouts';
import Form from './form';
import { api } from '@tidb-community/datasource';

const SuccessModal = (props) => (
  // visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
  <Modal title="提交成功！" {...props}>
    <p>
      我们将于 3 个工作日内对您提交的材料进行审核，并以【AskTUG 私信】形式告知您结果。
      若审核通过，【微信小助手】将添加您为好友并邀请您进入 TUG 专属交流群，敬请留意。
    </p>
    <p>【AskTUG 私信】位置：社区导航栏 - 问答论坛 - 右上角头像下拉 - 私信</p>
  </Modal>
);

const FailModal = (props) => (
  // visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
  <Modal title="提交失败" {...props}>
    <p>{props.content}</p>
  </Modal>
);

const Apply = () => {
  const title = 'TiDB User Group 会员申请';

  const postImageUrl = '/images/people/apply/post.png';

  const question = 'TUG 是什么';
  const answer = 'TUG 是汇聚全球数据库、⼤数据技术从业者的社区，是⼀个独⽴、⾃发、不以盈利为⽬的的组织。';

  const whyJoinTitle = '加⼊TUG ，你能获得什么？';
  const whyJoinItems = [
    { index: 1, iconUrl: '/images/people/apply/why-join-1.svg', text: '让数据库、⼤数据从业者找到⾃⼰的圈⼦' },
    { index: 2, iconUrl: '/images/people/apply/why-join-2.svg', text: '探索技术问题，随时随地交流成⻓，解决问题' },
    { index: 3, iconUrl: '/images/people/apply/why-join-3.svg', text: '发表技术⻅解，收获前沿知识，提升个⼈影响⼒' },
  ];

  const [successModal, showSuccessModal] = useState(false);
  const [failModal, showFailModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    api.tug
      .apply(data)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log('response', response);
        showSuccessModal(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error', error.response.status, error);
        setErrorMessage(error.response.content.detail);
        showFailModal(true);
        switch (error.response.status) {
          case '400': {
            //TODO: show invalid form field
            break;
          }
          case '401': {
            //TODO: navigate to login page
            break;
          }
          case '409': {
            //TODO: show message box with content: 用户已经提交过申请，或者已经加入 TUG 了
            break;
          }
          default: {
            //TODO: show message box with content: 未知错误，请稍后重试
            break;
          }
        }
      });
  };

  const handleSuccess = () => {
    Router.push('/tug');
  };

  return (
    <CoreLayout domain="tidb.io">
      <Container className={styles.container}>
        <div className={styles.start}>
          <h1 className={styles.start_title}>{title}</h1>

          <div className={styles.start_post}>
            <img src={postImageUrl} alt={title} />
          </div>

          <div className={styles.divider_row} />

          <h2 className={styles.start_question}>{question}</h2>

          <div className={styles.start_answer}>{answer}</div>

          <div className={styles.divider_row} />

          <h2 className={styles.start_why_join_title}>{whyJoinTitle}</h2>
          <div className={styles.start_why_join_list}>
            {whyJoinItems.map((value) => (
              <div className={styles.start_why_join_list_item}>
                <div className={styles.start_why_join_list_item_icon}>
                  <img src={value.iconUrl} alt={value.text} />
                </div>
                <div className={styles.start_why_join_list_item_text}>{value.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.end}>
          <Form onSubmit={handleSubmit} />
          <SuccessModal
            visible={successModal}
            onOk={() => showSuccessModal(false)}
            afterClose={handleSuccess}
            footer={
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button key="back" type="primary" onClick={() => showSuccessModal(false)}>
                  确认
                </Button>
              </div>
            }
          />
          <FailModal
            visible={failModal}
            onOk={() => showFailModal(false)}
            errorMessage={errorMessage}
            footer={
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button key="back" type="primary" onClick={() => showFailModal(false)}>
                  确认
                </Button>
              </div>
            }
          />
        </div>
      </Container>
    </CoreLayout>
  );
};

export default Apply;

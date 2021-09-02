import React from 'react';

import Container from '~/components/Container/Container';
import styles from './index.module.scss';
import { CoreLayout } from '~/layouts';
import { TugHead } from '~/components';
import { Radio, Form, Input, Space } from 'antd';
import Button from '../../../components/Button/Button';

export const getStaticProps = () => {
  const title = 'TUG 会员申请';
  const description =
    'TUG 为 TiDB 用户提供了一个开放的交流平台。' +
    '成员们积极在社区中贡献了大量优质的内容，既扩大了 TUG 的影响力，也从中收获很多价值，形成了“来自社区，回馈社区” 的良性循环。';

  const postImageUrl = '/images/people/apply/post.svg';

  const question = 'TUG 是什么';
  const answer = 'TUG 是汇聚全球数据库、⼤数据技术从业者的社区，是⼀个独⽴、⾃发、不以盈利为⽬的的组织。';

  const whyJoinTitle = '加⼊TUG ，你能获得什么？';
  const whyJoinItems = [
    { index: 1, iconUrl: '/images/people/apply/why-join-1.svg', text: '让数据库、⼤数据从业者找到⾃⼰的圈⼦' },
    { index: 2, iconUrl: '/images/people/apply/why-join-2.svg', text: '探索技术问题，随时随地交流成⻓，解决问题' },
    { index: 3, iconUrl: '/images/people/apply/why-join-3.svg', text: '发表技术⻅解，收获前沿知识，提升个⼈影响⼒' },
  ];

  return {
    props: { title, description, postImageUrl, question, answer, whyJoinTitle, whyJoinItems },
  };
};

const People = ({ title, description, postImageUrl, question, answer, whyJoinTitle, whyJoinItems }) => {
  return (
    <>
      <TugHead title={title} description={description} />

      <CoreLayout>
        <Container className={styles.container}>
          <div className={styles.start}>
            <h1 className={styles.start_title}>{title}</h1>

            <div className={styles.start_post}>
              <img src={postImageUrl} />
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
                    <img src={value.iconUrl} />
                  </div>
                  <div className={styles.start_why_join_list_item_text}>{value.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.end}>
            <div className={styles.end_form}>
              <h2 className={styles.end_form_title}>申请信息</h2>
              <Form layout={'vertical'}>
                <Form.Item label="真实姓名">
                  <Input />
                </Form.Item>
                <Form.Item label="手机号码">
                  <Input />
                </Form.Item>
                <Form.Item label="邮箱">
                  <Input />
                </Form.Item>
                <Form.Item label="公司">
                  <Input />
                </Form.Item>
                <Form.Item label="职位">
                  <Input />
                </Form.Item>
                <Form.Item label="你的公司对 TiDB 正处于">
                  <Input />
                </Form.Item>
                <Form.Item label="你加入 TUG 的原因">
                  <Input />
                </Form.Item>
                <Form.Item label="请选择你乐于分享的⽅式">
                  {/*<Radio.Group onChange={this.onChange} value={value}>*/}
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio>参与讨论技术问题</Radio>
                      <Radio>回复他⼈技术困惑</Radio>
                      <Radio>分享技术⼼得</Radio>
                      <Radio>撰写技术⽂章</Radio>
                      <Radio>线下演讲布道</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="你希望担任 TUG 什么⻆⾊">
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio>加⼊ TUG 管理委员会，参与 TUG ⽇常事务管理</Radio>
                      <Radio>加⼊ TUG 区域组，负责组织区域 TUG 的线下活动技术困惑</Radio>
                      <Radio>加⼊ TUG 内容组，负责 TUG 内容建设⼼得</Radio>
                      <Radio>先围观看看⽂章</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="微信 id（确保可以搜索到，以便于⼩助⼿可以邀请进群）">
                  <Input />
                </Form.Item>
                <Form.Item label="三四句话介绍⼀下⾃⼰（⽤于⼊群介绍）">
                  <Input.TextArea rows={3} />
                </Form.Item>
                <Form.Item label="在哪得知 TUG">
                  <Input />
                </Form.Item>
                <Form.Item label="推荐⼈">
                  <Input />
                </Form.Item>
                <Form.Item extra={'提交即表明你已阅读并同意《服务协议》《隐私协议》'}>
                  <Button block>提交申请</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Container>
      </CoreLayout>
    </>
  );
};

export default People;

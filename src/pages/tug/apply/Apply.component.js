import React from 'react';

import styles from './Apply.module.scss';
import Container from '~/components/Container/Container';
import { CoreLayout } from '~/layouts';
import Form from './form';

const Apply = () => {
  const title = 'TiDB User Group 会员申请';

  const postImageUrl = '/images/people/apply/post.svg';

  const question = 'TUG 是什么';
  const answer = 'TUG 是汇聚全球数据库、⼤数据技术从业者的社区，是⼀个独⽴、⾃发、不以盈利为⽬的的组织。';

  const whyJoinTitle = '加⼊TUG ，你能获得什么？';
  const whyJoinItems = [
    { index: 1, iconUrl: '/images/people/apply/why-join-1.svg', text: '让数据库、⼤数据从业者找到⾃⼰的圈⼦' },
    { index: 2, iconUrl: '/images/people/apply/why-join-2.svg', text: '探索技术问题，随时随地交流成⻓，解决问题' },
    { index: 3, iconUrl: '/images/people/apply/why-join-3.svg', text: '发表技术⻅解，收获前沿知识，提升个⼈影响⼒' },
  ];

  // const optionStageOfComanyUseOfTidb = ['生产阶段', '测试阶段', '调研阶段', '不考虑使用', '其他'];
  // const optionPreferredWayOfSharing = ['生产阶段', '测试阶段', '调研阶段', '不考虑使用', '其他'];
  // const optionRolesWantToPlay = [
  //   '加⼊ TUG 管理委员会，参与 TUG ⽇常事务管理',
  //   '加⼊ TUG 区域组，负责组织区域 TUG 的线下活动技术困惑',
  //   '加⼊ TUG 内容组，负责 TUG 内容建设⼼得',
  //   '先围观看看⽂章',
  // ];
  //
  // const { handleSubmit, control } = useForm();
  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post('/api/tug/applications', data);
  //     // eslint-disable-next-line no-console
  //     console.log('response', response);
  //   } catch (err) {
  //     switch (err.response.status) {
  //       case '400': {
  //         //TODO: show invalid form field
  //         break;
  //       }
  //       case '401': {
  //         //TODO: navigate to login page
  //         break;
  //       }
  //       case '409': {
  //         //TODO: show message box with content: 用户已经提交过申请，或者已经加入 TUG 了
  //         break;
  //       }
  //       default: {
  //         //TODO: show message box with content: 未知错误，请稍后重试
  //         // eslint-disable-next-line no-console
  //         console.log('err', err.response.status, err);
  //         break;
  //       }
  //     }
  //   }
  // };

  const handleSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
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
        </div>
      </Container>
    </CoreLayout>
  );
};

export default Apply;

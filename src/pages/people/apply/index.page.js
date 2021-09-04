import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Radio, Form, Input, Space, Select } from 'antd';

import Container from '~/components/Container/Container';
import styles from './index.module.scss';
import { CoreLayout } from '~/layouts';
import { TugHead } from '~/components';
import Button from '~/components/Button/Button';
import { jobTitle } from '../../../constants/crm_options';
import Label from '~/components/Label';
import axios from 'axios';

export const getStaticProps = () => {
  const title = 'TiDB User Group 会员申请';
  const description =
    '加入 TUG，让数据库、大数据从业者找到自己的圈子；' +
    '探索技术问题，随时随地交流成长，解决问题；发表技术见解，收获前沿知识，提升个人影响力。';

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

const Apply = ({ title, description, postImageUrl, question, answer, whyJoinTitle, whyJoinItems }) => {
  const optionStageOfComanyUseOfTidb = ['生产阶段', '测试阶段', '调研阶段', '不考虑使用', '其他'];
  const optionPreferredWayOfSharing = ['生产阶段', '测试阶段', '调研阶段', '不考虑使用', '其他'];
  const optionRolesWantToPlay = [
    '加⼊ TUG 管理委员会，参与 TUG ⽇常事务管理',
    '加⼊ TUG 区域组，负责组织区域 TUG 的线下活动技术困惑',
    '加⼊ TUG 内容组，负责 TUG 内容建设⼼得',
    '先围观看看⽂章',
  ];

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log('data', data);
      const response = await axios.post('/api/tug/applications', data);
      console.log('response', response);
    } catch (err) {
      switch (err.response.status) {
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
          console.log('err', err.response.status, err);
          break;
        }
      }
    }
  };

  return (
    <>
      <TugHead title={title} description={description} />

      <CoreLayout>
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
            <div className={styles.end_form}>
              <h2 className={styles.end_form_title}>申请信息</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Label required className={styles.end_form_label}>
                  真实姓名
                </Label>
                <Controller
                  name="real_name"
                  defaultValue=""
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />

                <Label required className={styles.end_form_label}>
                  手机号码
                </Label>
                <Controller
                  name="phone"
                  defaultValue=""
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />

                <Label required className={styles.end_form_label}>
                  邮箱
                </Label>
                <Controller
                  name="email"
                  defaultValue=""
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />

                <Label required className={styles.end_form_label}>
                  公司
                </Label>
                <Controller
                  name="company_name"
                  defaultValue=""
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />

                <Label required className={styles.end_form_label}>
                  职位
                </Label>
                <Controller
                  name="job_title"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <Select {...field} style={{ width: '100%' }}>
                      {Object.keys(jobTitle).map((value) => (
                        <Select.Option key={value} value={value}>
                          {jobTitle[value]}
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                />

                <Label required className={styles.end_form_label}>
                  你的公司对 TiDB 正处于
                </Label>
                <Controller
                  name="stage_of_comany_use_of_tidb"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <Select {...field} style={{ width: '100%' }}>
                      {optionStageOfComanyUseOfTidb.map((value) => (
                        <Select.Option key={value} value={value}>
                          {value}
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                />

                <Label required className={styles.end_form_label}>
                  你加入 TUG 的原因
                </Label>
                <Controller
                  name="reason_for_application"
                  defaultValue=""
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />

                <Label required className={styles.end_form_label}>
                  请选择你乐于分享的
                </Label>
                {/*<Radio.Group onChange={this.onChange} value={value}>*/}
                <Controller
                  name="preferred_way_of_sharing"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <Radio.Group {...field}>
                      <Space direction="vertical">
                        {optionPreferredWayOfSharing.map((value) => (
                          <Radio key={value} value={value}>
                            {value}
                          </Radio>
                        ))}
                      </Space>
                    </Radio.Group>
                  )}
                />

                <Label required className={styles.end_form_label}>
                  你希望担任 TUG 什么⻆⾊
                </Label>
                <Controller
                  name="roles_want_to_play"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <Radio.Group {...field}>
                      <Space direction="vertical">
                        {optionRolesWantToPlay.map((value) => (
                          <Radio key={value} value={value}>
                            {value}
                          </Radio>
                        ))}
                      </Space>
                    </Radio.Group>
                  )}
                />

                <Label required className={styles.end_form_label}>
                  微信 id（确保可以搜索到，以便于⼩助⼿可以邀请进群）
                </Label>
                <Controller
                  name="wechat_id"
                  defaultValue=""
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />

                <Label required className={styles.end_form_label}>
                  三四句话介绍⼀下⾃⼰（⽤于⼊群介绍）
                </Label>
                <Controller
                  name="bio"
                  defaultValue=""
                  control={control}
                  render={({ field }) => <Input.TextArea {...field} rows={3} />}
                />

                <Label required className={styles.end_form_label}>
                  在哪得知 TUG
                </Label>
                <Controller
                  name="channel"
                  defaultValue=""
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />

                <Label required className={styles.end_form_label}>
                  推荐⼈
                </Label>
                <Controller
                  name="referrer"
                  defaultValue=""
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />

                <Button block htmlType="submit" className={styles.end_form_submit_button}>
                  提交申请
                </Button>
                <div className={styles.end_form_submit_extra}>提交即表明你已阅读并同意《服务协议》《隐私协议》</div>
              </form>
            </div>
          </div>
        </Container>
      </CoreLayout>
    </>
  );
};

export default Apply;

import * as Yup from 'yup';
import { getFormData } from '@tidb-community/datasource';
import { utils } from '@tidb-community/common';
import { enums } from './fields';
import * as Styled from './form.styled';
const { stageOfCompanyUseOfTidb, preferredWayOfSharing, rolesWantToPlay, channel } = enums;

const { buildSchema } = utils.form;
const formData = getFormData();
const { personalPositions } = formData.org.enums;

const data = {
  form: {
    realName: {
      name: 'real_name',
      placeholder: '真实姓名',
      validator: Yup.string()
        .min(2, ({ min }) => `真实姓名最短为 ${min} 个字符`)
        .max(20, ({ max }) => `真实姓名最长为 ${max} 个字符`)
        .required('真实姓名不可为空'),
    },
    phone: {
      name: 'phone',
      placeholder: '手机号码',
      validator: Yup.string().required('手机号码不可为空'),
    },
    email: {
      name: 'email',
      placeholder: '邮箱',
      validator: Yup.string().email('请输入有效的邮箱').required('邮箱不可为空'),
    },
    companyName: {
      name: 'company_name',
      placeholder: '公司',
      labelInValue: false,
      validator: Yup.mixed().required('公司不可为空'),
    },
    jobTitle: {
      name: 'job_title',
      placeholder: '职位',
      options: personalPositions,
      validator: Yup.mixed().required('本项目不可为空'),
    },
    stageOfCompanyUseOfTidb: {
      name: 'stage_of_company_use_of_tidb',
      placeholder: '你的公司对 TiDB 正处于',
      options: stageOfCompanyUseOfTidb,
      validator: Yup.mixed().required('本项目不可为空'),
    },
    reasonForApplication: {
      name: 'reason_for_application',
      placeholder: '你加⼊ TUG 的原因',
      validator: Yup.string()
        .min(5, ({ min }) => `原因最短为 ${min} 个字符`)
        .max(500, ({ max }) => `原因最长为 ${max} 个字符`)
        .required('原因不可为空'),
    },
    preferredWayOfSharing: {
      name: 'preferred_way_of_sharing',
      placeholder: '请选择你乐于分享的⽅式',
      items: preferredWayOfSharing,
      validator: Yup.mixed().required('本项目不可为空'),
    },
    rolesWantToPlay: {
      name: 'roles_want_to_play',
      placeholder: '你希望担任 TUG 什么⻆⾊',
      items: rolesWantToPlay,
      validator: Yup.mixed().required('本项目不可为空'),
    },
    wechatId: {
      name: 'wechat_id',
      placeholder: '微信 ID（确保可以搜索到，以便于⼩助⼿可以邀请进群）',
      validator: Yup.string()
        .min(2, ({ min }) => `微信 ID 最短为 ${min} 个字符`)
        .max(25, ({ max }) => `微信 ID 最长为 ${max} 个字符`)
        .required('微信 ID 不可为空'),
    },
    bio: {
      name: 'bio',
      placeholder: '三四句话介绍⼀下⾃⼰（⽤于⼊群介绍）',
      validator: Yup.string()
        .min(5, ({ min }) => `自我介绍最短为 ${min} 个字符`)
        .max(200, ({ max }) => `自我介绍最长为 ${max} 个字符`),
    },
    channel: {
      name: 'channel',
      placeholder: '在哪得知 TUG',
      options: channel,
    },
    referrer: {
      name: 'referrer',
      placeholder: '推荐⼈',
      validator: Yup.string()
        .min(2, ({ min }) => `推荐⼈最短为 ${min} 个字符`)
        .max(10, ({ max }) => `推荐⼈最长为 ${max} 个字符`),
    },
    agreement: {
      name: 'agreement',
      validator: Yup.bool().oneOf([true], '需阅读并同意相关协议').required('需阅读并同意相关协议'),
      content: (
        <>
          本人已阅读并同意 TiDB Community 的
          <Styled.FormSubmitAgreement href="https://cn.pingcap.com/privacy-policy/" target="_blank" rel="noreferrer">
            《隐私政策》
          </Styled.FormSubmitAgreement>
        </>
      ),
    },
  },
  submitBtnTitle: '提交申请',
};

data.formSchema = buildSchema(data.form);

export default data;

import * as Yup from 'yup';
import { api, getFormData } from '@tidb-community/datasource';
import { utils } from '@tidb-community/common';
import { enums } from './fields';
const { stageOfCompanyUseOfTidb, preferredWayOfSharing, rolesWantToPlay } = enums;

const { buildInitialValues, buildSchema } = utils.form;
const formData = getFormData();
const { personalPositions } = formData.org.enums;

export const fetchOrganizationOptions = (word) =>
  api.orgs.searchCompany({ word }).then((result) =>
    result.data.map(({ name }) => ({
      label: name,
      value: name,
    }))
  );

const data = {
  form: {
    realName: {
      name: 'real_name',
      placeholder: '真实姓名',
      validator: Yup.string()
        .min(2, ({ min }) => `真实姓名最短为${min}个字符`)
        .max(20, ({ max }) => `真实姓名最长为${max}个字符`)
        .required('真实姓名不可为空'),
      initialValue: '[empty]',
    },
    phone: {
      name: 'phone',
      placeholder: '手机号码',
      validator: Yup.string()
        .matches(/(?:\+\d{2,3}[- ]?)?(?:(?:\d{3,4}[- ]?)?\d{8}|\d{11})/, '请输入有效的手机号码')
        .required('手机号码不可为空'),
      initialValue: '18912345678',
    },
    email: {
      name: 'email',
      placeholder: '邮箱',
      validator: Yup.string().email('请输入有效的邮箱').required('邮箱不可为空'),
      initialValue: 'changwei@pingcap.com',
    },
    companyName: {
      name: 'company_name',
      placeholder: '公司',
      validator: Yup.string()
        .min(2, ({ min }) => `公司最短为${min}个字符`)
        .max(20, ({ max }) => `公司最长为${max}个字符`)
        .required('公司不可为空'),
      initialValue: 'PingCAP',
    },
    jobTitle: {
      name: 'job_title',
      placeholder: '职位',
      options: personalPositions,
      validator: Yup.mixed().required('本项目不可为空'),
      initialValue: undefined,
    },
    stageOfCompanyUseOfTidb: {
      name: 'stage_of_company_use_of_tidb',
      placeholder: '你的公司对 TiDB 正处于',
      options: stageOfCompanyUseOfTidb,
      validator: Yup.mixed().required('本项目不可为空'),
      initialValue: undefined,
    },
    reasonForApplication: {
      name: 'reason_for_application',
      placeholder: '你加⼊ TUG 的原因',
      validator: Yup.string()
        .min(5, ({ min }) => `原因最短为${min}个字符`)
        .max(500, ({ max }) => `原因最长为${max}个字符`)
        .required('原因不可为空'),
      initialValue: '好玩好玩啊',
    },
    preferredWayOfSharing: {
      name: 'preferred_way_of_sharing',
      placeholder: '请选择你乐于分享的⽅式',
      items: preferredWayOfSharing,
      validator: Yup.mixed().required('本项目不可为空'),
      initialValue: undefined,
    },
    rolesWantToPlay: {
      name: 'roles_want_to_play',
      placeholder: '你希望担任 TUG 什么⻆⾊',
      items: rolesWantToPlay,
      validator: Yup.mixed().required('本项目不可为空'),
      initialValue: undefined,
    },
    wechatId: {
      name: 'wechat_id',
      placeholder: '微信 ID（确保可以搜索到，以便于⼩助⼿可以邀请进群）',
      validator: Yup.string()
        .min(2, ({ min }) => `微信 ID 最短为${min}个字符`)
        .max(25, ({ max }) => `微信 ID 最长为${max}个字符`)
        .required('微信 ID 不可为空'),
      initialValue: 'changwei1006',
    },
    bio: {
      name: 'bio',
      placeholder: '三四句话介绍⼀下⾃⼰（⽤于⼊群介绍）',
      validator: Yup.string()
        .min(5, ({ min }) => `自我介绍最短为${min}个字符`)
        .max(200, ({ max }) => `自我介绍最长为${max}个字符`),
      initialValue:
        '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
    },
    channel: {
      name: 'channel',
      placeholder: '在哪得知 TUG',
      initialValue: '测试理由',
    },
    referrer: {
      name: 'referrer',
      placeholder: '推荐⼈',
      validator: Yup.string()
        .min(2, ({ min }) => `推荐⼈最短为${min}个字符`)
        .max(10, ({ max }) => `推荐⼈最长为${max}个字符`),
      initialValue: '我自己',
    },
  },
  submitBtnTitle: '提交申请',
  agreementContent: (
    <>
      提交即表明你已阅读并同意
      <a href="https://pingcap.com/zh/privacy-policy/" target="_blank" rel="noreferrer">
        《隐私协议》
      </a>
    </>
  ),
};

data.formSchema = buildSchema(data.form);
data.formInitialValues = buildInitialValues(data.form);

export default data;

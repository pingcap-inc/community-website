import { api, getFormData } from '@tidb-community/datasource';
import * as Yup from 'yup';
import { buildInitialValues, buildScheme } from './form.utils';

const formData = getFormData();

const { organizationSizes, organizationTypes, personalPositions, provinces } = formData.org.enums;

const fetchOrganizationOptions = (word) =>
  api.orgs.searchCompany({ word }).then((result) =>
    result.data.map((company) => ({
      label: company.name,
      value: company.name,
    }))
  );

const data = {
  form: {
    nickname: {
      name: 'name',
      placeholder: '填写团队昵称',
      validator: Yup.string()
        .min(4, ({ min }) => `团队昵称最短为${min}个字符`)
        .max(20, ({ max }) => `团队昵称最长为${max}个字符`)
        .required('团队昵称不可为空'),
      initialValue: '',
    },
    organization: {
      name: 'company',
      placeholder: '请选择所属企业',
      validator: Yup.mixed().required('所属企业不可为空'),
      fetchOptions: fetchOrganizationOptions,
      initialValue: undefined,
    },
    organizationType: {
      name: 'industry_type',
      placeholder: '请选择行业类型',
      options: organizationTypes,
      validator: Yup.mixed().required('行业类型不可为空'),
      initialValue: undefined,
    },
    organizationSize: {
      name: 'member_range',
      placeholder: '请选择企业规模',
      options: organizationSizes,
      validator: Yup.mixed().required('企业规模不可为空'),
      initialValue: undefined,
    },
    organizationLocation: {
      name: 'company_base',
      placeholder: '请选择企业所在地',
      options: provinces,
      validator: Yup.array()
        .length(2, '企业所在地不可为空')
        .required('企业所在地不可为空'),
      initialValue: undefined,
    },
    personalPosition: {
      name: 'job_title',
      placeholder: '请选择您的职位',
      options: personalPositions,
      validator: Yup.mixed().required('职位不可为空'),
      initialValue: undefined,
    },
    personalContact: {
      name: 'contact_phone',
      placeholder: '请填写联系电话，资料如有问题，审核人员将会致电，请保持电话畅通',
      validator: Yup.string()
        .matches(/(?:\+\d{2,3}[- ]?)?(?:(?:\d{3,4}[- ]?)?\d{8}|\d{11})/, '请输入有效的联系电话')
        .required('联系电话不可为空'),
      initialValue: '',
    },
    verificationType: {
      name: 'audit_type',
      initialValue: 0,
      options: [
        {
          label: '企业邮箱认证',
          value: 0,
        },
        {
          label: '在职证明认证',
          value: 1,
        },
      ],
      organizationEmail: {
        email: {
          name: 'email',
          placeholder: '请填写企业邮箱，用于认证',
          validator: Yup.string().when(['verificationType'], {
            is: 0,
            then: Yup.string()
              .email('请输入有效的邮箱')
              .required('邮箱不可为空'),
          }),
          initialValue: '',
        },
        verificationCode: {
          name: 'email_code',
          placeholder: '企业邮箱验证码',
          sendVerifyCodeBtnText: '发送验证码',
          limitSeconds: 120000,
          countDownFormatter: (ms) => `${Math.round(ms / 1000)}s`,
          validator: Yup.string().when(['verificationType'], {
            is: 0,
            then: Yup.string().required('邮箱验证码不可为空'),
          }),
          initialValue: '',
        },
      },
      incumbencyCert: {
        name: 'incumbency_cert',
        uploadFileText: '上传文件',
        extraText:
          '需手写仅用于 TiDB Community 认证字样，并加盖企业公章；信息清晰可见，内容真实有效，不得做任何修改；支持 .jpg .jpeg .bmp .png 格式，大小不超过 5M。',
        validator: Yup.mixed().when(['verificationType'], {
          is: 1,
          then: Yup.mixed().required('文件不可为空'),
        }),
        initialValue: undefined,
      },
    },
    agreements: {
      name: 'agreements',
      value: true,
      prefixText: '我已阅读并同意',
      sla: {
        title: '《服务协议》',
      },
      privacy: {
        title: '《隐私协议》',
      },
      validator: Yup.bool()
        .oneOf([true], '需阅读并同意相关协议')
        .required('需阅读并同意相关协议'),
      initialValue: false,
    },
  },
  submitBtnTitle: '立即认证',
};

data.formScheme = buildScheme(data.form);
data.formInitialValues = buildInitialValues(data.form);

export default data;

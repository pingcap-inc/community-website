import { getFormData } from '@tidb-community/datasource';

const formData = getFormData();

const {
  organizationSizes,
  organizationTypes,
  personalPositions,
  provinces,
} = formData.org.enums;

const data = {
  form: {
    nickname: {
      name: 'nickname',
      placeholder: '填写企业会员昵称',
    },
    organization: {
      name: 'organization',
      placeholder: '请选择所属企业',
    },
    organizationType: {
      name: 'organizationType',
      placeholder: '请选择行业类型',
      enums: organizationTypes,
    },
    organizationSize: {
      name: 'organizationSize',
      placeholder: '请选择企业规模',
      enums: organizationSizes,
    },
    organizationLocation: {
      name: 'organizationLocation',
      placeholder: '请选择企业所在地',
      provinces: provinces,
    },
    personalPosition: {
      name: 'personalPosition',
      placeholder: '请选择您的职位',
      enums: personalPositions,
    },
    personalContact: {
      name: 'personalContact',
      placeholder: '请填写联系电话，资料如有问题，审核人员将会致电，请保持电话畅通',
    },
    verificationType: {
      name: 'verificationType',
      choices: [
        {
          title: '企业邮箱认证',
          value: 0,
        },
        {
          title: '在职证明认证',
          value: 1,
        },
      ],
      organizationEmail: {
        name: 'organizationEmail',
        email: {
          name: 'email',
          placeholder: '请填写企业邮箱，用于企业认证',
        },
        verificationCode: {
          name: 'verificationCode',
          placeholder: '企业邮箱验证码',
          sendBtnTitle: '发送验证码',
        },
      },
      employmentCertification: {
        name: 'employmentCertification',
        uploadFileText: '上传文件',
        extraText:
          '需手写仅用于 TiDB Community 认证字样，并加盖企业公章；信息清晰可见，内容真实有效，不得做任何修改；支持 .jpg .jpeg .bmp .png 格式，大小不超过 5M。',
      },
    },
    agreements: {
      name: 'agreements',
      value: true,
      prefixText: '我已阅读并同意',
      sla: {
        title: '《服务协议》',
        link: '',
      },
      privacy: {
        title: '《隐私协议》',
        link: '',
      },
    },
    submitBtnTitle: '立即认证',
  },
};

export default data;

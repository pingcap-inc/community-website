import * as Styled from '~/pages/events/hackathon2021/index.styled';
import { getImage } from '~/pages/events/hackathon2021/index.styled';

export const groupsData = [
  {
    name: '内核组',
    desc: '为 TiDB、TiKV、PD 性能、稳定性、易用性或功能等各方面做出提升，也可以构建云原生时代的 TiDB 内核等。',
  },
  {
    name: '工具组',
    desc: '对 TiDB 部署运维、数据流转（数据迁移、数据复制、全量导入导出）、集群容灾、诊断和可视化等配套工具的优化或新创意。',
  },
  {
    name: '生态组',
    desc: '丰富 TiDB/TiKV/TiDB Cloud 应用生态，补充和增强上下游工具、平台、应用对 TiDB/TiKV/TiDB Cloud 的支持能力，例如增强 MySQL 生态中间件、应用框架对 TiDB 的兼容性，基于 TiDB Cloud 的云上应用开发等。',
  },
  { name: '∞', desc: '欢迎其他任何 Cool idea，创造不设限！\n PS. Chaos Mesh 爱好者看过来' },
];
export const stepsData = [
  {
    title: 'STEP 1：提交报名',
    date: '截至 12 月 27 日',
    desc: (
      <div>
        报名开始，只要你对 coding 感兴趣，都可以报名参加，点击
        <Styled.Link href={'https://asktug.com/t/topic/273502'}>查看参赛指南。</Styled.Link>
      </div>
    ),
    action: '立即报名',
    url: 'https://forms.pingcap.com/f/TiDBHackathon2021apply',
  },
  {
    title: 'STEP 2：完成组队',
    date: '报名后 - 12 月 28 日',
    desc: <div>报名成功即可启动组队，找到你喜欢的队友组成战队，选拔队长，拟定队名，提交团队 RFC</div>,
    action: '提交 RFC',
    url: 'https://forms.pingcap.com/f/TiDBHackathon2021RFC',
  },
  {
    title: 'STEP 3：赛前准备',
    date: '截至 1 月 7 日（共 10 天）',
    desc: (
      <div>
        我们给你准备了充分的<Styled.Link href={'https://asktug.com/t/topic/273503'}>学习资料</Styled.Link>
        ，专业导师群内答疑等，让你学习无障碍。
      </div>
    ),
    action: '查看学习资料',
    url: 'https://asktug.com/t/topic/273503',
  },
  {
    title: 'STEP 4：预赛答辩',
    date: '1 月 8 日（周六）',
    desc: <div>北京、上海、杭州、成都、深圳、广州任选一处决赛参赛点，还可以走进 PingCAP Office 感受 P 社文化。</div>,
    action: '下载答辩 PPT 模板',
    url: 'https://asktug.com/t/topic/273653',
  },
  {
    title: 'STEP 5：决赛答辩&颁奖',
    date: '1 月 9 日（周日）',
    desc: <div>决赛现场如火如荼，众多奖项等你拿！</div>,
  },
];
export const FAQData = [
  { q: '1. 每支参赛队伍最多几个人？', a: '团队参赛最多 4 人为一个小组。单人参赛也支持哦～' },
  {
    q: '2. 主办方提供餐饮和住宿吗？',
    a: '我们提供参赛者和志愿者比赛期间的餐饮（两份午餐、一份早餐、两份晚餐），参赛选手可留在比赛场地过夜，如需在场地附近租住宾馆请自行解决～',
  },
  { q: '3. 比赛会由于疫情取消吗？', a: '我们会密切关注疫情动向，如有不可抗力则比赛会改为全程线上，不会取消哦～' },
  { q: '4. 会场分别在哪些城市？', a: '上海、北京、杭州、广州、成都、深圳' },
  {
    q: '5. 什么时候可以开始编写代码？',
    a: '组队完成后就可以开始编写代码了！如果遇到学习资料中尚未解答的问题，可以加入Hackathon 2021 参赛群，群内将有导师不定期线上答疑，以及集中直播分享。',
  },
  { q: '6. 校园团队奖参与评选的人群是？', a: '该团队需要全员皆为：未毕业大学生、硕士、博士。' },
];
export const judgesData = [
  {
    name: '陈肃',
    desc: 'DataPipeline CTO',
    detail:
      '陈肃，2010 年获中国科学院研究生院软件理论博士学位后加入中国移动研究院用户行为实验室，历任算法工程师、项目经理、实验室技术负责人。2015 加入亿瑞互动科技（北京）有限公司任技术 VP，负责大后端+自适应学习系统的研发工作。2017 年以合伙人身份加入 DataPipeline 任 CTO，负责公司的产品技术研发工作。',
  },
  {
    name: '代闻',
    desc: 'PingCAP TiDB Cloud 负责人',
    detail:
      '负责 TiDB Cloud 产品和业务，在大规模后台架构、物联网应用、媒体行业转型、企业混合IT和自动化运维等方面有丰富经验。',
  },
  {
    name: '冯光普',
    desc: '多点 Dmall 数据库团队负责人',
    detail:
      '曾在阿里巴巴数据库团队，负责 AliSQL 分支维护、特性开发及 Bugfix，目前是数字化零售多点 Dmall 数据库负责人，主要负责大规模 MySQL、Redis、TiDB、MongoDB 等数据库集群的安全稳定高效，DB PaaS 平台建设，以及同城双活/异地多活数据库整体架构及数据同步方案落地。',
  },
  {
    name: '关胜亮',
    desc: '涛思数据联合创始人兼技术 VP',
    detail:
      '关胜亮，涛思数据联合创始人兼技术 VP。时序数据库 TDengine 的主要开发者之一。具有超过10年的技术开发与研发管理经验，一直专注在时序数据存储领域，目前专注于高可用集群、高效数据写入、实时数据订阅等技术方向。在加入涛思数据之前，先后就职于国家电网、360 等公司。',
  },
  {
    name: '郭炜',
    desc: 'Apache Foundation Member',
    detail:
      'Apache Foundation Member, Apache IPMC Member\n Apache Dolphin Scheduler PMC，ClickHouse 华人社区创始人，中国 2021 年开源杰出人物。\n 郭炜先生毕业于北京大学，先后在中金、IBM、Teradata 任大数据方重要职位，对大数据前沿研究做出卓越贡献。',
  },
  {
    name: '李凯',
    desc: '美团数据库研发中心负责人',
    detail:
      '毕业于北京邮电大学，2007 年至今先后在百度、蚂蚁、华为从事分布式存储和分布式数据库的研发和技术管理工作，目前担任美团基础技术部数据库研发中心负责人，团队主要负责美团数据库运维、平台、中间件和自研分布式数据库内核的工作。',
  },
  {
    name: '潘娟',
    desc: 'SphereEx 联合创始人 & CTO，Apache ShardingSphere PMC',
    detail:
      'SphereEx 联合创始人 & CTO，Apache Member & Apache ShardingSphere PMC，Apache brpc (Incubating) Mentor & Apache AGE (Incubating)\
       Mentor，AWS Data Hero，中国木兰开源社区导师。\n 曾负责京东数科数据库智能平台的设计与研发，现专注于分布式数据库 &\
        中间件生态及开源领域。被评为《2020 中国开源先锋人物》，2021 OSCAR 尖峰开源人物。',
  },
  {
    name: '潘英超',
    desc: '小米大数据委员会秘书长',
    detail:
      '中国计算机学会大数据 SIG 联席主席，TGO 鲲鹏会会员。14 年 ICT 技术及产品管理经验，先后供职于锐捷网络、摩托罗拉、思科、微软、Quixey、2017 年加入小米。在数字化转型、数据中台、数据治理等领域有着扎实的理论积累及丰富的实践经验。',
  },
  {
    name: '沈旸',
    desc: '神州数码集团副总裁兼 CIO',
    detail:
      '神州数码集团股份有限公司副总裁兼 CIO，云基地负责人，集团技术委员会委员。主导集团数字化转型、数字中台、营销私域运营等，领导分布式数据库、开源 ERP、SAAS 等领域的开发管理工作。是信息技术领域超过 12 年的专业技术专家。',
  },
  {
    name: '唐刘',
    desc: 'VP of Engineering, PingCAP',
    detail: 'Chief Engineer, VP of Engineering, First Employee @PingCAP',
  },
  {
    name: '吴晟',
    desc: 'Apache 软件基金会董事，Tetrate 创始工程师',
    detail: 'Tetrate 创始工程师，Apache 软件基金会董事，Apache SkyWalking 创始人。',
  },
  {
    name: '徐之浩',
    desc: '明势资本执行董事',
    detail:
      '徐之浩在明势资本负责企业服务、云计算与开源软件、全真互联网等领域，投资了 PingCAP、蔚领时代、StarRocks、Nothing 等初创企业。在加入投资行业之前，徐之浩有近 10 年研发工作经历，曾供职于微软、百度、微博、亚马逊云服务等科技公司。',
  },
  {
    name: '殷成文',
    desc: 'PingCAP 混沌工程团队负责人',
    detail:
      'PingCAP 混沌工程团队负责人，CNCF 开源项目 Chaos Mesh 的发起人和维护者。之前主要负责分布式数据库 TiDB 的稳定性测试框架的设计和开发任务，目前致力于探索混沌工程的实施和推广工作。开源爱好者，“KubeCon + CloudNativeCon Europe 2021” 和 “KubeCon + CloudNativeCon North America 2021” 计划委员会成员。',
  },
  {
    name: '余军',
    desc: 'PingCAP 解决方案团队负责人',
    detail:
      '拥有 20 年企业级开源软件架构经验，前富麦科技 CTO、前 Red Hat 中国区解决方案业务总监、前惠普分布式计算高级技术专家，长期服务于银行机构、券商及大型保险行业等，专注于企业级分布式系统 / 高可用架构设计及开源 IT 战略规划咨询。',
  },
  {
    name: '俞勇',
    desc: '上海交通大学特聘教授、博士生导师，ACM 班创始人',
    detail:
      '1986 年入职上海交通大学，现任上海交通大学 ACM 国际大学生程序设计竞赛总教练，上海交通大学“教育部基础学科拔尖学生培养计划”计算机学科（ACM 班）项目主任，上海交通大学 APEX 实验室主任，长期致力于培养计算机科学家及行业人员。',
  },
  {
    name: '翟佳',
    desc: 'Apache Pulsar PMC 成员、StreamNative 联合创始人',
    detail:
      '翟佳曾任职于 EMC，担任统一存储部门技术负责人。他主要从事实时计算和分布式存储系统的相关研究工作，在开源项目 Apache BookKeeper、Apache Pulsar 等项目中持续贡献代码，是开源项目 Apache Pulsar 和 Apache BookKeeper 的 PMC 成员和 Committer。',
  },
  {
    name: '翟玉龙',
    desc: 'PingCAP Dataplatform 团队 PM',
    detail: 'PingCAP 前软件开发工程师；现 Data Platform 团队 PM，业余时间会写代码的开源爱好者。',
  },
  {
    name: '张建',
    desc: 'PingCAP 研发总监',
    detail:
      '开源爱好者，PingCAP 研发总监，前阿里巴巴 ODPS 执行引擎研发工程师。在查询优化，分布式计算等方面有多年的研发经验。2017 年加入 PingCAP 从事 TiDB SQL 层的产品研发、架构改进、TiDB 社区建设等，目前在负责 TiKV 的产品研发与改进。',
  },
  {
    name: '张雁飞',
    desc: 'Datafuse Labs 联合创始人',
    detail: '开源狂热爱好者，TokuDB & ClickHouse 重度贡献者，开源 Cloud Warehouse 项目 Databend 发起人。',
  },
];
export const carouselData = [
  {
    img: getImage('prev-20.jpg'),
    url: 'https://tidb.io/archived/events/hackathon2020/',
    desc: 'TiDB Hackathon 2020',
  },
  {
    img: getImage('prev-19.jpg'),
    url: 'https://tidb.io/archived/events/hackathon2019/',
    desc: 'TiDB Hackathon 2019',
  },
  {
    img: getImage('prev-18.jpg'),
    url: 'https://tidb.io/archived/events/hackathon2018/',
    desc: 'TiDB Hackathon 2018',
  },
];

import * as Styled from '~/pages/events/hackathon2021/index.styled';
import { getImage } from '~/pages/events/hackathon2021/index.styled';

export const seo = {
  title: 'TiDB Hackathon 2021',
  description: '本次 Hackathon 主题为「Explore the Sky」，尽情发挥天马行空的想象，用 TiDB 创造无限可能。',
  keywords: ['黑客马拉松', 'TiDB', 'Hackathon'],
};

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
    title: 'STEP 1intro: "提交报名',
    date: '截至 12 月 27 日',
    desc: (
      <div>
        报名开始，只要你对 coding 感兴趣，都可以报名参加，点击
        <Styled.Link href={'https://pingkai.cn/tidbcommunity/forum/t/topic/273502'}>查看参赛指南。</Styled.Link>
      </div>
    ),
    action: '立即报名',
    url: 'https://forms.pingcap.com/f/TiDBHackathon2021apply',
  },
  {
    title: 'STEP 2intro: "完成组队',
    date: '报名后 - 12 月 28 日',
    desc: <div>报名成功即可启动组队，找到你喜欢的队友组成战队，选拔队长，拟定队名，提交团队 RFC</div>,
    action: '提交 RFC',
    url: 'https://forms.pingcap.com/f/TiDBHackathon2021RFC',
  },
  {
    title: 'STEP 3intro: "赛前准备',
    date: '截至 1 月 7 日（共 10 天）',
    desc: (
      <div>
        我们给你准备了充分的
        <Styled.Link href={'https://pingkai.cn/tidbcommunity/forum/t/topic/273503'}>学习资料</Styled.Link>
        ，专业导师群内答疑等，让你学习无障碍。
      </div>
    ),
    action: '查看学习资料',
    url: 'https://pingkai.cn/tidbcommunity/forum/t/topic/273503',
  },
  {
    title: 'STEP 4intro: "预赛答辩',
    date: '1 月 8 日（周六）',
    desc: <div>北京、上海、杭州、成都、深圳、广州任选一处决赛参赛点，还可以走进 PingCAP Office 感受 P 社文化。</div>,
    action: '下载答辩 PPT 模板',
    url: 'https://asktug.com/t/topic/273653',
  },
  {
    title: 'STEP 5intro: "决赛答辩&颁奖',
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
  { q: '6. 校园团队奖参与评选的人群是？', a: '该团队需要全员皆为intro: "未毕业大学生、硕士、博士。' },
];
export const judgesData = [
  {
    name: '陈肃',
    desc: 'DataPipeline CTO',
    detail:
      '陈肃，2010 年获中国科学院研究生院软件理论博士学位后加入中国移动研究院用户行为实验室，历任算法工程师、项目经理、实验室技术负责人。2015 加入亿瑞互动科技（北京）有限公司任技术 VP，负责大后端+自适应学习系统的研发工作。2017 年以合伙人身份加入 DataPipeline 任 CTO，负责公司的产品技术研发工作。',
  },
  {
    name: '陈昱',
    desc: '云启资本合伙人',
    detail:
      '重点关注大数据、云计算、智能驾驶和机器人等领域的投资。主导投资了 PingCAP、Zilliz、Jina AI、Singularity、TigerGraph、Graviti、Cloudchef、元戎启行、擎朗智能、智齿科技、德风科技、新石器、数睿数据、追势科技和比瓴科技等优秀企业。',
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
    name: '贺军',
    desc: '建信金科基础技术中心架构师',
    detail:
      '曾在 IBM 中国系统科技实验室、微软亚洲工程院搜索技术中心和阿里巴巴阿里云智能等企业部门工作。一直在开源系统软件、数据库、高性能计算、云计算、大数据等分布式系统领域从事相关技术工作，参与了众多企业级系统软件技术研发和产品创新的商业实践。',
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
      'SphereEx 联合创始人 & CTO，Apache Member & Apache ShardingSphere PMC，Apache brpc (Incubating) Mentor & Apache AGE (Incubating) Mentor，AWS Data Hero，中国木兰开源社区导师。' +
      '\n 曾负责京东数科数据库智能平台的设计与研发，现专注于分布式数据库 & 中间件生态及开源领域。被评为《2020 中国开源先锋人物》，2021 OSCAR 尖峰开源人物。',
  },
  {
    name: '潘英超',
    desc: '小米大数据委员会秘书长',
    detail:
      '中国计算机学会大数据 SIG 联席主席，TGO 鲲鹏会会员。14 年 ICT 技术及产品管理经验，先后供职于锐捷网络、摩托罗拉、思科、微软、Quixey、2017 年加入小米。在数字化转型、数据中台、数据治理等领域有着扎实的理论积累及丰富的实践经验。',
  },
  {
    name: '乔木',
    desc: 'Google Cloud Data Management Specialist',
    detail:
      '前 AWS 数据库以及存储服务 Subject Matter Expert，现 Google Cloud 数据库服务 Specialist。在云计算数据库的架构以及使用方面有丰富经验。',
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
    name: '谢佳',
    desc: '华创资本合伙人',
    detail:
      '专注于企业软件及服务领域的早期投资，2015 年加入华创资本，研究驱动型投资人，覆盖的领域包括 SaaS / Cloud Infra / AI&DataTech / Cybersecurity 等。在华创资本负责推动和执行的投资案例包括intro: "PingCAP、ONES、梦诚科技、天旦、中睿天下、FONE、石墨文档、JuiceData、百观科技、小满科技等。',
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
    url: 'https://pingkai.cn/tidbcommunity/archived/events/hackathon2020/',
    desc: 'TiDB Hackathon 2020',
  },
  {
    img: getImage('prev-19.jpg'),
    url: 'https://pingkai.cn/tidbcommunity/archived/events/hackathon2019/',
    desc: 'TiDB Hackathon 2019',
  },
  {
    img: getImage('prev-18.jpg'),
    url: 'https://pingkai.cn/tidbcommunity/archived/events/hackathon2018/',
    desc: 'TiDB Hackathon 2018',
  },
];

export const winners = [
  {
    github: 'https://github.com/shenzhengcmss/tidb-support-s3',
    intro:
      'TiDB冷热数据分层存储主要考虑的是热数据存放在TiKV上以及很少几率查询分析的冷数据存放到便宜通用的云存储S3上，同时使S3存储引擎支持TiDB部分算子下推，实现TiDB基于S3冷数据分析查询。',
    name: 'He3',
    prize: '一等奖￥100000',
    rfc: 'https://github.com/shenzhengcmss/tidb-support-s3/blob/main/TiDB%20%e5%86%b7%e7%83%ad%e6%95%b0%e6%8d%ae%e5%88%86%e5%b1%82%e5%ad%98%e5%82%a8.md',
    video: 'https://www.bilibili.com/video/BV1Y44y1L7VZ?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/tigraph/tidb',
    intro:
      '语法完备的分布式图数据库。对2021年TiGraph项目的一次革命性进化。全新的借鉴自pgql的完备语法，数据存储于TiKV并实现了算子下推。DDL与编解码方面实现了对原有结构的极小侵入与改动',
    name: 'TiMatch',
    prize: '二等奖￥50000',
    rfc: 'https://github.com/tigraph/rfc-2022/blob/main/README.md',
    video: 'https://www.bilibili.com/video/BV1Wq4y1c7Aj?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/hackathon2021-pCloud',
    intro:
      '灵感来自于 iCloud，希望能随时随地方便用户开启备份上云的功能，针对备份需求改进现有的付费模式，利用云上存储，更方便快捷的实现备份恢复到任意时间点的功能。',
    name: 'pCloud',
    prize: '二等奖￥50000, 最佳市场潜力（云启）￥8000',
    rfc: 'https://github.com/hackathon2021-pCloud/pCloud',
    video: 'https://www.bilibili.com/video/BV1Kr4y1e7iB?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/TiLaker/tikv-client-java',
    intro: 'TiDB 数据实时入湖工具',
    name: 'TiLaker',
    prize: '二等奖￥50000, 最佳市场潜力（华创）￥8000 ,最佳人气奖 罗技键盘人手1个',
    rfc: 'https://github.com/TiLaker/tilaker',
    video: 'https://www.bilibili.com/video/BV1t3411Y7yV?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/Long-Live-the-DoDo',
    intro:
      'Flashback 是用于在用户发生误操作的时候，快速回滚至原先版本，避免产生重大损失的特性，得益于 MVCC 机制，我们可以让 TiDB 在某些方面做的比 Oracle Flashback 更强大！',
    name: '渡渡鸟复兴会',
    prize: '三等奖￥20000',
    rfc: 'https://github.com/Long-Live-the-DoDo/rfc',
    video: 'https://www.bilibili.com/video/BV1ZF411H73L?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/collie-dev',
    intro:
      'collie diagnosing platform 集 故障场景信息收集 / ui 在线观察分析 / 机器学习辅助诊断 于一身的故障诊断分析解决平台',
    name: '我们这么菜评委不会生气吧',
    prize: '三等奖￥20000',
    rfc: 'https://github.com/WPH95/collie',
    video: 'https://www.bilibili.com/video/BV143411Y76Y?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/hackathon2021index/tidb/blob/hackathon5.3/hackathan_rfc.md',
    intro: '用 lightning 的方式来实现 索引相关 ddl: 生成 sst 文件然后 ingest 到 tikv.',
    name: '黑马警长',
    prize: '三等奖￥20000',
    rfc: 'https://github.com/hackathon2021index/tidb/blob/hackathon5.3/hackathan_rfc.md',
    video: 'https://www.bilibili.com/video/BV1KT4y127SP?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/oom-ai/oomstore',
    intro:
      'oom.ai 特征平台支持集成 TiDB/TiKV 作为存储，让 TiDB 的用户只需进行简单的配置，即可解锁机器学习特征平台，为模型提供可靠的数据支持。',
    name: 'oom.ai',
    prize: '三等奖￥20000',
    rfc: 'https://github.com/oom-ai/rfc-tidb-hackathon-2022',
    video: 'https://www.bilibili.com/video/BV1XS4y157S5?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/Hackathon-2022-TiVP',
    intro:
      'TiVP is a Visual Plan for TiDB SQL explaination integreted with Dashboard. 该项目旨在可视化 TiDB 生成的执行计划。',
    name: 'TiVP',
    prize: '三等奖￥20000, 用户之选奖￥5000',
    rfc: 'https://github.com/yiwen92/Hackathon-2021-TiVP/blob/master/README.md',
    video: 'https://www.bilibili.com/video/BV12b4y1J77R?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/TPC-TiKV',
    intro: 'Better TiKV!!!',
    name: 'TPC',
    prize: '三等奖￥20000, 技术潜力奖￥5000',
    rfc: 'https://github.com/TPC-TiKV/rfc',
    video: 'https://www.bilibili.com/video/BV1U44y1W7im?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/TiInterstellar/tidb',
    intro:
      '为 TiDB 设计了一个新功能，某表会自动将历史数据分区，并移入更便宜的对象存储（S3）中去。同时对外的SQL查询接口不变，依然可以同时查询到 SSD 磁盘，也能查询到对象存储中的数据。',
    name: 'Interstellar',
    prize: '云上应用￥3000',
    rfc: 'https://github.com/TiInterstellar/tidb',
    video: '',
  },
  {
    github: 'https://github.com/fantastic-things/chaoscraft/blob/main/README.MD',
    intro: '在游戏中展示 Kubernetes 工作负载并进行混沌实验。',
    name: '滑滑蛋',
    prize: '无限创意￥5000',
    rfc: 'https://github.com/fantastic-things/chaoscraft/blob/main/README.MD',
    video: 'https://www.bilibili.com/video/BV1jP4y177FH?spm_id_from=333.999.0.0',
  },
  {
    github: 'https://github.com/PDSL-AI/Tenseigan',
    intro:
      'Tenseigan是针对 TiDB 的一个分布式数据库的调优测试框架，该工具能够提供intro: "自动调参、参数影响度评估等功能，集成了多种 workload，支持 cloud 和 on-promise 环境。',
    name: 'Matrix',
    prize: '最佳校园￥5000, 最佳市场潜力（明势）￥8000',
    rfc: 'https://github.com/CheneyDing/2021-TiDB-Hackthon-RFC/blob/main/README.md',
    video: 'https://www.bilibili.com/video/BV1yq4y1c7NV?spm_id_from=333.999.0.0',
  },
  {
    github: undefined,
    intro:
      'Gitlab在TiDB上的究极兼容！！实现一个兼容PG协议的TiDB，兼容Gitlab。启动多Gitlab实例，看看换了一个协议的TiDB数据库还能不能撑住！比以前更强，还是更弱，让我们拭目以待！',
    name: 'TiGi',
    prize: '积分挑战奖￥2000',
    rfc: 'https://github.com/DigitalChinaOpenSource/TiGi',
    video: undefined,
  },
  {
    github: undefined,
    intro:
      'lotusdb 是一个 Go 语言实现的单机 kv 存储引擎，具有读写速度快、读写放大极低的特点。 我们希望能够使 lotusdb 成为 TiKV 中除了 rocksdb 之外的新选择。',
    name: 'lotusdb',
    prize: '积分挑战奖￥2000',
    rfc: 'https://github.com/flower-corp/lotusdb/blob/main/hackathon-rfc.md',
    video: undefined,
  },
  {
    github: undefined,
    intro:
      '我们在使用 TiDB 前缀索引表的过程中，针对我们的查询，执行效率不高，我们针对这种查询尝试进行优化，希望在这种查询下能达到普通索引的效率',
    name: '摸鱼不',
    prize: '积分挑战奖￥2000',
    rfc: 'https://github.com/jiyfhust/prefix_index/blob/main/RFC.md',
    video: undefined,
  },
  {
    github: undefined,
    intro:
      'TiDelta 能帮助你整合 TiDB 关键路径的性能 metrics，并生成 Metrics Diff Report，方便用户对比任何两个时间段，或者是升级前后、测试库和生产库的性能指标。',
    name: 'TiAlphas',
    prize: '最佳人气奖 罗技键盘人手1个',
    rfc: 'https://github.com/Yui-Song/tidelta',
    video: undefined,
  },
];

export const finalists = [
  {
    team: 'Bubbles',
    project: 'Deploy TiDB on Cloud',
    intro: '提供一个可视化平台，在公有云平台上快速部署TiDB。',
    rfc: 'https://github.com/jiayang-zheng/deploy-tidb-on-cloud/blob/main/README.md',
  },

  {
    team: 'ChaosMore',
    project: 'ChaosMore',
    intro: '基于eBPF 为 ChaosMesh 设计自定义混沌工程的插件机制和能力',
    rfc: 'https://github.com/vanx7/chaos-more',
  },

  {
    team: '豫园',
    project: 'TiMultiple',
    intro: '基于Raft Learner和Raw API实现多集群读写分离和在线灾备',
    rfc: 'https://github.com/lizhenhuan/tikv',
  },

  {
    team: '都江堰',
    project: 'Dujiang Weir',
    intro:
      'Weir 是伴鱼公司研发针对 TiDB 场景的七层负载均衡器。同许多面向分库分表的七层负载均衡不同，它的目标是为 TiDB' +
      ' 带来更强的数据库治理能力，以非侵入的方式为 TiDB 提供了许多不适合在内核中实现的能力。我们相信一个能够以非侵入方式模块化扩展的 Weir 能够为它带来无穷的活力，成为整个 TiDB 生态能力扩展的桥头堡。',
    rfc: 'https://github.com/tidb-hackathon/dujiangyan/blob/main/README.md',
  },

  {
    team: 'Ti可立刻',
    project: 'Ti Click',
    intro:
      '通过在线IDE的方式，快速搭建TiDB的可编程和编译的在线实验室。提高用户的TiDB生态的初体验。 此外还可以让用户在线尝试包括TiDB' +
      ' Cloud服务在内的多项服务，降低TiDB生态的尝鲜复杂程度。',
    rfc: 'https://github.com/ti-click/',
  },

  {
    team: 'Matrix',
    project: 'Tenseigan',
    intro:
      'Tenseigan是针对 TiDB 的一个分布式数据库的调优测试框架，该工具能够提供intro: "自动调参、参数影响度评估等功能，集成了多种' +
      ' workload，支持 cloud 和 on-promise 环境。',
    rfc: 'https://github.com/CheneyDing/2021-TiDB-Hackthon-RFC/blob/main/README.md',
  },

  {
    team: 'NbNative',
    project: '让TiDB在云上智能的说话。',
    intro:
      '解决当前TiDB在云上云原生方式运维的局限性，为TiDB在云上提供云原生场景下智能化运维手段，让TiDB在云上智能的说话。',
    rfc: 'https://github.com/NbNative/RFC',
  },

  {
    team: 'OneLastCode',
    project: 'Incremental Analyze Table',
    intro: 'We will cache the result of analyze request in TiKV node to avoid' + ' calculating again next time.',
    rfc: 'https://github.com/tikv/rfcs/pull/83',
  },

  {
    team: 'FR',
    project: 'TiExec',
    intro:
      'TiExec 会尝试给通过此工具运行的程序做一些性能优化，在某些场景下会带来直接的性能提升，如在 TiDB 的某 OLTP' +
      ' 场景对部分组件进行优化之后的初步测试显示能带来约 6-11% 的整体性能提升',
    rfc: 'https://github.com/hnes/tiexec/blob/main/RFC.md',
  },

  {
    team: 'Ti2Sky',
    project: 'TiTravel',
    intro: '扩展TiDB能力，实现对负载的一键录制与回放，从而帮助用户便捷地进行场景仿真和压力测试',
    rfc: 'https://github.com/ti2sky/RFC',
  },
];

const data = [
  {
    name: '何志勇',
    company: '平安科技',
    title: '资深云数据库工程师',
    links: [
      {
        name: 'TiDB 在平安核心系统的引入及应用',
        href: 'https://pingcap.com/cases-cn/user-case-pingankeji/',
      },
      {
        name: '【Talk】TiDB 在平安的应用实战',
        href: 'https://pingcap.com/community-cn/techday2019/',
      },
      {
        name: '【Talk】分进合击——分布式数据库在平安应用实战',
        href: 'https://dbaplus.cn/activity-48-759-1.html',
      },
    ],
  },
  {
    name: '孙晓光',
    company: '知乎',
    title: '技术平台负责人',
    links: [
      {
        name: 'TiDB 在知乎万亿量级业务数据下的实践和挑战',
        href: 'https://mp.weixin.qq.com/s/AdxZY0FVYGkTos0F5LOfzw',
      },
      {
        name: '知乎已读服务的前生今世与未来',
        href: 'https://asktug.com/t/topic/312',
      },
      {
        name: 'TiDB PD 组件代码阅读',
        href: 'https://asktug.com/t/tidb-pd/1388',
      },
      {
        name: '拥抱 Elasticsearch：给 TiDB 插上全文检索的翅膀',
        href: 'https://mp.weixin.qq.com/s/TWi4ZbTrsnbie4C6Vdjt-A',
      },
      {
        name: '【Talk】TiDB 在知乎万亿量级业务数据下的实践和挑战',
        href: 'https://pingcap.com/community-cn/techday2019/',
      },
      {
        name: '【Talk】知乎已读服务架构演进',
        href: 'https://mp.weixin.qq.com/s/9pOVJUHqgJgfdUQRUvm67w',
      },
    ],
  },
  {
    name: '张俊骏',
    company: '小红书',
    title: '数据库与中间件团队负责人',
    links: [
      {
        name: 'TiDB 在小红书从 0 到 200+ 节点的探索和应用',
        href: 'https://mp.weixin.qq.com/s/fq7U_x4LftlqFx3vD1S3jw',
      },
      {
        name: '【Talk】TiDB 在小红书多场景应用',
        href: 'https://pingcap.com/community-cn/techday2019/',
      },
      {
        name: '【Talk】TiDB 在小红书的实践案例分享',
        href: 'https://mp.weixin.qq.com/s/67fxOqXbwFO9go7K_7x-CA',
      },
    ],
  },
  {
    name: '胡盼盼',
    company: '微众银行',
    title: '数据库平台室经理',
    links: [
      {
        name: '微众银行数据库架构演进及 TiDB 实践经验',
        href: 'https://pingcap.com/cases-cn/user-case-webank/',
      },
      {
        name: '【Talk】微众银行 TiDB 实践',
        href: 'https://pingcap.com/community-cn/techday2019/',
      },
      {
        name: '【Talk】微众银行核心数据库架构演进',
        href: 'https://archsummit.infoq.cn/2019/shenzhen/presentation/1828',
      },
    ],
  },
  {
    name: '刘春雷',
    company: '58 集团',
    title: '高级 DBA',
    links: [
      {
        name: 'TiDB 在 58 集团的应用与实践',
        href: 'https://pingcap.com/cases-cn/user-case-58/',
      },
      {
        name: 'TiDB 拓扑查询工具 qtidb',
        href: 'https://asktug.com/t/tidb-qtidb/908',
      },
      {
        name: 'TiDB监控实现--存活监控',
        href: 'https://asktug.com/t/tidb/918',
      },
      {
        name: '记一次 TiDB 业务优化',
        href: 'https://asktug.com/t/tidb/1781/2',
      },
      {
        name: '再记一次业务优化',
        href: 'https://asktug.com/t/topic/1818',
      },
    ],
  },
  {
    name: '罗瑞星',
    company: '百胜中国',
    title: '大数据经理',
    links: [
      {
        name: '易果 TiDB 的使用以及数据中台的思考',
        href: 'https://asktug.com/t/tidb/913',
      },
      {
        name: '【Talk】易果集团数据中台的转型和实践',
        href: 'https://pingcap.com/community-cn/techday2019/',
      },
      {
        name: '【Talk】易果集团的数据平台建设历程',
        href: 'https://mp.weixin.qq.com/s/eDuJUQBMoO0jx9CpHYbxEg',
      },
    ],
  },
  {
    name: '黄蔚',
    company: '微众银行',
    title: '高级 DBA',
    links: [
      {
        name: '微众银行数据库架构演进及 TiDB 实践经验',
        href: 'https://pingcap.com/cases-cn/user-case-webank/',
      },
      {
        name: '【Talk】TiDB 在微众银行的实践与应用',
        href: 'https://pingcap.com/community-cn/devcon2019/',
      },
      {
        name: '【Talk】TiDB 在微众银行的实践之旅',
        href: 'https://pingcap.com/community-cn/devcon2019/',
      },
      {
        name: '【Talk】TiDB on ARM',
        href: 'https://mp.weixin.qq.com/s/FU04PacLlmNH89ETusN69A',
      },
    ],
  },
  {
    name: '黄龙',
    company: '360 金融',
    title: '深圳大数据组负责人',
    links: [
      {
        name: 'TiDB 在实时渠道转化分析的应用',
        href: 'https://asktug.com/t/tidb/1060',
      },
      {
        name: '【Talk】TiDB 数仓在 360 金融渠道运营的应用',
        href: 'https://pingcap.com/community-cn/techday2019/',
      },
      {
        name: '【Talk】TiDB 在实时渠道转化分析的应用',
        href: 'https://asktug.com/t/tug/881',
      },
    ],
  },
  {
    name: '孙玄',
    company: '奈学教育',
    title: '创始人 & CEO',
    links: [
      {
        name: '转转数据库架构构建之道',
        href: 'https://asktug.com/t/topic/1021',
      },
      {
        name: '【Talk】All in！转转 TiDB 大规模实践之旅',
        href: 'https://pingcap.com/community-cn/devcon2019/',
      },
      {
        name: '【Talk】转转数据库架构构建之道',
        href: 'https://asktug.com/t/tug-tidb/865',
      },
    ],
  },
  {
    name: '郭磊涛',
    company: '爱奇艺',
    title: '数据库负责人',
    links: [
      {
        name: '爱奇艺数据库技术选型思路',
        href: 'https://asktug.com/t/topic/1396/1',
      },
      {
        name: '【Talk】TiDB 在爱奇艺的应用实践',
        href: 'https://pingcap.com/community-cn/techday2019/',
      },
      {
        name: '【Talk】爱奇艺的数据库技术选型思路',
        href: 'https://asktug.com/t/tug/1043',
      },
    ],
  },
  {
    name: '李振环',
    company: '贝壳金服',
    title: '资深大数据工程师',
    links: [
      {
        name: '贝壳金服 TiDB 在线跨机房迁移实践',
        href: 'https://pingcap.com/cases-cn/user-case-beikejinfu/',
      },
      {
        name: '【Talk】贝壳金服基于 TiDB 的数据中台演进',
        href: 'https://pingcap.com/community-cn/techday2019/',
      },
    ],
  },
  {
    name: '贾世闻',
    company: '京东云',
    title: '架构师',
    links: [
      {
        name: 'TiKV 开发环境单机部署',
        href: 'https://asktug.com/t/tikv/452',
      },
      {
        name: '技术选型中的非技术因素',
        href: 'https://asktug.com/t/topic/1358',
      },
      {
        name: 'DRDS vs TiDB',
        href: 'https://blog.csdn.net/jiashiwen/article/details/89177068',
      },
    ],
  },
  {
    name: '李文杰',
    company: '网易互娱',
    title: '数据库工程师',
    links: [
      {
        name: 'TiDB 在网易互娱的选择与体验',
        href: 'https://pingcap.com/cases-cn/user-case-wangyihuyu/',
      },
      {
        name: '【Talk】TiDB 在网易互娱的选择与体验',
        href: 'https://asktug.com/t/tug/1227',
      },
      {
        name: '【Talk】网易互娱的数据库技术选型思路',
        href: 'https://asktug.com/t/tug-x-shopee/1550',
      },
    ],
  },
  {
    name: '刘春辉',
    company: 'Shopee',
    title: 'DBA Manager',
    links: [
      {
        name: 'TiDB 3.0：窗口函数初体验',
        href: 'https://asktug.com/t/tidb-3-0/348',
      },
      {
        name: 'TiDB 的数据库技术选型思路',
        href: 'https://mp.weixin.qq.com/s/m6jD0oB0sIHpH1z2gc3pew',
      },
      {
        name: '【Talk】TiDB 的数据库技术选型思路',
        href: 'https://asktug.com/t/tug-x-shopee/1550',
      },
    ],
  },
  {
    name: '代晓磊',
    company: '360 智慧商业',
    title: '数据库运维专家',
    links: [
      {
        name: '360 商业化 TiDB 写热点的优化思路',
        href: 'https://mp.weixin.qq.com/s/E6GotdOAVPKlWdKIrW1SQA',
      },
      {
        name: '【Talk】TiDB在360商业化业务的应用实践',
        href: 'https://asktug.com/t/tug-tidb/1500',
      },
    ],
  },
  {
    name: '王志广',
    company: '平安科技',
    title: '资深数据库工程师',
    links: [
      {
        name: 'TiDB 私有云实践',
        href: 'https://asktug.com/t/tidb/1059',
      },
      {
        name: 'TiDB 慢日志解析源码解读',
        href: 'https://asktug.com/t/tidb/1902',
      },
      {
        name: '【Talk】TiDB 私有云实践',
        href: 'https://asktug.com/t/tug-tidb-cloud/1041',
      },
    ],
  },
  {
    name: '杨文',
    company: '早安科技',
    title: '后端技术负责人',
    links: [
      {
        name: '在 GCP 上使用 TiDB Operator 构建 TiDB 集群',
        href: 'https://asktug.com/t/gcp-tidb-operator-tidb/437',
      },
      {
        name: '在 minikube 上使用 TiDB Operator 构建 TiDB 集群',
        href: 'https://asktug.com/t/minikube-tidb-operator-tidb/1382',
      },
      {
        name: 'PingCAP Talent Plan（广州） 第四期公开课笔记',
        href: 'https://asktug.com/t/pingcap-talent-plan/1397',
      },
      {
        name: 'TiDB 中的全局唯一 ID',
        href: 'https://asktug.com/t/tidb-id/1521',
      },
    ],
  },
  {
    name: '张雯',
    company: 'bilibili',
    title: 'DBA',
    links: [
      {
        name: 'TiDB 追番手帐（上）',
        href: 'https://asktug.com/t/tidb/1637',
      },
      {
        name: 'TiDB 追番手帐（中）',
        href: 'https://asktug.com/t/tidb/1772',
      },
      {
        name: 'TiDB 追番手帐（下）',
        href: 'https://asktug.com/t/tidb/1773',
      },
      {
        name: 'TiDB 追番手账（番外）TiDB Server 内核原理学习笔记',
        href: 'https://asktug.com/t/tidb-tidb-server/2033',
      },
    ],
  },
  {
    name: '侯圣文',
    company: '贝壳找房',
    title: '技术总监',
    links: [
      {
        name: 'TiDB 实战优化之 SQL 常见问题与优化案例',
        href: 'https://asktug.com/t/topic/33657',
      },
      {
        name: '【Talk】TiDB 实战优化之 SQL 常见问题与优化案例',
        href: 'https://asktug.com/t/tug-tidb/1500',
      },
      {
        name: '【Talk】Oracle&TiDB 高可用技术最佳实践',
        href: 'https://asktug.com/t/topic/2201',
      },
    ],
  },
  {
    name: '火烧',
    company: '小电科技',
    title: '首席架构师',
    links: [
      {
        name: 'TiDB 在某餐饮 SaaS 服务商的实践及海外机房构建',
        href: 'https://asktug.com/t/topic/33030',
      },
      {
        name: '【Talk】 TiDB 在二维火的实践及海外机房构建',
        href: 'https://pingcap.com/community-cn/techday2019/',
      },
    ],
  },
  {
    name: '常彦德',
    company: 'UCloud',
    title: '存储组件产品部负责人',
    links: [
      {
        name: 'TiDB 在 UCloud 公有云上的实践',
        href: 'https://asktug.com/t/tidb-ucloud/1115',
      },
      {
        name: '【Talk】TiDB 在 UCloud 公有云上的实践',
        href: 'https://asktug.com/t/tug-tidb-cloud/1041',
      },
      {
        name: '【Talk】TiDB Service 高可用架构',
        href: 'https://asktug.com/t/topic/2201',
      },
    ],
  },
  {
    name: '高海涛',
    company: '美团点评',
    title: 'RD',
    links: [
      {
        name: 'TiDB 之 DDL 学习总结',
        href: 'https://asktug.com/t/tidb-ddl/2036',
      },
      {
        name: '使 pt-kil l和 pt-query-digest 工具兼容 TiDB',
        href: 'https://asktug.com/t/pt-kill-pt-query-digest-tidb/2022',
      },
      {
        name: 'PD 的时钟服务—— TSO',
        href: 'https://asktug.com/t/pd-tso/2026',
      },
      {
        name: 'DM 在 Docker 环境部署安装',
        href: 'https://asktug.com/t/dm-docker/2027',
      },
    ],
  },
  {
    name: '吕磊',
    company: '美团点评',
    title: '高级 DBA',
    links: [
      {
        name: 'TiDB 在摩拜单车的深度实践及应用',
        href: 'https://pingcap.com/cases-cn/user-case-mobike-2/',
      },
      {
        name: 'TiDB MVCC 多版本保存机制及其对性能的影响',
        href: 'https://asktug.com/t/tidb-mvcc/1350',
      },
      {
        name: '直击备份痛点：基于 TiDB Binlog 的快速时间点恢复',
        href: 'https://mp.weixin.qq.com/s/EmHPOVnYXTl0xy069OEcRw',
      },
    ],
  },
  {
    name: '许超',
    company: 'VIPKID',
    title: '资深 DBA 工程师',
    links: [
      {
        name: 'VIPKID 的高可用架构设计与实践',
        href: 'https://asktug.com/t/topic/33656',
      },
      {
        name: '【Talk】TiDB 在 VIPKID 的展望',
        href: 'https://pingcap.com/community-cn/devcon2019/',
      },
      {
        name: '【Talk】VIPKID 的高可用架构设计与实践',
        href: 'https://asktug.com/t/topic/2201',
      },
    ],
  },
  {
    name: '刘光亮',
    company: '丰巢科技',
    title: '中间件负责人',
    links: [
      {
        name: 'TiDB new feature max_execution_time',
        href: 'https://asktug.com/t/tidb-new-feature-max-execution-time/309',
      },
      {
        name: 'TiDB 在丰巢核心支付平台百亿级数据的深度实践',
        href: 'https://mp.weixin.qq.com/s/eVgKrHZBsppE02SMXbbJ4Q',
      },
      {
        name: '【Talk】丰巢支付平台迁移之旅',
        href: 'https://mp.weixin.qq.com/s/GigCkrY0gCcgSD_Vn1gRoA',
      },
    ],
  },
  {
    name: '旋凯',
    company: '58 集团',
    title: '高级 DBA',
    links: [
      {
        name: '58 集团的数据库技术选型思路',
        href: 'https://asktug.com/t/topic/1784',
      },
      {
        name: 'Elastic Stack处理TiDB慢日志',
        href: 'https://asktug.com/t/elastic-stack-tidb/2051',
      },
      {
        name: '【Talk】58 集团的数据库技术选型思路',
        href: 'https://asktug.com/t/tug/1043',
      },
    ],
  },
  {
    name: '傅少峰',
    company: '新东方',
    title: '数据服务团队负责人',
    links: [
      {
        name: 'TiDB 在新东方业务前台及中台的落地',
        href: 'https://asktug.com/t/topic/2766',
      },
      {
        name: '【Talk】新东方新一代报名系统数据库选型',
        href: 'https://pingcap.com/community-cn/devcon2019/',
      },
      {
        name: '【Talk】TiDB 在新东方业务前台及中台的落地',
        href: 'https://pingcap.com/community-cn/techday2019/',
      },
    ],
  },
];

export default data;

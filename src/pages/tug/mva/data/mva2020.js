const data = [
  {
    name: '李银龙',
    company: '马上消费金融',
    title: '容器云数据库负责人',
    links: [
      {
        name: 'TiDB 在马上消费金融核心账务系统归档及跑批业务下的实践',
        href: 'https://pingkai.cn/tidbcommunity/forum/t/topic/2686',
      },
      {
        name: '【Talk】TiDB 在马上消费金融总账系统的容器化实践之路',
        href: 'https://pingkai.cn/tidbcommunity/forum/t/topic/35399',
      },
    ],
  },
  {
    name: '贺磊',
    company: '360',
    title: '高级 DBA',
    links: [
      {
        name: 'TiDB 在 360 云平台的落地和实践经验',
        href: 'https://pingkai.cn/tidbcommunity/forum/t/topic/32849',
      },
      {
        name: '一篇文章带你玩转 TiDB 灾难恢复',
        href: 'https://pingkai.cn/tidbcommunity/forum/t/topic/34246',
      },
      {
        name: 'TiDB 大规模节点下线实践',
        href: 'https://pingkai.cn/tidbcommunity/forum/t/topic/37485',
      },
      {
        name: 'DM 运维踩坑实践总结',
        href: 'https://pingkai.cn/tidbcommunity/forum/t/topic/63512',
      },
    ],
  },
  {
    name: '田帅萌',
    company: '京东数科',
    title: 'DBA',
    links: [
      {
        name: 'TiDB 用什么保证备份的一致性',
        href: 'https://mp.weixin.qq.com/s/XVhDWap-QN5GLPt-1edvOg',
      },
      {
        name: '浅析 TiDB 二阶段提交',
        href: 'https://mp.weixin.qq.com/s/Cmw4Dl8vt7-wV9XlzzvURA',
      },
      {
        name: '初探 TiDB-TiFlash',
        href: 'https://pingkai.cn/tidbcommunity/forum/t/topic/33523',
      },
    ],
  },
  {
    name: '靳献旗',
    company: '汽车之家',
    title: '高级 DBA',
    links: [
      {
        name: '一次解决读写冲突的案例',
        href: 'https://pingkai.cn/tidbcommunity/forum/t/topic/33205/4',
      },
      {
        name: 'TiDB 分区表优化实践',
        href: 'https://pingkai.cn/tidbcommunity/forum/t/topic/33810',
      },
      {
        name: 'TiDB 在汽车之家 818 台网互动项目中的应用',
        href: 'https://pingkai.cn/tidbcommunity/forum/t/topic/37016',
      },
    ],
  },
  {
    name: '李振环',
    company: '贝壳金服',
    title: '大数据工程师',
    links: [
      {
        name: 'TiDB in Action-TiSpark 建构与原理',
        href: '',
      },
      {
        name: '【Talk】TiDB 实时数据处理平台实战',
        href: 'https://asktug.com/t/topic/35397',
      },
    ],
  },
  {
    name: '孙晓光',
    company: '知乎',
    title: '技术平台负责人',
    links: [
      {
        name: '单集群两数据中心 TiDB 灾备方案',
        href: 'https://zhuanlan.zhihu.com/p/138044746?utm_source=wechat_session&utm_medium=social&s_s_i=I9a9xbgJ7ZjNA5NAM6a6yWIUW7%2Fr6AL21w2IKcyv45I%3D&s_r=1&from=timeline&isappinstalled=0&wechatShare=1',
      },
    ],
  },
  {
    name: '罗瑞星',
    company: '百胜中国',
    title: '大数据经理',
    links: [
      {
        name: 'TiDB in Action-TiSpark 建构与原理',
        href: '',
      },
      {
        name: 'TiDB in Action-用 TiUP 部署本地测试环境',
        href: 'https://book.tidb.io/session2/chapter1/tiup-playground.html#112-%E7%94%A8-tiup-%E9%83%A8%E7%BD%B2%E6%9C%AC%E5%9C%B0%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83',
      },
    ],
  },
  {
    name: '刘春雷',
    company: '58 集团',
    title: 'DBA',
    links: [
      {
        name: '58 同城 TiDB4.0 报告',
        href: 'https://asktug.com/t/topic/36377',
      },
      {
        name: '58 同城大规模 TiDB 运维实践',
        href: 'https://asktug.com/t/topic/62990',
      },
      {
        name: 'TiFlash 运维漫谈谈',
        href: 'https://asktug.com/t/topic/63052',
      },
      {
        name: '漫谈 TiDB 数据库部署',
        href: 'https://asktug.com/t/topic/63462',
      },
    ],
  },
  {
    name: '胡盼盼',
    company: '微众银行',
    title: '数据库平台经理',
    links: [
      {
        name: 'TiDB in Action-TiDB 常见配置优化',
        href: '',
      },
      {
        name: 'TiDB in Action-TiKV 线程池优化',
        href: 'https://book.tidb.io/session4/chapter8/threadpool-optimize.html#821-tikv-%E7%BA%BF%E7%A8%8B%E6%B1%A0%E4%BC%98%E5%8C%96',
      },
      {
        name: 'TiDB 在微众银行核心场景演进路径及方向探索',
        href: 'https://asktug.com/t/topic/35397',
      },
    ],
  },
  {
    name: '胡国青',
    company: '数据库从业者',
    title: '',
    links: [
      {
        name: 'TiDB in Action-MongoDB 到 TiDB',
        href: 'https://book.tidb.io/session4/chapter5/from-mongodb-to-tidb.html#57-mongodb-%E8%BF%81%E7%A7%BB%E5%88%B0-tidb',
      },
      {
        name: '【Talk】数据库选型之 MongoDB 的最佳场景和实践',
        href: 'https://asktug.com/t/topic/34471',
      },
    ],
  },
  {
    name: '张雯',
    company: 'bilibili',
    title: 'DBA',
    links: [
      {
        name: 'TiDB in Action-RBAC',
        href: '',
      },
      {
        name: 'DM 同步单机 MySQL 到 TiDB',
        href: 'https://book.tidb.io/session4/chapter5/from-single-mysql-to-tidb.html#511-dm-%E5%90%8C%E6%AD%A5%E5%8D%95%E6%9C%BA-mysql-%E5%88%B0-tidb-%E7%9A%84%E5%AE%9E%E8%B7%B5',
      },
      {
        name: '【Talk】TiDB 在 bilibili 的实践 2.0',
        href: 'https://asktug.com/t/topic/35397',
      },
    ],
  },
  {
    name: '徐嘉埥',
    company: '建信金科',
    title: 'DBA',
    links: [
      {
        name: ' TiDB in Action-TiFlash 架构与原理',
        href: 'https://book.tidb.io/session1/chapter9/tiflash-architecture.html#92-tiflash-%E6%9E%B6%E6%9E%84%E4%B8%8E%E5%8E%9F%E7%90%86',
      },
      {
        name: '海外直播行业的 TiDB 4.0 线上体验',
        href: 'https://asktug.com/t/topic/35397',
      },
    ],
  },
  {
    name: '皮雪锋',
    company: '云集',
    title: '研发经理',
    links: [
      {
        name: '云集财务业务TiDB实践',
        href: 'https://asktug.com/t/topic/35287',
      },
    ],
  },
  {
    name: '刘江',
    company: '伴鱼',
    title: 'DBA',
    links: [
      {
        name: '伴鱼数据库之慢日志系统',
        href: 'https://asktug.com/t/topic/36185',
      },
      {
        name: '伴鱼 TiDB 实践',
        href: 'https://asktug.com/t/topic/35639',
      },
      {
        name: '伴鱼数据库之性能大盘',
        href: 'https://asktug.com/t/topic/37337',
      },
      {
        name: '伴鱼数据库之MongoDB数据在线迁移到TiDB',
        href: 'https://asktug.com/t/topic/66838',
      },
    ],
  },
  {
    name: '朱博帅',
    company: '阿里云',
    title: '数据库技术服务专家',
    links: [
      {
        name: '【Talk】TiDB 在高速增长视频业务中的应用',
        href: 'https://asktug.com/t/topic/35397',
      },
      {
        name: '【Talk】TiDB上云实践分享',
        href: 'https://asktug.com/t/topic/36583',
      },
    ],
  },
  {
    name: '代晓磊',
    company: '360',
    title: '数据库运维专家',
    links: [
      {
        name: 'tiup 目录冲突检测不健全导致的节点被 destroy 问题以及解决',
        href: 'https://asktug.com/t/topic/35422',
      },
      {
        name: 'TiUP升级TiFlash重启失败解决方案',
        href: 'https://asktug.com/t/topic/34926',
      },
      {
        name: '解决方案之：DM relay 处理单元报错...',
        href: 'https://asktug.com/t/topic/35063',
      },
      {
        name: 'TiDB 统计信息原理简介与实践',
        href: 'https://asktug.com/t/topic/37691',
      },
    ],
  },
  {
    name: '赵海军',
    company: '理想汽车',
    title: '数据库负责人',
    links: [
      {
        name: 'TiDB 4.0 试玩体验：TiDB性能对比（v3.0.12 VS v4.0.0-rc）',
        href: 'https://asktug.com/t/topic/33519',
      },
      {
        name: 'TiDB 热点问题定位',
        href: 'https://asktug.com/t/topic/36395',
      },
      {
        name: 'DM v1 升级 v2 初体验',
        href: 'https://asktug.com/t/topic/37053',
      },
      {
        name: 'SQL 上线引发的血案',
        href: 'https://asktug.com/t/topic/37239',
      },
    ],
  },
  {
    name: '黄潇',
    company: '美团',
    title: '高级 DBA',
    links: [
      {
        name: '【Talk】数据库发展趋势，融合还是细分?',
        href: 'https://asktug.com/t/topic/37180',
      },
      {
        name: '【Talk】TiDB上云实践分享',
        href: 'https://asktug.com/t/topic/36583',
      },
      {
        name: '【Talk】TiDB 的常见架构应用场景',
        href: 'https://asktug.com/t/topic/67754',
      },
    ],
  },
  {
    name: '于振华',
    company: '北银金科',
    title: '云计算应用部副总经理',
    links: [
      {
        name: 'TiDB 在金融场景里那些不得不说的事',
        href: 'https://mp.weixin.qq.com/s/GUZK-ccs7CK6zBYdZa5uGQ',
      },
      {
        name: '【Talk】如何评判一个数据架构的好坏',
        href: 'https://asktug.com/t/topic/36709',
      },
    ],
  },
  {
    name: '许超',
    company: 'VIPKID',
    title: '资深数据库工程师',
    links: [
      {
        name: 'TiUP 使用梳理',
        href: 'https://asktug.com/t/topic/33540',
      },
      {
        name: 'TiDB 4.0 在 VIPKID 的应用实践',
        href: 'https://asktug.com/t/topic/35397/1',
      },
    ],
  },
  {
    name: '常彦德',
    company: 'UCloud',
    title: '存储组件产品部负责人',
    links: [
      {
        name: '【Talk】UCloud TiDB 公有云服务探索',
        href: 'https://asktug.com/t/topic/35397',
      },
    ],
  },
  {
    name: '汪涉洋',
    company: '车好多',
    title: '大数据负责人',
    links: [
      {
        name: 'TiDB 在车好多的实践',
        href: 'https://asktug.com/t/topic/63576',
      },
      {
        name: '【Talk】数据库发展趋势，融合还是细分?',
        href: 'https://asktug.com/t/topic/37180',
      },
    ],
  },
  {
    name: '李文杰',
    company: '网易互娱',
    title: '数据研发工程师',
    links: [
      {
        name: '网易互娱的数据库选型和 TiDB 应用实践',
        href: 'https://mp.weixin.qq.com/s/1u79vN9by1xGeJDkWiSUew',
      },
      {
        name: '【Talk】数据库发展趋势，融合还是细分?',
        href: 'https://asktug.com/t/topic/37180',
      },
    ],
  },
  {
    name: '贾世闻',
    company: '京东云',
    title: '架构师',
    links: [
      {
        name: '社区资源这么丰富我们怎么抄作业',
        href: 'https://asktug.com/t/topic/37425',
      },
    ],
  },
  {
    name: '羊欢',
    company: 'OPPO',
    title: '高级运维工程师',
    links: [
      {
        name: 'TiDB in Action-TiFlashTiSpark 结合大数据体系',
        href: 'https://asktug.com/t/topic/64050',
      },
      {
        name: '【Talk】TiDB 和大数据混访在 OPPO 的实践',
        href: 'https://asktug.com/t/topic/64050',
      },
    ],
  },
  {
    name: '胡然',
    company: '龙湖地产',
    title: 'DBA 负责人',
    links: [
      {
        name: '地产TiDB使用初探索',
        href: 'https://asktug.com/t/topic/63899',
      },
      {
        name: 'TiDB DM扩容和监控',
        href: 'https://asktug.com/t/topic/67685',
      },
    ],
  },
  {
    name: '冀浩东',
    company: '转转',
    title: '数据库负责人',
    links: [
      {
        name: 'TiDB-In-Action - TiKV is Busy 处理思路',
        href: 'https://book.tidb.io/session4/chapter7/tikv-is-busy.html#73-tikv-is-busy-%E5%A4%84%E7%90%86%E6%80%9D%E8%B7%AF',
      },
      {
        name: '【Talk】TiDB 4.0 新特性在电商行业的探索',
        href: 'https://asktug.com/t/topic/35397',
      },
    ],
  },
  {
    name: '张亿皓',
    company: '小红书',
    title: '大数据研发工程师',
    links: [
      {
        name: '小红书数据架构及 TiDB 使用场景',
        href: 'https://asktug.com/t/topic/35820',
      },
      {
        name: '【Talk】小红书的大数据新实践',
        href: 'https://www.bilibili.com/video/BV1Lt4y1C7AH',
      },
    ],
  },
  {
    name: '闫晓宇',
    company: '得物',
    title: '数据库团队负责人',
    links: [
      {
        name: '【圆桌讨论】数字化转型下的新数据架构选型',
        href: '#',
      },
    ],
  },
];

export default data;

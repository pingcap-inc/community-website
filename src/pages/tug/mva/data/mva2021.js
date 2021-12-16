const data = [
  {
    name: '沈旸',
    company: '神州数码',
    title: 'CIO',
    links: [
      {
        name: 'TiDB for PostgreSQL—牛刀小试',
        href: 'https://asktug.com/t/topic/93433',
      },
      {
        name: 'TiDB 5.0 异步事务特性体验——基于X86和ARM混合部署架构',
        href: 'https://asktug.com/t/topic/93002',
      },
      {
        name: 'TiDB Parser 模块的简单解读与改造方法',
        href: 'https://asktug.com/t/topic/93317',
      },
      {
        name: '以TiDB热点问题来谈Region的调度流程',
        href: 'https://asktug.com/t/topic/69850',
      },
    ],
  },
  {
    name: '刘春雷',
    company: '58 同城',
    title: 'DBA',
    links: [
      {
        name: 'TiDB 5.0 升级性能初体验',
        href: 'https://asktug.com/t/topic/69855',
      },
      {
        name: 'TiFlash 5.x 与 4.x 对比测试',
        href: 'https://asktug.com/t/topic/69933',
      },
      {
        name: '某报表业务升级 5.0 解决慢SQL问题',
        href: 'https://asktug.com/t/topic/92876',
      },
    ],
  },
  {
    name: '代晓磊',
    company: '360',
    title: '数据库运维专家',
    links: [
      {
        name: 'TiCDC 使用心得',
        href: 'https://asktug.com/t/topic/69259',
      },
      {
        name: 'TiCDC 应用场景解析',
        href: 'https://asktug.com/t/topic/152954',
      },
      {
        name: '关于 TiDB 性能优化的一些思考',
        href: 'https://asktug.com/t/topic/153160',
      },
      {
        name: '写冲突场景下的悲观/乐观事务模型选择',
        href: 'https://asktug.com/t/topic/93470',
      },
      {
        name: '记一场 DM 同步引发的 Auto_Increment 主键冲突漫谈',
        href: 'https://asktug.com/t/topic/68427',
      },
      {
        name: '记一次 Lightning 导入失败导致的 TiDB 集群重启失败事故处理',
        href: 'https://asktug.com/t/topic/69826',
      },
    ],
  },
  {
    name: '王天宜',
    company: 'PingCAP',
    title: 'TiDB 社区部门架构师',
    links: [
      {
        name: 'Flink + TiDB，体验实时数仓之美',
        href: 'https://asktug.com/t/topic/182835',
      },
      {
        name: 'Flink 最佳实践之 通过 TiCDC 将 TiDB 数据流入 Flink',
        href: 'https://asktug.com/t/topic/68884',
      },
      {
        name: 'Flink 最佳实践之使用 Canal 同步 MySQL 数据至 TiDB',
        href: 'https://asktug.com/t/topic/68731',
      },
      {
        name: 'TiDB 监控整合方案',
        href: 'https://asktug.com/t/topic/93040',
      },
      {
        name: '构建实时数仓 - 当 TiDB 遇见 Pravega',
        href: ' https://asktug.com/t/topic/92873',
      },
      {
        name: '如何使用 minio 进行 BR 备份',
        href: 'https://asktug.com/t/topic/153129',
      },
      {
        name: '如何在 Kubernetes 上部署 TiDB-Operator （上）',
        href: 'https://asktug.com/t/topic/68208',
      },
      {
        name: '如何在 Kubernetes 上部署 TiDB-Operator （下）',
        href: 'https://asktug.com/t/topic/68209',
      },
      {
        name: '如何多个 TiDB 集群共用一个 Grafana',
        href: 'https://asktug.com/t/topic/68177',
      },
      {
        name: '通过 ProxySQL 在 TiDB 上实现 SQL 的规则化路由',
        href: 'https://asktug.com/t/topic/95252',
      },
    ],
  },
   {
    name: '姬永飞',
    company: '天翼云',
    title: '高级后端开发工程师',
    links: [
      {
        name: 'CDC 同步到 S3 的故障',
        href: 'https://asktug.com/t/topic/95744',
      },
      {
        name: 'BR 备份到 S3 时 endpoint 参数加目录分隔符后缀问题排查',
        href: 'https://asktug.com/t/topic/273002',
      },
      {
        name: 'TiDB K8s 定时备份状态异常问题排查',
        href: 'https://asktug.com/t/topic/272815',
      },
      {
        name: 'TiDB 5.0 两阶段提交',
        href: 'https://asktug.com/t/topic/243260',
      },
      {
        name: '一条 like 条件的慢 SQL 语句优化',
        href: 'https://asktug.com/t/topic/243259',
      },
      {
        name: '悲观事务死锁检测',
        href: 'https://asktug.com/t/topic/243258',
      },
      {
        name: 'Placement Rules 原理',
        href: 'https://asktug.com/t/topic/243257',
      },
      {
        name: 'TiDB K8s 删除备份阻塞问题排查',
        href: 'https://asktug.com/t/topic/243240',
      },
      {
        name: '一个联合索引使用问题以及优化方案',
        href: 'https://asktug.com/t/topic/152989',
      },
      {
        name: 'TiDB AutoCommit OFF 问题',
        href: 'https://asktug.com/t/topic/95647',
      },
       {
        name: 'TiDB 赋权问题',
        href: 'https://asktug.com/t/topic/93968',
      },
    ],
  },
  {
    name: '张政俊',
    company: '中欧基金',
    title: '资深 DBA',
    links: [
      {
        name: '数据库架构升级选型 - TiDB',
        href: 'https://asktug.com/t/topic/69516',
      },
      {
        name: 'MySQL 与 TiDB 不同的 DDL 发展历程',
        href: 'https://asktug.com/t/topic/69597',
      },
      {
        name: 'Raft 算法浅析',
        href: 'https://asktug.com/t/topic/69645',
      },
    ],
  },
  {
    name: '金佳',
    company: '神州数码',
    title: '技术总监',
    links: [
      {
        name: 'SQL只是CRUD？',
        href: 'https://asktug.com/t/topic/94060',
      },
      {
        name: 'DELETE Statement，懂你不容易',
        href: 'https://asktug.com/t/topic/95117',
      },
      {
        name: '从 TiDB 中学习代码提交规范的重要性',
        href: 'https://asktug.com/t/topic/95743',
      },
    ],
  },
  {
    name: '李雷',
    company: '神州数码',
    title: '软件开发工程师',
    links: [
      {
        name: '使用 TiCDC 实时同步 TiDB 数据到备用逃生环境的实践',
        href: 'https://asktug.com/t/topic/94194',
      },
      {
        name: '基于 k8s 与 Chaos Mesh 构建数据库混沌实验日报系统',
        href: 'https://asktug.com/t/topic/94980',
      },
      {
        name: 'TiDB 5.0 部分新特性试用',
        href: 'https://asktug.com/t/topic/94854',
      },
    ],
  },
  {
    name: '靳献旗',
    company: '汽车之家',
    title: '高级 DBA',
    links: [
      {
        name: 'TiDB SQL 优化案例几则',
        href: 'https://asktug.com/t/topic/68396',
      },
      {
        name: 'TiDB 4.0 基于 Binlog 的跨机房集群部署',
        href: 'https://asktug.com/t/topic/93165',
      },
      {
        name: '一次热点问题排查经历',
        href: 'https://asktug.com/t/topic/122815',
      },
    ],
  },
  {
    name: '刘强',
    company: '作业帮',
    title: 'DBA',
    links: [
      {
        name: '使用 pd-recover 恢复pd 多数节点故障的场景',
        href: 'https://asktug.com/t/topic/93837',
      },
      {
        name: 'TiKV 多副本丢失的故障修复演练',
        href: 'https://asktug.com/t/topic/93934',
      },
      {
        name: 'TiDB 升级到5.1.1 的性能表现',
        href: 'https://asktug.com/t/topic/122900',
      },
    ],
  },
  {
    name: '何傲',
    company: '神州数码',
    title: '数据库工程师',
    links: [
      {
        name: '这么多TiDB负载均衡方案总有一款适合你',
        href: 'https://asktug.com/t/topic/123082',
      },
      {
        name: '在Windows下调试TiDB4PG的填坑实记',
        href: 'https://asktug.com/t/topic/123326',
      },
      {
        name: 'TiDB在X86和ARM混合平台下的离线部署和升级',
        href: 'https://asktug.com/t/topic/152905',
      },
    ],
  },
  {
    name: '魏建强',
    company: '竞技世界',
    title: 'DBA',
    links: [
      {
        name: '生产环境 TiDB V5.0.3 集群部署',
        href: 'https://asktug.com/t/topic/153455',
      },
      {
        name: 'TiDB 如何做到无限扩展和保证节点 id 唯一',
        href: 'https://asktug.com/t/topic/153451',
      },
      {
        name: 'TiDB 5.0 VS MySQL 8.0 性能对比测试',
        href: 'https://asktug.com/t/topic/153456',
      },
      {
        name: 'TiDB 集群 TiKV 节点内存占用较高问题排查',
        href: 'https://asktug.com/t/topic/153457',
      },
      {
        name: 'TiDB集群之中控不可用，怎么办？',
        href: 'https://asktug.com/t/topic/153562',
      },
    ],
  },
  {
    name: '邓刚',
    company: '英特尔数据中心与AI事业部',
    title: '应用工程师',
    links: [
      {
        name: 'TiDB 多 Socket 服务器性能扩展问题分析',
        href: 'https://asktug.com/t/topic/95867',
      },
      {
        name: 'TiDB 性能优化实践',
        href: 'https://asktug.com/t/topic/95731 ',
      },
      {
        name: 'TiDB 多Socket 服务器性能扩展问题分析-续',
        href: 'https://asktug.com/t/topic/123320',
      },
    ],
  },
  {
    name: '孙晓光',
    company: 'PingCAP',
    title: 'Community Development 团队负责人，TUG 顾问团成员',
    links: [
      {
        name: '【PingCAP DevCon 2021】TIDB x Flink原生实时计算',
        href: 'https://www.bilibili.com/video/BV1tb4y1z7PY',
      },
      {
        name: '带着问题读 TiDB 源码：Hive 元数据使用 TiDB 启动报错',
        href: 'https://asktug.com/t/topic/153499',
      },
      {
        name: '端到端的实时计算：TiDB + Flink 最佳实践',
        href: 'https://asktug.com/t/topic/182780',
      },
    ],
  },
  {
    name: '胡然',
    company: '龙湖地产',
    title: 'IT 基础负责人',
    links: [
      {
        name: 'TiDB 优化之消失的统计信息',
        href: 'https://asktug.com/t/topic/95565',
      },
      {
        name: 'TiDB 实例间数据同步之 TiCDC 实践',
        href: 'https://asktug.com/t/topic/95299',
      },
      {
        name: 'TiDB DM 扩容和监控',
        href: 'https://asktug.com/t/topic/67685',
      },
    ],
  },
  {
    name: '顾大伟',
    company: '360',
    title: '数据库运维专家',
    links: [
      {
        name: '扩容 TiKV 节点遇到的坑',
        href: 'https://asktug.com/t/topic/183585',
      },
      {
        name: 'Tidb duration 耗时异常上升案例',
        href: 'https://asktug.com/t/topic/243253',
      },
      {
        name: 'TiCDC 实现 TiDB 备份方案',
        href: 'https://asktug.com/t/topic/182918',
      },
      {
        name: 'TiFlash 尝鲜小案例',
        href: 'https://asktug.com/t/topic/182847',
      },
    ],
  },
];

export default data;

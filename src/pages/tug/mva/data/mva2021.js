const data = [
  {
    name: '沈旸',
    avatar: '',
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
    avatar: '',
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
    avatar: '',
    company: '360',
    title: '数据库运维专家',
    links: [
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
    name: '张政俊',
    avatar: '',
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
    avatar: '',
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
    avatar: '',
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
    avatar: '',
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
    avatar: '',
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
    avatar: '',
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
];

export default data;

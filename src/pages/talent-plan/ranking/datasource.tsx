import { Link } from '@tidb-community/ui';

export const tikv_data = [
  [
    {
      name: '奥特曼都是假的',
      college: ['福州大学'],
      score: 97.2,
      github: ['hzh0425'],
    },
  ],
  [
    //
    //
    // 清华大学
    // 清华大学
    // LebronAl
    // Vendredimatin
    //  95.7
    {
      name: '好好学习',
      college: ['清华大学', '清华大学'],
      score: 95.7,
      github: ['LebronAl', 'Vendredimatin'],
    },
    // 嘻嘻哈哈
    // 华东师范大学
    // JLDataKu
    //  95.3
    {
      name: '嘻嘻哈哈',
      college: ['华东师范大学'],
      score: 95.3,
      github: ['JLDataKu'],
    },
  ],
  [
    // 摸鱼瞎搞二人组
    // 华中科技大学
    // 四川大学
    // Tangruilin
    // mooleetzi
    //  94.7
    {
      name: '摸鱼瞎搞二人组',
      college: ['华中科技大学', '四川大学'],
      score: 94.7,
      github: ['Tangruilin', 'mooleetzi'],
    },
    // 名字好难取
    // 浙江大学
    // 天津大学
    // charstal
    // TJLoiterer
    //  94.5
    {
      name: '名字好难取',
      college: ['浙江大学', '天津大学'],
      score: 94.5,
      github: ['charstal', 'TJLoiterer'],
    },
    // bal vkynit
    // 电子科技大学
    // 青山学院大学
    // oocococo
    // WenyXu
    //  93.2
    {
      name: 'bal vkynit',
      college: ['电子科技大学', '青山学院大学'],
      score: 93.2,
      github: ['oocococo', 'WenyXu'],
    },
    // 啦啦队
    // 山西大学
    // 山西大学
    // TensShinet
    // Pipepw
    //  89.3
    {
      name: '啦啦队',
      college: ['山西大学', '山西大学'],
      score: 89.3,
      github: ['TensShinet', 'Pipepw'],
    },
  ],
  [
    // bal vkynit
    // 电子科技大学
    // 青山学院大学
    // oocococo
    // WenyXu
    // 61
    {
      name: 'bal vkynit',
      college: ['电子科技大学', '青山学院大学'],
      score: 61,
      github: ['oocococo', 'WenyXu'],
    },
  ],
  [
    // 最后两只小恐龙
    // 广东工业大学
    // 天津理工大学
    // oneSapling
    // rien7
    {
      name: '最后两只小恐龙',
      college: ['广东工业大学', '天津理工大学'],
      github: ['oneSapling', 'rien7'],
    },

    // nokv
    // 广州大学
    // 河北地质大学
    // h3n4l
    // zhaoalpha
    {
      name: 'nokv',
      college: ['广州大学', '河北地质大学'],
      github: ['h3n4l', 'zhaoalpha'],
    },

    // Halt and Catch Fire
    // Carnegie Mellon University
    // Carnegie Mellon University
    // Willendless
    // Concurrensee
    {
      name: 'Halt and Catch Fire',
      college: ['Carnegie Mellon University', 'Carnegie Mellon University'],
      github: ['Willendless', 'Concurrensee'],
    },

    // 比顶真纯真
    // 西安交通大学
    // 西安交通大学
    // cza2000
    // LinPoly
    {
      name: '比顶真纯真',
      college: ['西安交通大学', '西安交通大学'],
      github: ['cza2000', 'LinPoly'],
    },

    // 妙蛙种子吃着妙脆角进了米奇妙妙屋
    // 华南理工大学
    // 东莞理工学院
    // yansebutong
    // MichaelDeSteven
    {
      name: '妙蛙种子吃着妙脆角进了米奇妙妙屋',
      college: ['华南理工大学', '东莞理工学院'],
      github: ['yansebutong', 'MichaelDeSteven'],
    },

    // 温州烧烤
    // 华东师范大学
    // 爱丁堡大学
    // cangex
    // VegetableDog118
    {
      name: '温州烧烤',
      college: ['华东师范大学', '爱丁堡大学'],
      github: ['cangex', 'VegetableDog118'],
    },

    // 学完就算成功
    // 合肥工业大学
    // 合肥工业大学
    // Songrui625
    // ZonePG

    {
      name: '学完就算成功',
      college: ['合肥工业大学', '合肥工业大学'],
      github: ['Songrui625', 'ZonePG'],
    },

    // Smith
    // 浙江理工大学
    // Smith-Cruise
    {
      name: 'Smith',
      college: ['浙江理工大学'],
      github: ['Smith-Cruise'],
    },

    // 和星桑一起学分布式
    // 中南大学
    // HuSharp
    {
      name: '和星桑一起学分布式',
      college: ['中南大学'],
      github: ['HuSharp'],
    },

    // 重在学习
    // 西安电子科技大学
    // 西安电子科技大学
    // curry1998
    // lovelyhh
    {
      name: '重在学习',
      college: ['西安电子科技大学', '西安电子科技大学'],
      github: ['curry1998', 'lovelyhh'],
    },

    // KV Killer
    // 哔哩哔哩
    // roseduan
    {
      name: 'KV Killer',
      college: ['哔哩哔哩'],
      github: ['roseduan'],
    },
  ],
].map((list) =>
  list.map((row) => ({
    ...row,
    college: row.college.map((el) => <div>{el}</div>),
    github: row.github.map((el) => (
      <div>
        <Link href={`https://github.com/${el}`}>{el}</Link>
      </div>
    )),
  }))
);

// ({github: row.github.map(i => <div>{i}a</div>), college:
// <>{row.github.join(<br/>)}</>, ...row

console.log(tikv_data);

export const tikv_columns = [
  {
    title: '战队名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '单位',
    dataIndex: 'college',
    key: 'college',
  },
  {
    title: 'Github ID',
    dataIndex: 'github',
    key: 'github',
  },
  {
    title: '分数',
    dataIndex: 'score',
    key: 'score',
  },
];

export const tikv_columns_participation = [
  {
    title: '战队名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '单位',
    dataIndex: 'college',
    key: 'college',
  },
  {
    title: 'Github ID',
    dataIndex: 'github',
    key: 'github',
  },
  {
    title: '互动积分',
    dataIndex: 'score',
    key: 'score',
  },
];

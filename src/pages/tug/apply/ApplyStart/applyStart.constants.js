const getImage = (filename) => `/images/people/apply/${filename}`;

export const title = 'TiDB User Group 会员申请';

export const postImageUrl = getImage('post.png');

export const question = 'TUG 是什么';

export const answer = 'TUG 是汇聚全球数据库、⼤数据技术从业者的社区，是⼀个独⽴、⾃发、不以盈利为⽬的的组织。';

export const whyJoinTitle = '加⼊TUG ，你能获得什么？';

export const whyJoinItems = [
  { iconUrl: getImage('why-join-1.svg'), text: '让数据库、⼤数据从业者找到⾃⼰的圈⼦' },
  { iconUrl: getImage('why-join-2.svg'), text: '探索技术问题，随时随地交流成⻓，解决问题' },
  { iconUrl: getImage('why-join-3.svg'), text: '发表技术⻅解，收获前沿知识，提升个⼈影响⼒' },
];

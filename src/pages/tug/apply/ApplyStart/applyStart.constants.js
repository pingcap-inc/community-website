import { cdn } from '~/utils';

const getImage = (filename) => cdn.getImageUrl(`/images/people/apply/${filename}`);

export const title = 'TiDB User Group 会员申请';

export const postImageUrl = getImage('post.png');

export const question = 'TUG 是什么';

export const answer = 'TUG 是汇聚全球数据库、大数据技术从业者的社区，是一个独立、自发、不以盈利为目的的组织。';

export const whyJoinTitle = '加⼊TUG ，你能获得什么？';

export const whyJoinItems = [
  { iconUrl: getImage('why-join-1.svg'), text: '让数据库、大数据从业者找到自己的圈子' },
  { iconUrl: getImage('why-join-2.svg'), text: '探索技术问题，随时随地交流成长，解决问题' },
  { iconUrl: getImage('why-join-3.svg'), text: '发表技术见解，收获前沿知识，提升个人影响力' },
];

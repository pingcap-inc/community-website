import { BlogInfo } from '@tidb-community/ui';
import { getTitle } from '../utils';

export default {
  title: getTitle('BlogInfo'),
  component: BlogInfo,
};

const Template = (args) => (
  <div style={{ background: '#f8f8f8', padding: 40, maxWidth: 900 }}>
    <BlogInfo {...args} />
  </div>
);

export const BlogInfoComponent = Template.bind({});
BlogInfoComponent.args = {
  id: 10086,
  author: {
    id: 10010,
    avatarUrl: 'https://cdn.fakercloud.com/avatars/bassamology_128.jpg',
    username: 'Username',
  },
  publishedAt: '22 分钟前',
  title: '从一个简单的Delete删数据场景谈TiDB数据库开发规范的重要性',
  category: { id: 1, name: '技术文章' },
  tags: [
    { id: 1, name: '故障案例' },
    { id: 2, name: '安装部署' },
    { id: 3, name: 'TiCDC' },
  ],
  interactions: {
    likes: 30,
    comments: 666,
  },
  coverImageUrl: 'https://fakeimg.pl/1540x440/',
};

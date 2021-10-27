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
  avatarUrl: 'https://cdn.fakercloud.com/avatars/bassamology_128.jpg',
  username: 'User Name',
  publishedAt: '1 days ago',
  title: 'The title is title!',
  category: 'Category',
  tags: ['tag1', 'tag2', 'tag3'],
  interactions: {
    likes: 30,
    comments: 666,
  },
};

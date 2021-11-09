import React from 'react';
import * as Styled from './index.styled';
import { Pagination } from 'antd';

import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';
import TagItem from './TagItem.component';
import BlogLayout from '../BlogLayout.component';

const allTags = [
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    name: 'tiflash',
    articleNum: 104,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
];

const TagPage = () => {
  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="博客"
        // description
        // keyword
      />

      <BlogLayout>
        <Styled.Content>
          <Styled.List>
            {allTags.map((item, key) => (
              <Styled.Item key={key}>
                <TagItem {...item} />
              </Styled.Item>
            ))}
          </Styled.List>
          <Styled.Pagination>
            <Pagination defaultCurrent={1} total={50} />
          </Styled.Pagination>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default TagPage;

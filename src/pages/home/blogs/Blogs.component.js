import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './blogs.styled';
import * as mock from './blogs.mock';
import Blog from './blog';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const Blogs = () => {
  const router = useRouter();
  const { t } = useTranslation('page-home', 'common');
  const { isSmallScreen } = useIsSmallScreen();

  const lang = t('blogs', { returnObjects: true });

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsLayout
        title={lang.title}
        leftPanel={
          <Styled.Blogs>
            {mock.blogs.map((blog, idx) => {
              const props = {
                key: idx,
                lang,
                onClick,
                ...blog,
              };

              return <Blog {...props} />;
            })}
          </Styled.Blogs>
        }
        rightPanel={<>Right</>}
      />
    </Styled.Container>
  );
};

export default Blogs;

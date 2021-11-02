import React from 'react';
import { Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import * as Styled from './others.styled';
import { common as commonUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';
import { useTranslation } from 'next-i18next';

const Others = () => {
  const router = useRouter();

  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-talent-plan');

  const lang = t('institutes', { returnObjects: true });

  return <Styled.Container>{lang.intro}</Styled.Container>;
};

export default Others;

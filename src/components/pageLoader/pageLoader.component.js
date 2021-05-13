import React from 'react';
import { Skeleton } from 'antd';

import * as Styled from './pageLoader.styled';

const PageLoader = ({ children = <Skeleton active /> }) => <Styled.Container>{children}</Styled.Container>;

export default PageLoader;

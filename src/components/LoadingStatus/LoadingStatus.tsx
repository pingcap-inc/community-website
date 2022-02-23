import { Spin } from 'antd';
import * as React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  tip: string;
}

export default function LoadingStatus(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Spin spinning {...rest}>
      {children}
    </Spin>
  );
}

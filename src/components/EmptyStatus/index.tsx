import * as React from 'react';
import * as Styled from './index.styled';
import { Empty } from 'antd';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  description: React.ReactNode;
}

export default function EmptyStatus({ description, children, ...rest }: IProps) {
  return (
    <Styled.Container {...rest}>
      <Empty
        description={description}
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/profile/undraw_ride_a_bicycle_re_6tjy.svg`}
      >
        {children}
      </Empty>
    </Styled.Container>
    //<div className={styles.Container}>
    //  <div className={styles.Image}>
    //    <img src="images/profile/undraw_ride_a_bicycle_re_6tjy.svg" alt=""/>
    //  </div>
    //  <div className={styles.Title}>
    //    {title}
    //  </div>
    //  <div className={styles.Body}>
    //    {body}
    //  </div>
    //</div>
  );
}

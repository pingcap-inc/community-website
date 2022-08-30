import * as React from 'react';

import * as Styled from './index.styled';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = [{ image: '' }, { image: '' }, { image: '' }, { image: '' }];

const PastReview: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {data.map((value) => (
        <Styled.Column key={value.image}>
          <Styled.Item>
            <img src={value.image} alt="" />
          </Styled.Item>
        </Styled.Column>
      ))}
    </Styled.Container>
  );
};

export default PastReview;

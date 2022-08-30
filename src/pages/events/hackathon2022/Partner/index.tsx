import * as React from 'react';

import * as Styled from './index.styled';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = [
  {
    name: '赞助方',
    items: [
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
    ],
  },
  {
    name: '协办方',
    items: [
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
    ],
  },
  {
    name: '合作伙伴',
    items: [
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
    ],
  },
];

const Partner: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {data.map((value) => (
        <Category value={value} />
      ))}
    </Styled.Container>
  );
};

export default Partner;

function Category({ value }) {
  return (
    <Styled.Category>
      <Styled.Title>{value.name}</Styled.Title>
      <Styled.List>
        {value.items.map((item) => (
          <Styled.Column key={item.image}>
            <Styled.Item>
              <img src={item.image} alt="" />
            </Styled.Item>
          </Styled.Column>
        ))}
      </Styled.List>
    </Styled.Category>
  );
}

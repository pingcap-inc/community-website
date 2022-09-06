import * as React from 'react';

import * as Styled from './index.styled';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    name: string;
    items: {
      image: string;
    }[];
  }[];
}

const Partner: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {data.map((value) => (
        <Category key={value.name} value={value} />
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

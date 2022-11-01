import * as React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

import * as Styled from './index.styled';

import photo广州Image from './广州.jpg';
import photo天津Image from './天津.jpg';
import photo武汉Image from './武汉.jpg';
import photo济南Image from './济南.jpg';
import photo石家庄Image from './石家庄.jpg';
import MyContainer from '~/components/Container';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
}

const Header: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Carousel autoplay>
        <div>
          <Image {...photo广州Image} />
        </div>
        <div>
          <Image {...photo天津Image} />
        </div>
        <div>
          <Image {...photo武汉Image} />
        </div>
        <div>
          <Image {...photo济南Image} />
        </div>
        <div>
          <Image {...photo石家庄Image} />
        </div>
      </Carousel>

      <Styled.CardContainer>
        <MyContainer>
          <Styled.Card>
            <Styled.Title>{data.title}</Styled.Title>
            <Styled.Description>{data.description}</Styled.Description>
            <Styled.Actions>
              <Styled.JoinButton>🙋‍ 我要成为地区组织者</Styled.JoinButton>
              <Styled.NominateButton>我要提名 TA</Styled.NominateButton>
            </Styled.Actions>
          </Styled.Card>
        </MyContainer>
      </Styled.CardContainer>
    </Styled.Container>
  );
};

export default Header;

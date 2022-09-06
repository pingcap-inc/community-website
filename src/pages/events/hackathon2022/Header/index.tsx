import * as React from 'react';
import Image from 'next/image';

import * as Styled from './index.styled';
import cubeImage from './cube.png';
import titleImage from './title.png';
import bannerImage from './banner_image.png';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    buttonItems: { children: React.ReactNode }[];
    navItems: { children: React.ReactNode; href: string }[];
  };
}

const Header: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Header>
        <Styled.HeaderStart>
          <Styled.HeaderStartTitle>
            {/*<img src={titleImage} alt={seo.title} />*/}
            <div
              style={{
                paddingLeft: '20%',
              }}
            >
              <Image {...cubeImage} alt={''} />
            </div>
            <Image {...titleImage} alt={'TiDB Hackathon 2022'} />
          </Styled.HeaderStartTitle>
          <Styled.HeaderStartImage>
            <Image {...bannerImage} alt={''} />
          </Styled.HeaderStartImage>
          <Styled.HeaderStartButton>{data.buttonItems.map((value) => value.children)}</Styled.HeaderStartButton>
          <Styled.HeaderStartNav>
            {data.navItems.map((value) => (
              <Styled.HeaderStartNavItem key={value.href} {...value} />
            ))}
          </Styled.HeaderStartNav>
        </Styled.HeaderStart>
        <Styled.HeaderEnd>
          {/*<img src={bannerImage} alt="" />*/}
          <Image {...bannerImage} alt={''} />
        </Styled.HeaderEnd>
      </Styled.Header>
    </Styled.Container>
  );
};

export default Header;

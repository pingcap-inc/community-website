import * as React from 'react';
import Image from 'next/image';

import * as Styled from './index.styled';
import TiDB_Hackathon_2021 from './TiDB_Hackathon_2021.jpg';
import TiDB_Hackathon_2020 from './TiDB_Hackathon_2020.jpg';
import TiDB_Hackathon_2019 from './TiDB_Hackathon_2019.jpg';
import TiDB_Hackathon_2018 from './TiDB_Hackathon_2018.jpg';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = [
  {
    name: 'TiDB_Hackathon_2021',
    image: TiDB_Hackathon_2021,
    url: 'https://pingkai.cn/tidbcommunity/events/hackathon2021',
  },
  {
    name: 'TiDB_Hackathon_2020',
    image: TiDB_Hackathon_2020,
    url: 'https://pingkai.cn/tidbcommunity/archived/events/hackathon2020',
  },
  {
    name: 'TiDB_Hackathon_2019',
    image: TiDB_Hackathon_2019,
    url: 'https://pingkai.cn/tidbcommunity/archived/events/hackathon2019',
  },
  {
    name: 'TiDB_Hackathon_2018',
    image: TiDB_Hackathon_2018,
    url: 'https://pingkai.cn/tidbcommunity/archived/events/hackathon2018',
  },
];

const PastReview: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      {data.map((value) => (
        <Styled.Column key={value.name}>
          <Styled.Item href={value.url}>
            <Image {...value.image} alt={value.name} />
          </Styled.Item>
        </Styled.Column>
      ))}
    </Styled.Container>
  );
};

export default PastReview;

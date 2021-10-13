import React from 'react';
import Image from 'next/image';
import { EnvironmentOutlined } from '@ant-design/icons';

import * as Styled from './FullCalendarCellCard.styled';
import { getColorByType } from './utils';

const FullCalendarCellCard = ({ data }) => {
  const { date, startDate, endDate, _title, location, type, link, category, image } = data;
  console.log('FullCalendarCellCard data', data);
  return (
    <Styled.Wrapper>
      <Styled.Header align="center">
        <div
          style={{ width: 8, height: 8, borderRadius: 8, overflow: 'hidden', backgroundColor: getColorByType(type) }}
        />
        <Styled.Date>{date ?? `${startDate} - ${endDate}`}</Styled.Date>
      </Styled.Header>
      <Styled.Title>
        <a href={link}>{_title}</a>
      </Styled.Title>
      <Styled.Image>
        <Image src={image} alt={_title} layout="fill" objectFit="cover" />
      </Styled.Image>
      <Styled.Location>
        <ul>
          <li>
            <EnvironmentOutlined /> {location}
          </li>
          <li>{category}</li>
        </ul>
      </Styled.Location>
    </Styled.Wrapper>
  );
};

export default FullCalendarCellCard;

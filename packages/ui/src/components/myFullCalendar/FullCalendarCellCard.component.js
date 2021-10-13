import React from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';

import * as Styled from './FullCalendarCellCard.styled';
import { getColorByType } from './utils';

const FullCalendarCellCard = ({ data }) => {
  const {
    card: { date, startDate, endDate, title, location, type, link, category, image },
  } = data;
  return (
    <Styled.Wrapper>
      <Styled.Header align="center">
        <div
          style={{ width: 8, height: 8, borderRadius: 8, overflow: 'hidden', backgroundColor: getColorByType(type) }}
        />
        <Styled.Date>{date ?? `${startDate} - ${endDate}`}</Styled.Date>
      </Styled.Header>
      <Styled.Title>
        <a href={link}>{title}</a>
      </Styled.Title>
      <Styled.Image>
        <img src={image.src} alt={title} />
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

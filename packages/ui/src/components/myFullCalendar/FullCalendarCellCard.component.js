import React from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';

import * as Styled from './FullCalendarCellCard.styled';
import { getColorByType } from './utils';

const FullCalendarCellCard = ({ data }) => {
  const {
    card: { date, startDate, endDate, title, location, link, category, image },
  } = data;

  let actualDate;
  if (!!startDate && !!endDate) {
    actualDate = `${startDate} - ${endDate}`;
  } else {
    actualDate = date;
  }

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: getColorByType(category),
          }}
        />
        <Styled.Date>{actualDate}</Styled.Date>
      </Styled.Header>
      <Styled.Title>
        <a href={link}>{title}</a>
      </Styled.Title>
      <Styled.Image>
        <a href={link}>
          <img src={image.src} alt={title} />
        </a>
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

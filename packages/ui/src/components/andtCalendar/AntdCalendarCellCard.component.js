import React from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';

import * as Styled from './AntdCalendarCellCard.styled';
import { getColorByType } from './utils';

const AntdCalendarCellCard = ({ data }) => {
  const { startDate, endDate, title, location, type, link, category, image } = data;

  return (
    <Styled.Wrapper>
      <Styled.Header align="center">
        <div
          style={{ width: 8, height: 8, borderRadius: 8, overflow: 'hidden', backgroundColor: getColorByType(type) }}
        />
        <Styled.Date>
          {startDate} - {endDate}
        </Styled.Date>
      </Styled.Header>
      <Styled.Title>
        <a href={link}>{title}</a>
      </Styled.Title>
      <Styled.Image>
        <img src={image} alt={title} />
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

export default AntdCalendarCellCard;

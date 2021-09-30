import React from 'react';

import * as Styled from './AntdCalendarCellCard.styled';

const AntdCalendarCellCard = ({ data }) => {
  const { startDate, endDate, title, location, type, link, category, image } = data;

  return (
    <Styled.Wrapper>
      <Styled.Date>
        {startDate} - {endDate}
      </Styled.Date>
      <Styled.Title>
        <a href={link}>{title}</a>
      </Styled.Title>
      <Styled.Image>
        <img src={image} alt={title} />
      </Styled.Image>
      <Styled.Location>
        {location} | {type} | {category}
      </Styled.Location>
      <Styled.Intro>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam debitis error eum impedit ipsa
        ipsam laborum praesentium, quisquam voluptas! Aut dolor dolorem est fugiat ipsum provident quia quidem tenetur?
      </Styled.Intro>
    </Styled.Wrapper>
  );
};

export default AntdCalendarCellCard;

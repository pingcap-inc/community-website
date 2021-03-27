import * as R from 'ramda';
import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'antd';

import * as Styled from './activityCards.styled';

const ActivityCards = props => {
  const { activities, onCardClick, renderImage } = R.mergeRight(
    {
      activities: [],
      onCardClick: () => {},
      renderImage: ({ img, title }) => <img alt={title} src={img} />
    },
    props
  );

  return (
    <Row gutter={[32, 24]} justify="center">
      {activities.map(({ desc, img, link, title }, idx) => (
        <Col key={idx} xs={24} sm={12} md={8}>
          <Styled.Card onClick={e => onCardClick(link)}>
            <Styled.Image>
              {renderImage({
                img,
                title
              })}
            </Styled.Image>
            <Styled.Content>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Desc>{desc}</Styled.Desc>
            </Styled.Content>
          </Styled.Card>
        </Col>
      ))}
    </Row>
  );
};

ActivityCards.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      desc: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  onCardClick: PropTypes.func.isRequired,
  renderImage: PropTypes.func
};

export default ActivityCards;

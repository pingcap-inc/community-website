import React, { useRef } from 'react';
import PropType from 'prop-types';

import * as Styled from './benifitCards.styled';
import { useSize } from 'ahooks';

const BenefitCard = ({ size, title, details, icon, tag }) => {
  return (
    <Styled.Card $size={size}>
      <Styled.CardHead $tag={tag}>
        <span>{title}</span>
        <img alt={title} src={icon} />
      </Styled.CardHead>
      <Styled.CardBody>
        <Styled.Details>
          {details.map((detail, index) => (
            <Styled.Detail key={index} $tooltips={detail.tooltips}>
              <span>{detail.text}</span>
              {detail.tag && <Styled.DetailTag>{detail.tag}</Styled.DetailTag>}
            </Styled.Detail>
          ))}
        </Styled.Details>
      </Styled.CardBody>
    </Styled.Card>
  );
};

BenefitCard.propTypes = {
  size: PropType.oneOf(['lg', 'md', 'sm']).isRequired,
  title: PropType.string.isRequired,
  details: PropType.array.isRequired,
  icon: PropType.string.isRequired,
  tag: PropType.string,
};

const BenefitCards = ({ benefits }) => {
  const container = useRef();
  const { width } = useSize(container);
  const size = width >= 1210 ? 'lg' : width < 736 ? 'sm' : 'md';

  return (
    <div ref={container}>
      <Styled.Cards $size={size}>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} size={size} />
        ))}
      </Styled.Cards>
    </div>
  );
};

BenefitCards.propTypes = {
  benefits: PropType.array.isRequired,
};

export default BenefitCards;

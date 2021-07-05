import React from 'react';
import PropType from 'prop-types';

import * as Styled from './benifitCards.styled';

const BenefitCard = ({ title, details, icon, tag }) => {
  return (
    <Styled.Card>
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
  title: PropType.string.isRequired,
  details: PropType.array.isRequired,
  icon: PropType.string.isRequired,
  tag: PropType.string,
};

const BenefitCards = ({ benefits }) => {
  return (
    <Styled.Cards>
      {benefits.map((benefit, index) => (
        <BenefitCard key={index} {...benefit} />
      ))}
    </Styled.Cards>
  );
};

BenefitCards.propTypes = {
  benefits: PropType.array.isRequired,
};

export default BenefitCards;

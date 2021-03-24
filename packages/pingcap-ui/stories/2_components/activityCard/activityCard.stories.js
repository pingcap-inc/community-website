import { ActivityCard } from '@pingcap/pingcap-ui';
import { Row, Col } from 'antd';

import { getTitle } from '../utils';

export default {
  title: getTitle('ActivityCard'),
  component: ActivityCard
};

const Template = args => (
  <Row gutter={[32, 24]} justify="center">
    {args.cards.map(card => (
      <Col key={card.title} xs={24} sm={12} md={8}>
        <ActivityCard {...card} />
      </Col>
    ))}
  </Row>
);

export const CardList = Template.bind({});

CardList.args = {
  cards: [{ title: 'Card 1' }, { title: 'Card 2' }]
};

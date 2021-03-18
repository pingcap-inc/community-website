import * as R from 'ramda';
import React from 'react';
import { Row, Col } from 'antd';
import { readableColor } from 'polished';
import { colors } from '@pingcap/pingcap-ui';

import * as Styled from './colors.styled';
import { getTitle } from '../utils';

const useCases = {
  M1: 'Card Background',
  M2: 'Main Background',
  F1: 'Text - 1 Title，H0，H1，H2',
  F2: 'Text - 2 General，P1，P2，H3',
  B1: 'Theme，Button, highlight, Link',
  B2: 'Blue，Minor',
  B3: 'Dark 85%， bg',
  B4: 'Dark 100%，dark bg',
  T1: 'Tag，Success',
  T2: 'Line，Divider, 10 % B3',
  T3: 'Tag, Warning, Notice, Attention',
  T4: 'Tag',
  T5: 'Tag',
  T6: 'Tag',
};

const Palette = () => {
  return (
    <Row gutter={[16, 16]}>
      {R.toPairs(colors).map(([name, color]) => (
        <Col key={name} xs={24} sm={12} md={8} lg={6}>
          <Styled.Item>
            <Styled.Box color={color} border={readableColor(color)} />
            <Styled.Text>
              <li>
                <b>Name:</b> {name}
              </li>
              <li>
                <b>Hex:</b> {color}
              </li>
              <li>
                <b>Use Case:</b> {useCases[name]}
              </li>
            </Styled.Text>
          </Styled.Item>
        </Col>
      ))}
    </Row>
  );
};

export default {
  title: getTitle('Color Palette'),
};

const Template = (args) => <Palette {...args} />;

export const AllColors = Template.bind({});

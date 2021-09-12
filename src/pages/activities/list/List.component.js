import React from 'react';
import { Button, Col, Row, Form, Select } from 'antd';
import { useTranslation } from 'next-i18next';

import * as Styled from './list.styled';
import { CATEGORIES, TYPES, DATES, LOCATIONS } from './list.constants';
import { common as commonUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const { Option } = Select;

const Dropdown = ({ placeholder, options }) => (
  <Styled.DropdownWrapper>
    <Select placeholder={placeholder}>
      {commonUtils.genOptionValues(options).map((props) => (
        <Option key={props.value} {...props} />
      ))}
    </Select>
  </Styled.DropdownWrapper>
);

const List = () => {
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-activities');

  const lang = t('list', { returnObjects: true });
  const { filters: filtersLang } = lang;

  return (
    <Styled.Container id="all-activities" isSmallScreen={isSmallScreen}>
      <Styled.Title>{lang.title}</Styled.Title>
      <Form>
        <Row gutter={[16, 16]}>
          <Col flex="auto">
            <Row gutter={[16, 16]}>
              <Dropdown placeholder={filtersLang.category} options={CATEGORIES} />
              <Dropdown placeholder={filtersLang.type} options={TYPES} />
              <Dropdown placeholder={filtersLang.date} options={DATES} />
              <Dropdown placeholder={filtersLang.location} options={LOCATIONS} />
            </Row>
          </Col>
          <Col flex="none">
            <Button type="primary" size="small">
              {filtersLang.button}
            </Button>
          </Col>
        </Row>
      </Form>
    </Styled.Container>
  );
};

export default List;

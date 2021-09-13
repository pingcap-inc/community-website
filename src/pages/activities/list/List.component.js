import Image from 'next/image';
import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { Button, Col, Row, Select } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

import * as Styled from './list.styled';
import { CATEGORIES, TYPES, DATES, LOCATIONS } from './list.constants';
import { PageDataContext } from '~/context';
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

const Activity = ({ title, location, type, date, image }) => (
  <Styled.ActivityCard>
    <Styled.ImageWrapper>
      <Image alt={title} src={image} layout="fill" objectFit="cover" />
    </Styled.ImageWrapper>
    <h3>{title}</h3>
    <ul>
      <li>
        <EnvironmentOutlined />
        {location}
      </li>
      <li>{type}</li>
      <li>{dayjs(date).format('YYYY.MM.DD')}</li>
    </ul>
  </Styled.ActivityCard>
);

const List = () => {
  const { data } = useContext(PageDataContext);
  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-activities');

  const lang = t('list', { returnObjects: true });
  const { filters: filtersLang } = lang;

  const { activities } = data;
  const isMobile = !breakpoint.md;
  const filtersColProps = isMobile
    ? {
        span: 24,
      }
    : {
        flex: 'auto',
      };
  const buttonColProps = isMobile
    ? {
        span: 24,
      }
    : {
        flex: 'none',
      };

  return (
    <Styled.Container id="all-activities" isSmallScreen={isSmallScreen}>
      <Styled.Title>{lang.title}</Styled.Title>

      <Styled.Filters>
        <Row gutter={[16, 16]}>
          <Col {...filtersColProps}>
            <Row gutter={[16, 16]}>
              <Dropdown placeholder={filtersLang.category} options={CATEGORIES} />
              <Dropdown placeholder={filtersLang.type} options={TYPES} />
              <Dropdown placeholder={filtersLang.date} options={DATES} />
              <Dropdown placeholder={filtersLang.location} options={LOCATIONS} />
            </Row>
          </Col>
          <Col {...buttonColProps}>
            <Button type="primary" size="small" block={isMobile}>
              {filtersLang.button}
            </Button>
          </Col>
        </Row>
      </Styled.Filters>

      <Row gutter={[32, 32]}>
        {activities.map((activity, idx) => {
          const props = {
            key: idx,
            ...activity,
            image: commonUtils.getStrapiImgProps(activity.image),
          };

          return <Activity {...props} />;
        })}
      </Row>

      <Styled.Pagination total={activities.length} />
    </Styled.Container>
  );
};

export default List;

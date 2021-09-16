import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import { Button, Col, Form, Row, Select } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';

import * as Styled from './list.styled';
import slice, { initialState } from '~/pages/activities/activities.slice';
import { CATEGORIES, TYPES, DATES, LOCATIONS } from './list.constants';
import { Link } from '~/components';
import { PageDataContext } from '~/context';
import { common as commonUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const { Option } = Select;
const { actions } = slice;

const Dropdown = ({ name, placeholder, options }) => (
  <Styled.DropdownWrapper>
    <Form.Item name={name}>
      <Select placeholder={placeholder}>
        {commonUtils.genOptionValues(options).map((props) => (
          <Option key={props.value} {...props} />
        ))}
      </Select>
    </Form.Item>
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
  const dispatch = useDispatch();
  const { filters, ...paginationData } = useSelector((state) => state.activities);
  const { data } = useContext(PageDataContext);
  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-activities');

  useEffect(() => {
    if (!breakpoint.lg) {
      dispatch(actions.setPageSize(breakpoint.xs ? 3 : 6));
    } else {
      dispatch(actions.setPageSize(initialState.pageSize));
    }
  }, [dispatch, breakpoint]);

  const lang = t('list', { returnObjects: true });
  const { filters: filtersLang } = lang;
  const { activities, total } = data;

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

  const filtersProps = {
    initialValues: {
      ...filters,
    },

    onFinish: (filters) => {
      dispatch(actions.setFilters(filters));
    },
  };

  const paginationProps = {
    ...paginationData,
    total,
    hideOnSinglePage: true,
    onChange: (page) => {
      dispatch(actions.setCurrent(page));
    },
  };

  return (
    <Styled.Container id="all-activities" isSmallScreen={isSmallScreen}>
      <Styled.Title>{lang.title}</Styled.Title>

      <Styled.Filters {...filtersProps}>
        <Row gutter={[16, 16]}>
          <Col {...filtersColProps}>
            <Row gutter={[16, 16]}>
              <Dropdown name="category" placeholder={filtersLang.category} options={CATEGORIES} />
              <Dropdown name="type" placeholder={filtersLang.type} options={TYPES} />
              <Dropdown name="date" placeholder={filtersLang.date} options={DATES} />
              <Dropdown name="location" placeholder={filtersLang.location} options={LOCATIONS} />
            </Row>
          </Col>
          <Col {...buttonColProps}>
            <Button htmlType="submit" type="primary" size="small" block={isMobile}>
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

      <Styled.Pagination {...paginationProps} />
    </Styled.Container>
  );
};

export default List;

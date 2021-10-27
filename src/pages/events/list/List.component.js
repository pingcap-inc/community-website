import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import { Button, Col, Empty, Form, Row, Select, Spin } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';

import * as Styled from './list.styled';
import slice, { initialState } from '~/pages/events/events.slice';
import { CATEGORIES, TYPES, DATES, LOCATIONS } from './list.constants';
import { PageDataContext } from '~/context';
import { common as commonUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';
import { PlainLink } from './list.styled';

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

const Event = ({ title, link, location, type, date, endDate, startDate, image }) => {
  const imgProps = {
    alt: title,
    src: image,
    layout: 'fill',
    objectFit: 'cover',
    priority: true,
    placeholder: 'blur',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8WQ8AAjcBWtrfQHkAAAAASUVORK5CYII=',
  };

  const dateObj = startDate ?? date;
  let durationObj;
  if (endDate && startDate) {
    durationObj = dayjs(endDate).diff(dayjs(startDate), 'days') + 1;
  } else if (date) {
    durationObj = null;
  } else {
    durationObj = null;
  }

  return (
    <Styled.EventCard>
      <PlainLink href={link}>
        <Styled.ImageWrapper>
          <Image {...imgProps} />
        </Styled.ImageWrapper>
        <h3>{title}</h3>
        <ul>
          <li>
            <EnvironmentOutlined />
            {location}
          </li>
          <li>{type}</li>
          <li>{dayjs(dateObj).format('YYYY.MM.DD')}</li>
          {durationObj && <li>{durationObj} 天</li>}
        </ul>
      </PlainLink>
    </Styled.EventCard>
  );
};

const List = () => {
  const dispatch = useDispatch();
  const { filters, ...paginationData } = useSelector((state) => state.events);
  const { data } = useContext(PageDataContext);
  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-events');

  useEffect(() => {
    if (!breakpoint.lg) {
      dispatch(actions.setPageSize(breakpoint.xs ? 3 : 6));
    } else {
      dispatch(actions.setPageSize(initialState.pageSize));
    }
  }, [dispatch, breakpoint]);

  const lang = t('list', { returnObjects: true });
  const { filters: filtersLang } = lang;
  const { events, total } = data;

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
    <Styled.Container id="all-events" isSmallScreen={isSmallScreen}>
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

      {events?.length ? (
        <Row gutter={[32, 32]}>
          {events.map((event, idx) => {
            const props = {
              key: idx,
              ...event,
              image: commonUtils.getStrapiImgProps(event.image),
            };

            return <Event {...props} />;
          })}
        </Row>
      ) : !events ? (
        <Styled.SpinContainer>
          <Spin size="large" />
        </Styled.SpinContainer>
      ) : (
        <Empty description={lang.empty} />
      )}

      <Styled.Pagination {...paginationProps} />
    </Styled.Container>
  );
};

export default List;

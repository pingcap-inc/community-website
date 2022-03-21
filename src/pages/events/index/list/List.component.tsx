import Image from 'next/image';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Button, Col, Empty, Form, Row, Select, Tooltip } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

import * as Styled from './list.styled';
import constant from '../constant.json';
import { CATEGORIES, DATES, LOCATIONS, TYPES } from './list.constants';
import { common as commonUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';
import { useRouter } from 'next/router';
import { getNumberFromQuery, setUndefinedWhenItemIsEmpty } from '~/utils/request.utils';
import Anchor from '~/components/Anchor';

const { Option } = Select;
export const defaultPageSize = 8;

const Dropdown = ({ name, placeholder, options, setFiltersValue }) => {
  const router = useRouter();
  const handleChangeFilter = async (value: string) => setFiltersValue((state) => ({ ...state, [name]: value }));
  const defaultValue = setUndefinedWhenItemIsEmpty(router.query)[name];
  return (
    <Styled.DropdownWrapper>
      <Form.Item name={name}>
        <Select placeholder={placeholder} onChange={handleChangeFilter} defaultValue={defaultValue}>
          {commonUtils.genOptionValues(options).map((props) => (
            <Option key={props.value} {...props} />
          ))}
        </Select>
      </Form.Item>
    </Styled.DropdownWrapper>
  );
};

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
      <Anchor href={link}>
        <Styled.ImageWrapper>
          <Image {...imgProps} />
        </Styled.ImageWrapper>
        <h3>{title}</h3>
        <ul>
          <li>
            <Tooltip placement="topLeft" title="活动类型" arrowPointAtCenter>
              <EnvironmentOutlined />
              {location}
            </Tooltip>
          </li>
          <li>
            <Tooltip placement="topLeft" title="活动形式" arrowPointAtCenter>
              {type}
            </Tooltip>
          </li>
          <li>
            <Tooltip placement="topLeft" title="活动时间" arrowPointAtCenter>
              {dayjs(dateObj).format('YYYY.MM.DD')}
            </Tooltip>
          </li>
          {durationObj && (
            <li>
              <Tooltip placement="topLeft" title="活动持续天数" arrowPointAtCenter>
                {durationObj} 天
              </Tooltip>
            </li>
          )}
        </ul>
      </Anchor>
    </Styled.EventCard>
  );
};

/*const loadingStatus = (
  <Styled.SpinContainer>
    <Spin size="large" />
  </Styled.SpinContainer>
)*/

const htmlId = 'all-events';

export default function List({ events, total }) {
  const router = useRouter();
  const { category, type, date, location, pageNumber: pageNumberStr } = router.query;
  const pageNumber: number = getNumberFromQuery(pageNumberStr, 1);
  const [filtersValue, setFiltersValue] = useState({ category, type, date, location });
  const { isSmallScreen, breakpoint } = useIsSmallScreen();

  const handleFilter = async () => {
    await router.replace({ pathname: '/events', query: { ...filtersValue, pageNumber: 1 }, hash: `#${htmlId}` });
  };

  /*  useEffect(() => {
    if (!breakpoint.lg) {
      dispatch(actions.setPageSize(breakpoint.xs ? 3 : 6));
    } else {
      dispatch(actions.setPageSize(initialState.pageSize));
    }
  }, [dispatch, breakpoint]);*/

  const handleChangePage = async (page: number) => {
    await router.push({ pathname: `/events`, query: { ...router.query, pageNumber: page }, hash: `#${htmlId}` });
  };

  const isMobile = !breakpoint.md;
  const filtersColProps = isMobile ? { span: 24 } : { flex: 'auto' };
  const buttonColProps = isMobile ? { span: 24 } : { flex: 'none' };

  return (
    <Styled.Container id={htmlId} isSmallScreen={isSmallScreen}>
      <Styled.Title>{constant.list.title}</Styled.Title>

      <Styled.Filters>
        <Row gutter={[16, 16]}>
          <Col {...filtersColProps}>
            <Row gutter={[16, 16]}>
              <Dropdown
                name="category"
                placeholder={constant.list.filters.category}
                options={CATEGORIES}
                setFiltersValue={setFiltersValue}
              />
              <Dropdown
                name="type"
                placeholder={constant.list.filters.type}
                options={TYPES}
                setFiltersValue={setFiltersValue}
              />
              <Dropdown
                name="date"
                placeholder={constant.list.filters.date}
                options={DATES}
                setFiltersValue={setFiltersValue}
              />
              <Dropdown
                name="location"
                placeholder={constant.list.filters.location}
                options={LOCATIONS}
                setFiltersValue={setFiltersValue}
              />
            </Row>
          </Col>
          <Col {...buttonColProps}>
            <Button type="primary" size="small" block={isMobile} onClick={handleFilter}>
              {constant.list.filters.button}
            </Button>
          </Col>
        </Row>
      </Styled.Filters>

      {events.length > 0 ? (
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
      ) : (
        <Empty description={constant.list.empty} />
      )}

      <Styled.Pagination
        total={total}
        current={pageNumber}
        defaultPageSize={defaultPageSize}
        pageSize={defaultPageSize}
        onChange={handleChangePage}
        hideOnSinglePage={true}
      />
    </Styled.Container>
  );
}

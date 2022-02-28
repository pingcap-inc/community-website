import * as React from 'react';
import { Button, Space } from 'antd';
import { useState } from 'react';

export interface IProps {
  initialPage?: number;
  page: number;
  onChange?: (pageNumber) => any;
}

export default function Pagination(props: IProps) {
  const { initialPage, onChange } = props;
  const [page, setPage] = useState(initialPage ?? 1);
  const onClickPrev = () => {
    setPage((page) => {
      const newPage = page > 1 ? page - 1 : 1;
      onChange?.(newPage);
      return newPage;
    });
  };
  const onClickNext = () => {
    setPage((page) => {
      const newPage = page + 1;
      onChange?.(newPage);
      return newPage;
    });
  };
  return (
    <Space>
      {page > 0 && <Button onClick={onClickPrev}>Prev</Button>}
      {/*<Input size={'large'} style={{width: 48}} defaultValue="1" />*/}
      {<Button onClick={onClickNext}>Next</Button>}
    </Space>
  );
}

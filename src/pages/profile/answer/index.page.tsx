import * as React from 'react';
import * as Styled from './index.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { Pagination, Select } from 'antd';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // @ts-ignore
  const i18nProps = await getI18nProps(['common'])(ctx);
  return {
    props: {
      ...i18nProps,
    },
  };
};

export interface IProps {
  children: React.ReactNode;
}

export default function ProfileAnswerPage() {
  const onChange = () => {
    //  TODO: handle page change
  };
  return (
    <ProfileLayout>
      <Styled.Action>
        <Tab selected={EUgcType.answer} nums={{ answer: 3, question: 4, post: 5, favorite: 6 }} />
        <Select defaultValue={''}>
          <Select.Option value={''}>回答状态</Select.Option>
          <Select.Option value={'1'}>回答状态</Select.Option>
          <Select.Option value={'2'}>回答状态</Select.Option>
        </Select>
      </Styled.Action>
      <Styled.List>List</Styled.List>
      <Styled.Pagination>
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      </Styled.Pagination>
    </ProfileLayout>
  );
}

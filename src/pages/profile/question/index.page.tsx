import * as React from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { Pagination, Select } from 'antd';
import ListItem from '../_components/ListItem';
import dayjs from 'dayjs';

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
  const date = dayjs(new Date()).format();
  return (
    <ProfileLayout>
      <CommonStyled.Action>
        <Tab selected={EUgcType.question} nums={{ answer: 3, question: 4, post: 5, favorite: 6 }} />
        <Select defaultValue={''}>
          <Select.Option value={''}>提问状态</Select.Option>
          <Select.Option value={'1'}>提问状态</Select.Option>
          <Select.Option value={'2'}>提问状态</Select.Option>
        </Select>
      </CommonStyled.Action>
      <CommonStyled.List>
        <ListItem
          url={'#'}
          title={'ansbile升级集群V3到4.0.14问题'}
          summary={
            '这个场景就比较痛苦了，官方后续只会支持tiup 的迭代。。Evict 的策略 是通过 PD 来设定的，目前你出现的问题，基本上都是环境问题了，可能无法解决 :rofl: 这个场景就比较痛苦了，官方后续只会支持tiup 的迭代。。Evict 的策略 是通过 PD 来设定的，目前你出现的问题，基本上都是环境问题了，可能无法解决 :rofl:'
          }
          metadataEnd={date}
        />
        <ListItem
          url={'#'}
          title={'ansbile升级集群V3到4.0.14问题'}
          summary={
            '这个场景就比较痛苦了，官方后续只会支持tiup 的迭代。。Evict 的策略 是通过 PD 来设定的，目前你出现的问题，基本上都是环境问题了，可能无法解决 :rofl: 这个场景就比较痛苦了，官方后续只会支持tiup 的迭代。。Evict 的策略 是通过 PD 来设定的，目前你出现的问题，基本上都是环境问题了，可能无法解决 :rofl:'
          }
          metadataEnd={date}
        />
        <ListItem
          url={'#'}
          title={'ansbile升级集群V3到4.0.14问题'}
          summary={
            '这个场景就比较痛苦了，官方后续只会支持tiup 的迭代。。Evict 的策略 是通过 PD 来设定的，目前你出现的问题，基本上都是环境问题了，可能无法解决 :rofl: 这个场景就比较痛苦了，官方后续只会支持tiup 的迭代。。Evict 的策略 是通过 PD 来设定的，目前你出现的问题，基本上都是环境问题了，可能无法解决 :rofl:'
          }
          metadataEnd={date}
        />
        <ListItem
          url={'#'}
          title={'ansbile升级集群V3到4.0.14问题'}
          summary={
            '这个场景就比较痛苦了，官方后续只会支持tiup 的迭代。。Evict 的策略 是通过 PD 来设定的，目前你出现的问题，基本上都是环境问题了，可能无法解决 :rofl: 这个场景就比较痛苦了，官方后续只会支持tiup 的迭代。。Evict 的策略 是通过 PD 来设定的，目前你出现的问题，基本上都是环境问题了，可能无法解决 :rofl:'
          }
          metadataEnd={date}
        />
        <ListItem
          url={'#'}
          title={'ansbile升级集群V3到4.0.14问题'}
          summary={
            '这个场景就比较痛苦了，官方后续只会支持tiup 的迭代。。Evict 的策略 是通过 PD 来设定的，目前你出现的问题，基本上都是环境问题了，可能无法解决 :rofl: 这个场景就比较痛苦了，官方后续只会支持tiup 的迭代。。Evict 的策略 是通过 PD 来设定的，目前你出现的问题，基本上都是环境问题了，可能无法解决 :rofl:'
          }
          metadataEnd={date}
        />
      </CommonStyled.List>
      <CommonStyled.Pagination>
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      </CommonStyled.Pagination>
    </ProfileLayout>
  );
}

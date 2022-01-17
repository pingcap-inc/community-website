import * as Styled from './Ranking.styled';
// @ts-ignore
import { useIsSmallScreen } from '~/hooks';
import { Table } from 'antd';
import { tikv_columns, tikv_columns_participation, tikv_data } from './datasource';

const Ranking = () => {
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Banner sm={isSmallScreen} />
        {['一等奖', '二等奖', '三等奖'].map((prize, idx) => (
          <>
            <h3>{prize}</h3>
            <Table dataSource={tikv_data[idx]} columns={tikv_columns} pagination={false} />;
          </>
        ))}
        <h3>最佳参与奖</h3>
        <Table dataSource={tikv_data[3]} columns={tikv_columns_participation} pagination={false} />
        <h3>优胜奖</h3>
        <Table dataSource={tikv_data[4]} columns={tikv_columns.slice(0, -1)} pagination={false} />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Ranking;

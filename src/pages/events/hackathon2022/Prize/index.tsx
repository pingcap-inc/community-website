import * as React from 'react';

import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = {
  top: [
    { name: '冠军', thing: '¥ 50,000', target: '1 支队伍 / 赛道' },
    { name: '亚军', thing: '¥ 25,000', target: '2 支队伍 / 赛道' },
    { name: '季军', thing: '¥ 15,000', target: '3 支队伍 / 赛道' },
  ],
  onlyApplicationGroup: [
    { name: '最佳创意奖', thing: '¥ 5,000', target: '1 支队伍' },
    { name: '公益贡献奖', thing: '¥ 5,000', target: '1 支队伍' },
    { name: '技术趋势奖', thing: '¥ 5,000', target: '1 支队伍' },
    { name: 'Cloud 应用生态奖（API）', thing: '¥ 5,000', target: '1 支队伍' },
  ],
  applicationAndTiDBProductGroup: [
    { name: '最佳人气奖', thing: '键鼠套装 / 人 ', target: '1 支队伍 / 赛道' },
    { name: '最佳校园奖', thing: '¥ 5,000', target: '1 支队伍 / 赛道' },
    { name: '用户之选奖', thing: '¥ 5,000', target: '1 支队伍 / 赛道' },
  ],
};

const Prize: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Description>
        各赛道 <span style={{ color: '#00CF71' }}>Top 6</span> 均可获得现金奖励
      </Styled.Description>

      <Styled.SpecialPrizeList>
        <Styled.SpecialPrizeTopListColumn>
          <Styled.SpecialPrizeTopListItemGold>
            <Styled.SpecialPrizeTopListColumnItemName>{data.top[0].name}</Styled.SpecialPrizeTopListColumnItemName>
            <Styled.SpecialPrizeTopListColumnItemThing>
              {/*data.top[0].thing*/}
            </Styled.SpecialPrizeTopListColumnItemThing>
            <Styled.SpecialPrizeTopListColumnItemTarget style={{ marginTop: 8 }}>
              {data.top[0].target}
            </Styled.SpecialPrizeTopListColumnItemTarget>
          </Styled.SpecialPrizeTopListItemGold>
        </Styled.SpecialPrizeTopListColumn>
        <Styled.SpecialPrizeTopListColumn>
          <Styled.SpecialPrizeTopListItemSliver>
            <Styled.SpecialPrizeTopListColumnItemName>{data.top[1].name}</Styled.SpecialPrizeTopListColumnItemName>
            <Styled.SpecialPrizeTopListColumnItemThing>
              {/*data.top[1].thing*/}
            </Styled.SpecialPrizeTopListColumnItemThing>
            <Styled.SpecialPrizeTopListColumnItemTarget style={{ marginTop: 8 }}>
              {data.top[1].target}
            </Styled.SpecialPrizeTopListColumnItemTarget>
          </Styled.SpecialPrizeTopListItemSliver>
        </Styled.SpecialPrizeTopListColumn>
        <Styled.SpecialPrizeTopListColumn>
          <Styled.SpecialPrizeTopListItemBronze>
            <Styled.SpecialPrizeTopListColumnItemName>{data.top[2].name}</Styled.SpecialPrizeTopListColumnItemName>
            <Styled.SpecialPrizeTopListColumnItemThing>
              {/*data.top[2].thing*/}
            </Styled.SpecialPrizeTopListColumnItemThing>
            <Styled.SpecialPrizeTopListColumnItemTarget style={{ marginTop: 8 }}>
              {data.top[2].target}
            </Styled.SpecialPrizeTopListColumnItemTarget>
          </Styled.SpecialPrizeTopListItemBronze>
        </Styled.SpecialPrizeTopListColumn>
      </Styled.SpecialPrizeList>

      <Styled.SpecialPrizeTitle>特别奖项</Styled.SpecialPrizeTitle>
      <Styled.SpecialPrizeTitleFirst>仅应用组</Styled.SpecialPrizeTitleFirst>
      <Styled.SpecialPrizeList>
        {data.onlyApplicationGroup.map((value) => (
          <Styled.SpecialPrizeTopListColumn>
            <Styled.SpecialPrizeTopListColumnItem>
              <Styled.SpecialPrizeTopListColumnItemName>{value.name}</Styled.SpecialPrizeTopListColumnItemName>
              <Styled.SpecialPrizeTopListColumnItemThing>{value.thing}</Styled.SpecialPrizeTopListColumnItemThing>
              <Styled.SpecialPrizeTopListColumnItemTarget>{value.target}</Styled.SpecialPrizeTopListColumnItemTarget>
            </Styled.SpecialPrizeTopListColumnItem>
          </Styled.SpecialPrizeTopListColumn>
        ))}
      </Styled.SpecialPrizeList>

      <Styled.SpecialPrizeTitleSecond>应用组 & TiDB 产品组</Styled.SpecialPrizeTitleSecond>
      <Styled.SpecialPrizeList>
        {data.applicationAndTiDBProductGroup.map((value) => (
          <Styled.SpecialPrizeTopListColumn>
            <Styled.SpecialPrizeTopListColumnItem>
              <Styled.SpecialPrizeTopListColumnItemName>{value.name}</Styled.SpecialPrizeTopListColumnItemName>
              <Styled.SpecialPrizeTopListColumnItemThing>{value.thing}</Styled.SpecialPrizeTopListColumnItemThing>
              <Styled.SpecialPrizeTopListColumnItemTarget>{value.target}</Styled.SpecialPrizeTopListColumnItemTarget>
            </Styled.SpecialPrizeTopListColumnItem>
          </Styled.SpecialPrizeTopListColumn>
        ))}
      </Styled.SpecialPrizeList>

      <Styled.Footer>
        注：所有奖项奖金均为税前金额，奖项评选规则可参考
        <Anchor href={'https://asktug.com/t/topic/273513'}>评分规则</Anchor>。
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Prize;

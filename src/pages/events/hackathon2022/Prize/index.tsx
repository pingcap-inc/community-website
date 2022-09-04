import * as React from 'react';

import * as Styled from './index.styled';
import Anchor from "~/components/Anchor";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const data = {
  onlyApplicationGroup: [
    {name: '最佳创意奖', thing: '¥ 5,000', target: '1 支队伍'},
    {name: '公益贡献奖', thing: '¥ 5,000', target: '1 支队伍'},
    {name: '技术趋势奖', thing: '¥ 5,000', target: '1 支队伍'},
    {name: 'Cloud 应用生态奖（API）', thing: '¥ 5,000', target: '1 支队伍'},
  ],
  applicationAndTiDBProductGroup: [
    {name: '最佳人气奖', thing: '键鼠套装 / 人 ', target: '1 支队伍 / 赛道'},
    {name: '最佳校园奖', thing: '¥ 5,000', target: '1 支队伍 / 赛道'},
    {name: '用户之选奖', thing: '¥ 5,000', target: '1 支队伍 / 赛道'},
  ],
}

const Prize: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Description>
        各赛道 <span style={{ color: '#00CF71' }}>Top 6</span> 均可获得现金奖项
      </Styled.Description>
      {/*TODO: gold sliver bronze*/}
      <Styled.SpecialPrizeTitle>特别奖项</Styled.SpecialPrizeTitle>
      <Styled.SpecialPrizeTitleFirst>仅应用组</Styled.SpecialPrizeTitleFirst>
      <Styled.SpecialPrizeTopList>
        {data.onlyApplicationGroup.map((value) => (
          <Styled.SpecialPrizeTopListColumn>
            <Styled.SpecialPrizeTopListColumnItem>
              <Styled.SpecialPrizeTopListColumnItemName>{value.name}</Styled.SpecialPrizeTopListColumnItemName>
              <Styled.SpecialPrizeTopListColumnItemThing>{value.thing}</Styled.SpecialPrizeTopListColumnItemThing>
              <Styled.SpecialPrizeTopListColumnItemTarget>{value.target}</Styled.SpecialPrizeTopListColumnItemTarget>
            </Styled.SpecialPrizeTopListColumnItem>
          </Styled.SpecialPrizeTopListColumn>
        ))}
      </Styled.SpecialPrizeTopList>

      <Styled.SpecialPrizeTitleSecond>应用组 & TiDB 产品组</Styled.SpecialPrizeTitleSecond>
      <Styled.SpecialPrizeTopList>
        {data.applicationAndTiDBProductGroup.map((value) => (
          <Styled.SpecialPrizeTopListColumn>
            <Styled.SpecialPrizeTopListColumnItem>
              <Styled.SpecialPrizeTopListColumnItemName>{value.name}</Styled.SpecialPrizeTopListColumnItemName>
              <Styled.SpecialPrizeTopListColumnItemThing>{value.thing}</Styled.SpecialPrizeTopListColumnItemThing>
              <Styled.SpecialPrizeTopListColumnItemTarget>{value.target}</Styled.SpecialPrizeTopListColumnItemTarget>
            </Styled.SpecialPrizeTopListColumnItem>
          </Styled.SpecialPrizeTopListColumn>
        ))}
      </Styled.SpecialPrizeTopList>

      <Styled.Footer>
        注：所有奖项奖金均为税前金额，奖项评选规则可参考<Anchor href={'#'}>评分规则</Anchor>。
      </Styled.Footer>

      {/*<Styled.SpecialPrizeTopList>*/}
      {/*  <Styled.SpecialPrizeTopListItem>*/}
      {/*    <Styled.SpecialPrizeTopListItemGold>*/}

      {/*    </Styled.SpecialPrizeTopListItemGold>*/}
      {/*  </Styled.SpecialPrizeTopListItem>*/}
      {/*  <Styled.SpecialPrizeTopListItem>*/}
      {/*    <Styled.SpecialPrizeTopListItemSliver>*/}

      {/*    </Styled.SpecialPrizeTopListItemSliver>*/}
      {/*  </Styled.SpecialPrizeTopListItem>*/}
      {/*  <Styled.SpecialPrizeTopListItem>*/}
      {/*    <Styled.SpecialPrizeTopListItemBronze>*/}

      {/*    </Styled.SpecialPrizeTopListItemBronze>*/}
      {/*  </Styled.SpecialPrizeTopListItem>*/}
      {/*</Styled.SpecialPrizeTopList>*/}
    </Styled.Container>
  );
};

export default Prize;

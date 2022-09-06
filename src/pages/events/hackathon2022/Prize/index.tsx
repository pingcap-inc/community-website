import * as React from 'react';

import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';

export type TPrizeItem = {
  name: string
  thing: string
  target: string
}

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    top: TPrizeItem[]
    onlyApplicationGroup: TPrizeItem[]
    applicationAndTiDBProductGroup: TPrizeItem[]
  }
}

const Prize: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
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
          <Styled.SpecialPrizeTopListColumn key={value.name}>
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
          <Styled.SpecialPrizeTopListColumn key={value.name}>
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

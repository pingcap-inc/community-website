import * as React from 'react';

import * as Styled from './index.styled';

export type TPrizeItem = {
  name: string;
  thing: string;
  target: string;
};

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    topPrize: {
      description: React.ReactNode;
      items: TPrizeItem[];
    };
    prizes: {
      name: React.ReactNode;
      categories: { name?: React.ReactNode; items: TPrizeItem[] }[];
    }[];
    footer: React.ReactNode;
  };
}

const Prize: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Description>{data.topPrize.description}</Styled.Description>

      <Styled.SpecialPrizeList>
        <Styled.SpecialPrizeTopListColumn>
          <Styled.SpecialPrizeTopListItemGold>
            <Styled.SpecialPrizeTopListColumnItemName>
              {data.topPrize.items[0].name}
            </Styled.SpecialPrizeTopListColumnItemName>
            <Styled.SpecialPrizeTopListColumnItemThing>
              {/*data.top[0].thing*/}
            </Styled.SpecialPrizeTopListColumnItemThing>
            <Styled.SpecialPrizeTopListColumnItemTarget style={{ marginTop: 8 }}>
              {data.topPrize.items[0].target}
            </Styled.SpecialPrizeTopListColumnItemTarget>
          </Styled.SpecialPrizeTopListItemGold>
        </Styled.SpecialPrizeTopListColumn>
        <Styled.SpecialPrizeTopListColumn>
          <Styled.SpecialPrizeTopListItemSliver>
            <Styled.SpecialPrizeTopListColumnItemName>
              {data.topPrize.items[1].name}
            </Styled.SpecialPrizeTopListColumnItemName>
            <Styled.SpecialPrizeTopListColumnItemThing>
              {/*data.top[1].thing*/}
            </Styled.SpecialPrizeTopListColumnItemThing>
            <Styled.SpecialPrizeTopListColumnItemTarget style={{ marginTop: 8 }}>
              {data.topPrize.items[1].target}
            </Styled.SpecialPrizeTopListColumnItemTarget>
          </Styled.SpecialPrizeTopListItemSliver>
        </Styled.SpecialPrizeTopListColumn>
        <Styled.SpecialPrizeTopListColumn>
          <Styled.SpecialPrizeTopListItemBronze>
            <Styled.SpecialPrizeTopListColumnItemName>
              {data.topPrize.items[2].name}
            </Styled.SpecialPrizeTopListColumnItemName>
            <Styled.SpecialPrizeTopListColumnItemThing>
              {/*data.top[2].thing*/}
            </Styled.SpecialPrizeTopListColumnItemThing>
            <Styled.SpecialPrizeTopListColumnItemTarget style={{ marginTop: 8 }}>
              {data.topPrize.items[2].target}
            </Styled.SpecialPrizeTopListColumnItemTarget>
          </Styled.SpecialPrizeTopListItemBronze>
        </Styled.SpecialPrizeTopListColumn>
      </Styled.SpecialPrizeList>

      {data.prizes.map((prize) => (
        <div key={prize.name}>
          <Styled.SpecialPrizeTitle>{prize.name}</Styled.SpecialPrizeTitle>
          {prize.categories.map((category, index) => (
            <div key={index}>
              {category.name && <Styled.SpecialPrizeTitleSecond>{category.name}</Styled.SpecialPrizeTitleSecond>}
              <Styled.SpecialPrizeList>
                {category.items.map((item) => (
                  <Styled.SpecialPrizeTopListColumn key={item.name}>
                    <Styled.SpecialPrizeTopListColumnItem>
                      <Styled.SpecialPrizeTopListColumnItemName>{item.name}</Styled.SpecialPrizeTopListColumnItemName>
                      <Styled.SpecialPrizeTopListColumnItemThing>
                        {item.thing}
                      </Styled.SpecialPrizeTopListColumnItemThing>
                      <Styled.SpecialPrizeTopListColumnItemTarget>
                        {item.target}
                      </Styled.SpecialPrizeTopListColumnItemTarget>
                    </Styled.SpecialPrizeTopListColumnItem>
                  </Styled.SpecialPrizeTopListColumn>
                ))}
              </Styled.SpecialPrizeList>
            </div>
          ))}
        </div>
      ))}

      <Styled.Footer>{data.footer}</Styled.Footer>
    </Styled.Container>
  );
};

export default Prize;

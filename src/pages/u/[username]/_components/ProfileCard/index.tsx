import * as React from 'react';
import * as Styled from './index.styled';
// import Image from 'next/image';
import { FieldBinaryOutlined, EditFilled, MailFilled } from '@ant-design/icons';
import Link from 'next/link';
// import { useContext } from 'react';
// import { MeContext } from '~/context';

export interface IProfileCard {
  avatarUrl: string;
  name: string;
  level: number;
  description: string;
  joinDate: string;
  nums: {
    like: number;
    answer: number;
    post: number;
  };
}

export default function ProfileCard(props: IProfileCard) {
  const { avatarUrl, name, level, description, joinDate, nums } = props;
  //TODO: show edit link when the profile is current logon user
  const isMySelf = true;
  return (
    <Styled.Container>
      <Styled.Action>
        {isMySelf && (
          <Link href={'https://tidb.io/my/profile'} passHref>
            <Styled.Edit>
              <EditFilled />
            </Styled.Edit>
          </Link>
        )}
        <Styled.Chat>
          私信 <MailFilled />
        </Styled.Chat>
      </Styled.Action>
      <Styled.Main>
        <Styled.Avatar>
          {/*<Image src={avatarUrl} alt={name} width={Styled.AvatarSize} height={Styled.AvatarSize} />*/}
          <img src={avatarUrl} alt={name} />
        </Styled.Avatar>
        <Styled.Name>
          <Styled.NameText>{name}</Styled.NameText>
          <Styled.Level>V{level}</Styled.Level>
        </Styled.Name>
        <Styled.Description>{description}</Styled.Description>
        <Styled.JoinDate>
          <FieldBinaryOutlined /> 于 {joinDate} 加入
        </Styled.JoinDate>
        <Styled.Nums>
          <Styled.NumsItem>
            <Styled.NumsItemKeyName>获赞</Styled.NumsItemKeyName>
            <Styled.NumsItemValue>{nums.like}</Styled.NumsItemValue>
          </Styled.NumsItem>
          <Styled.NumsItem>
            <Styled.NumsItemKeyName>回答</Styled.NumsItemKeyName>
            <Styled.NumsItemValue>{nums.answer}</Styled.NumsItemValue>
          </Styled.NumsItem>
          <Styled.NumsItem>
            <Styled.NumsItemKeyName>文章</Styled.NumsItemKeyName>
            <Styled.NumsItemValue>{nums.post}</Styled.NumsItemValue>
          </Styled.NumsItem>
        </Styled.Nums>
      </Styled.Main>
    </Styled.Container>
  );
}

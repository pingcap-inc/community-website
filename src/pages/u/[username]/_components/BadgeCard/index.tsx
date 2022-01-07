import * as React from 'react';
import * as Styled from './index.styled';
import { BulbFilled } from '@ant-design/icons';
import { IRawBadges } from '~/pages/profile/api';
import { Tooltip } from 'antd';
import Link from 'next/link';

export interface IProfileCard {
  badges: IRawBadges[];
}

export default function ProfileCard(props: IProfileCard) {
  const { badges } = props;
  const hasBadges = badges.filter((value) => value.has_badge === true);
  const hasNotBadges = badges.filter((value) => value.has_badge === false);
  const nums = { total: badges.length, current: hasBadges.length };
  const mergedBadges = [...hasBadges, ...hasNotBadges].slice(0, 10);
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          <Styled.TitleText>徽章</Styled.TitleText>
          <Styled.TitleNums>
            {nums.current}/{nums.total}
          </Styled.TitleNums>
        </Styled.Title>
        <Link href={'https://asktug.com/badges'} passHref>
          <Styled.ActiveMore>
            <BulbFilled /> 点亮更多徽章
          </Styled.ActiveMore>
        </Link>
      </Styled.Header>
      <Styled.Body>
        {mergedBadges.map((value) => (
          <Styled.Badge key={value.id} hasBadge={value.has_badge}>
            <Tooltip
              placement="topLeft"
              title={`${value.name} - ${value.description} ${
                value.long_description ? `(${value.long_description})` : ''
              }`}
            >
              <img src={value.image} alt={value.name} />
            </Tooltip>
          </Styled.Badge>
        ))}
      </Styled.Body>
    </Styled.Container>
  );
}

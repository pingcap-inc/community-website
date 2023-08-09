import React from 'react';
import { Row } from 'antd';

import { Styled as CommonStyled } from '@tidb-community/ui';

import { getImage } from '~/pages/talent-plan/talent-plan.utils';

import * as Styled from './team.styled';

const members = [
  {
    nameEN: 'Jiguang Wang',
    nameZH: '万继光',
    org: '华中科技大学',
    role: 'PMC',
  },
  {
    nameEN: 'Karim',
    nameZH: '江坤',
    org: 'Digital China',
    role: 'PMC',
    github: 'pupillord',
  },
  {
    nameEN: 'Xiaoguang Sun',
    nameZH: '孙晓光',
    org: 'PingCAP',
    role: 'PMC',
    github: 'sunxiaoguang',
  },
  {
    nameEN: 'Jian Zhang',
    nameZH: '张建',
    role: 'PMC',
    github: 'zz-jason',
  },
  {
    nameEN: 'Junyi Yang',
    nameZH: '杨俊逸',
    org: 'PingCAP',
    role: 'Committer',
    github: 'rebelice',
  },
  {
    nameEN: 'Connor',
    nameZH: '张博康',
    org: 'PingCAP',
    role: 'Committer',
    github: 'Connor1996',
  },
  {
    nameEN: 'Xiang Zhang',
    nameZH: '张翔',
    org: 'PingCAP',
    role: 'Committer',
    github: 'zhangyangyu',
  },
  {
    nameEN: 'David',
    nameZH: '杨运帷',
    org: 'Digital China',
    role: 'Active Contributor',
    github: 'AmoebaProtozoa',
  },
  {
    nameEN: 'xurui',
    nameZH: '徐锐',
    org: 'oltp group',
    role: 'Senior Mentor',
    github: 'cfzjywxk',
  },
  {
    nameEN: 'Tong Mu',
    nameZH: '童牧',
    org: 'PingCAP',
    role: 'Senior Mentor',
    github: 'you06',
  },
  {
    nameEN: 'Cui Yiding',
    nameZH: '崔一丁',
    org: 'PingCAP',
    role: 'Senior Mentor',
    github: 'winoros',
  },
  {
    nameEN: 'Andy',
    nameZH: '骆迪安',
    role: 'Senior Mentor',
    github: 'andylokandy',
  },
  {
    nameEN: 'Panda',
    nameZH: '王能杰',
    org: '华中科技大学',
    role: 'Mentor',
    github: 'wangnengjie',
  },
  {
    nameEN: 'Hammer Li',
    nameZH: '李思岑',
    org: '华中科技大学',
    role: 'Mentor',
    github: 'L–LYR',
  },
  {
    nameEN: 'Chen Jingang',
    nameZH: '陈劲刚',
    org: '华中科技大学',
    role: 'Mentor',
    github: 'Whorra',
  },
  {
    nameEN: 'Li Xiang',
    nameZH: '李响',
    org: '华中科技大学',
    role: 'Mentor',
    github: 'LX-676655103',
  },
  {
    nameEN: 'Zhang Jiakun',
    nameZH: '张家坤',
    org: '中国科学技术大学',
    role: 'Mentor',
    github: 'JK1Zhang',
  },
  {
    nameEN: 'Zhang Qingyang',
    nameZH: '张擎洋',
    org: '中国科学技术大学',
    role: 'Mentor',
    github: 'QingyangZ',
  },
  {
    nameEN: 'Li Xing',
    nameZH: '李鑫',
    org: '电子科技大学',
    role: 'Mentor',
    github: 'oocococo',
  },
  {
    nameEN: 'Tang Ruilin',
    nameZH: '汤瑞麟',
    org: '华中科技大学',
    role: 'Mentor',
    github: 'Tangruilin',
  },
  {
    nameEN: 'Hu Yu',
    nameZH: '胡煜',
    org: '浙江大学',
    role: 'Mentor',
    github: 'charstal',
  },
  {
    nameEN: 'Tan Xinyu',
    nameZH: '谭新宇',
    org: '清华大学',
    role: 'Mentor',
    github: 'OneSizeFitsQuorum',
  },
  {
    nameEN: 'Tan Shun',
    nameZH: '谭顺',
    org: '山西大学',
    role: 'Mentor',
    github: 'madao756',
  },
  {
    nameEN: 'Huang Zhanghen',
    nameZH: '黄章衡',
    org: '福州大学',
    role: 'Mentor',
    github: 'hzh0425',
  },
];

const Team = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>我们的团队</CommonStyled.Title>
        <Row gutter={16}>
          {members.map((member) => (
            <Styled.CardWrapper lg={6} xs={12} key={member.nameEN}>
              <Styled.MemberCard>
                <Styled.MemberCardAvatar size={48} src={getImage(`team-${member.nameZH}.jpg`)} />
                <Styled.MemberCardContent>
                  {member.nameZH && <Styled.MemberCardHeader>{member.nameZH}</Styled.MemberCardHeader>}
                  {member.org && <Styled.MemberCardLine>Org: {member.org}</Styled.MemberCardLine>}
                  {member.role && <Styled.MemberCardLine>Role: {member.role}</Styled.MemberCardLine>}
                  {member.github && <Styled.MemberCardLine>GitHub: {member.github}</Styled.MemberCardLine>}
                </Styled.MemberCardContent>
              </Styled.MemberCard>
            </Styled.CardWrapper>
          ))}
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Team;

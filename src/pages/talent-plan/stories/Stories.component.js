import React from 'react';

import * as Styled from './stories.styled';
import { Styled as CommonStyled } from '@tidb-community/ui';
import { Avatar, Col, Row } from 'antd';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';

const stories = [
  {
    content:
      '我超级喜欢 PingCAP 的氛围还有培训方式。这次培训从语言和数据库理论学习到跟进最新论文，再到动手实操小 Demo，了解了 TiDB 各个模块的代码，丰富的课程让我对数据库的理解又加深了一层。希望自己以后的研究东西能够更贴近到具体的场景和系统中去发现问题，并把自己的研究成果落地。',
    name: '兰海',
    desc: '第一期线下课程优秀学员',
  },
  {
    content:
      '参加了 Talent  Plan 是一次非常珍贵的体验，一方面是学到了许多的没有接触过的分布式领域的知识，另一方面也结识了来自全国各个高校的优秀的小伙伴以及 PingCAP 的各位厉害的导师，也为我之后来PingCAP 实习埋下了伏笔。',
    name: '张艺文',
    desc: '第二期线下课程优秀学员',
  },
  {
    content:
      '参加这次 Talent Plan，我不仅学习到了丰富的知识，还深入地参与到具有挑战性的工程项目。更重要的是交到了一群非常优秀、靠谱的朋友。非常感谢 PingCAP 举办这个活动，希望 Talent Plan 越办越好。',
    name: '黄文俊',
    desc: '第三期线下课程优秀学员',
  },
  {
    content:
      '经过 Talent Plan 的学习让我明白了，在实验室里 fancy 的想法在工业界可能并不 work，实际应用环境要比实验室环境严格苛刻很多很多。经过这次线下课程的学习，我以后在设计方案的时候会着重考虑从现实角度出发。',
    name: '邹欢',
    desc: '第三期线下课程最具潜力奖获得者',
  },
  {
    content:
      '这次参加 Talent Plan 收获十分巨大，首先是认识了一群很棒的小伙伴，正如崔秋老师说的，一个月时间很短，但是友谊却是一辈子的。然后，我对整个 TiDB 生态以及其中的各个模块有了更高层次的认识和理解，也切身体验到了PingCAP 很 Cool 的 Geek 氛围，总之度过了很有意义的一个月。',
    name: '林宁',
    desc: '第三期线下课程最具潜力获奖者',
  },
  {
    content:
      '工作后参加 Talent Plan 是非常神奇的体验。在这不仅能学习到 TiDB 各个模块的基础理论，还能听到一线的开发直接分享在生产环境中实践的一些细节和经验。最后还能和大家一起齐心协力去落地一个项目，并见证它成为这个优秀开源数据库的一部分。感觉自己回到了久违的学生时光。',
    name: '郑向升',
    desc: '第四期线下课程学员代表',
  },
  {
    content:
      '在传统的课堂学习中，如果组队做一些比较大的作业，最多就是几个同学间讨论，这种单向小规模的思想交流比较有限。但通过 Talent Plan 学习社区，我们可以汇聚全国，甚至全世界的分布式技术爱好者，大家对于同一件事有不同的思维、思想，就会碰撞出一些很有意思的思路和解决方法，这也可以激发大家更有热情地参与进来。通过 Talent Plan 的学习，我不仅学到了专业的分布式数据库知识，还交到很多朋友，个人非常喜欢这种形式。',
    name: '谭新宇',
    desc: '2021 TinyKV学习营优秀学员',
  },
  {
    content:
      '之前也参加过一些软件设计类的竞赛，这些比赛更关注项目的包装，而在 Talent Plan 学习营中，更关注的是学生的动手能力，以及是否坚持到底将项目完成。通过 Talent Plan，可以把所学的知识与实践相结合，这对于个人发展是非常有帮助的。未来，我会继续往数据库这一领域去发展，从事分布式数据库相关的研发是我最感兴趣的事情。',
    name: '黄章衡',
    desc: '2021 TinyKV学习营优秀学员',
  },
  {
    content:
      'Talent Plan 的课程设置非常合理，由浅入深，难度的跨度也是慢慢提升的，对于学员来说比较友好。因为我的专业就是数据库相关，对这些知识其实并不陌生。但之前的学习经历偏学术界，Talent Plan 的课程更侧重工业界的实践，来自于实际应用场景中。通过 Talent Plan 的学习，可以帮助我把学术界的理论和工业界的实践结合起来，进一步提升专业知识。',
    name: '孙佳丽',
    desc: '2021 TinyKV学习营优秀学员',
  },
];

const Others = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>学员故事</CommonStyled.Title>
        <Row gutter={16}>
          {stories.map((story) => (
            <Col key={story.name} xs={24} md={12} lg={8}>
              <Styled.CardWrap>
                <Styled.StoryCard>
                  {story.content}
                  <Styled.StoryCardBottom>
                    <Avatar src={getImage(`team-${story.name}.jpg`)} size={48} />
                    <Styled.StoryCardInfo>
                      <Styled.StoryCardInfoName> {story.name} </Styled.StoryCardInfoName>
                      <Styled.StoryCardInfoDesc> {story.desc} </Styled.StoryCardInfoDesc>
                    </Styled.StoryCardInfo>
                  </Styled.StoryCardBottom>
                </Styled.StoryCard>
              </Styled.CardWrap>
            </Col>
          ))}
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Others;

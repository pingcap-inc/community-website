// import * as R from 'ramda';
import React from 'react';
// import { useTranslation } from 'next-i18next';

// import Layout from '../layout';
import * as Styled from './index.styled';
import { CommunityHead } from '~/components';
import { Row, Col } from 'antd';
import Anchor from '~/components/Anchor';
import { CoreLayout } from '~/layouts';

// export { getServerSideProps } from '../utils';

const Page = () => {
  // const { t } = useTranslation('page-contact-us');
  // const lang = t('cooperation', {
  //   returnObjects: true,
  // });

  return (
    <>
      {/*<CommunityHead title={lang.title} />*/}
      <CommunityHead />
      {/*<Layout {...R.pick(['title', 'subtitle'], lang)}>*/}
      <CoreLayout backgroundColor={'#e9eaee'}>
        <Styled.Content>
          <Styled.Title>Hello! 欢迎来到 TiDB 社区，有什么能帮到你？</Styled.Title>
          <Row gutter={[32, 32]}>
            <Col sm={24} md={8}>
              <Styled.Card color={'#F8C200'}>
                <Styled.CardTitle>遇到技术问题</Styled.CardTitle>
                <Styled.CardParagraph>你可以在论坛和 2w+ 社区⼩伙伴互相交流问题</Styled.CardParagraph>
                <Styled.CardParagraph>
                  <Anchor>&gt; 去发帖</Anchor>
                </Styled.CardParagraph>
                <Styled.CardParagraph>如果你想看看别⼈是否遇到相似的问题，并且已有了解决⽅案</Styled.CardParagraph>
                <Styled.CardParagraph>
                  <Anchor>&gt; 去搜索</Anchor>
                </Styled.CardParagraph>
              </Styled.Card>
            </Col>
            <Col sm={24} md={8}>
              <Styled.Card color={'#F15A24'}>
                <Styled.CardTitle>商业⽀持</Styled.CardTitle>
                <Styled.CardParagraph>想要获得商业专家产品最⾼响应级别 7*24 ⽀持服务</Styled.CardParagraph>
                <Styled.CardComment>规划/实施/主动式巡检/故障协查/知识转移/重要时期保障</Styled.CardComment>
                <Styled.CardParagraph>
                  <Anchor>&gt; 联系 PingCAP</Anchor>
                </Styled.CardParagraph>
              </Styled.Card>
            </Col>
            <Col sm={24} md={8}>
              <Styled.Card color={'#E30C34'}>
                <Styled.CardTitle>社区合作</Styled.CardTitle>
                <Styled.CardParagraph>
                  TiDB 社区已经和多家社区建⽴了合作关系，如：思否、开源中国、开源社、infoQ 等。
                </Styled.CardParagraph>
                <Styled.CardParagraph>欢迎来和我们⼀起做更多有意思的事！</Styled.CardParagraph>
                <Styled.CardParagraph>
                  <Anchor>&gt; 填写合作表单</Anchor>
                </Styled.CardParagraph>
              </Styled.Card>
            </Col>
          </Row>
          <Styled.Image>
            <img src="/images/contact-us/cooperation.svg" alt="" />
          </Styled.Image>
        </Styled.Content>
      </CoreLayout>
    </>
  );
};

export default Page;

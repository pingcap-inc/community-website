// import * as R from 'ramda';
import React from 'react';
// import { useTranslation } from 'next-i18next';

// import Layout from '../layout';
import * as Styled from './index.styled';
import { CommunityHead } from '~/components';
import { Row, Col } from 'antd';
import Anchor from '~/components/Anchor';
import { CoreLayout } from '~/layouts';
import { getI18nProps } from '~/utils/i18n.utils';

// export { getServerSideProps } from '../utils';
export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Page = () => {
  // const { t } = useTranslation('page-contact-us');
  // const lang = t('cooperation', {
  //   returnObjects: true,
  // });

  return (
    <>
      {/*<CommunityHead title={lang.title} />*/}
      <CommunityHead
        title={'联系我们'}
        description={
          '我们为每一位来到 TiDB 社区的小伙伴提供帮助。如果你遇到技术问题，想要获得商业支持，或者是想进行社区合作，欢迎在这里联系我们！'
        }
        keyoword={['TiDB 社区', '联系我们', '咨询', '提问', '商业支持', '社区合作']}
      />
      {/*<Layout {...R.pick(['title', 'subtitle'], lang)}>*/}
      <CoreLayout backgroundColor={'#e9eaee'}>
        <Styled.Content>
          <Styled.Title>Hello! 欢迎来到 TiDB 社区，有什么能帮到你？</Styled.Title>
          <Styled.List>
            <Styled.Card color={'#F8C200'}>
              <Styled.CardTitle>遇到技术问题</Styled.CardTitle>
              <Styled.CardParagraph>你可以在论坛和 2w+ 社区⼩伙伴互相交流问题</Styled.CardParagraph>
              <Styled.CardParagraph>
                <Anchor href={'https://asktug.com/new-topic'}>&gt; 去发帖</Anchor>
              </Styled.CardParagraph>
              <Styled.CardParagraph>如果你想看看别⼈是否遇到相似的问题，并且已有了解决⽅案</Styled.CardParagraph>
              <Styled.CardParagraph>
                <Anchor href={'https://search.asktug.com/'}>&gt; 去搜索</Anchor>
              </Styled.CardParagraph>
            </Styled.Card>
            <Styled.Card color={'#F15A24'}>
              <Styled.CardTitle>商业⽀持</Styled.CardTitle>
              <Styled.CardParagraph>想要获得商业专家产品最⾼响应级别 7*24 ⽀持服务</Styled.CardParagraph>
              <Styled.CardComment>规划/实施/主动式巡检/故障协查/知识转移/重要时期保障</Styled.CardComment>
              <Styled.CardParagraph>
                <Anchor href={'https://pingcap.com/zh/contact/?utm_source=tidb-community&utm_medium=referral'}>
                  &gt; 联系 PingCAP
                </Anchor>
              </Styled.CardParagraph>
            </Styled.Card>
            <Styled.Card color={'#E30C34'}>
              <Styled.CardTitle>社区合作</Styled.CardTitle>
              <Styled.CardParagraph>
                TiDB 社区已经和多家社区建⽴了合作关系，如：思否、开源中国、开源社、infoQ 等。
              </Styled.CardParagraph>
              <Styled.CardParagraph>欢迎来和我们⼀起做更多有意思的事！</Styled.CardParagraph>
              <Styled.CardParagraph>
                <Anchor href={'/contact-us/cooperation'}>&gt; 填写合作表单</Anchor>
              </Styled.CardParagraph>
            </Styled.Card>
          </Styled.List>
          <Styled.Image>
            <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/contact-us/contact-us.png`} alt="" />
          </Styled.Image>
        </Styled.Content>
      </CoreLayout>
    </>
  );
};

export default Page;

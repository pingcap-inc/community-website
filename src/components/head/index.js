import React from 'react';

import * as data from './head.data';
import Head from './Head.component';

export const CommunityHead = (props) => {
  const headProps = {
    ...data.community,
    description:
      'TiDB 社区是由 TiDB 生态中的开发者、用户、Contributor、合作伙伴一起建立的分享、学习平台。在这里，我们可以自由发声，互相协助解决问题。',
    titleSuffix: 'TiDB 社区',
    keyword:
      'TiDB,TiKV,HTAP,实时数仓,实时商业智能,实时数据分析,实时流处理,数据中台,弹性扩容,交易,数据服务和分析一体化,分布式数据库,社区,活动,问答,论坛,技术文章,专栏',
  };

  return <Head {...headProps} {...props} />;
};

export const TugHead = (props) => <Head {...data.tug} {...props} />;

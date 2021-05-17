const { errorResp, successResp, wait } = require('../../../../utils');
const { topicsList } = require('./topics.mock');

module.exports = async (req, res) => {
  await wait();
  const { slug } = req.params;

  if (slug === '403') {
    return errorResp({
      code: 403,
      detail: 'you do not have permission to perform this action',
    })(req, res);
  }

  let { page, page_size: pageSize } = req.query;
  page = parseInt(page, 10);
  pageSize = parseInt(pageSize, 10);
  const offset = (page - 1) * pageSize;

  successResp({
    data: {
      meta: {
        topics_count: topicsList.length,
        page: page,
        page_size: pageSize,
      },
      topics_count: topicsList.slice(offset, offset + pageSize),
    },
  })(req, res);
};

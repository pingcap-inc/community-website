const { errorResp, successResp, wait } = require('../../../../utils');
const { topicsList } = require('./topics.mock');

module.exports = async (req, res) => {
  await wait();
  const { slug } = req.params;
  let { page, page_size: pageSize } = req.query;
  page = parseInt(page);
  pageSize = parseInt(pageSize);

  if (slug === '403') {
    errorResp({
      code: 403,
      detail: 'you do not have permission to perform this action',
    })(req, res);
  } else {
    const offset = (page - 1) * pageSize;

    successResp({
      data: {
        meta: {
          topics: topicsList.length,
          page: page,
          page_size: pageSize,
        },
        topics: topicsList.slice(offset, offset + pageSize),
      },
    })(req, res);
  }
};

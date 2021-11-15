const { successResp } = require('../../../utils');
// const { categories } = require('./categories.mock');
// const { LOCALHOST } = require('../../../constants');

module.exports = (req, res) => {
  // const { page, size } = req.query;
  // const _page = page ? Number.parseInt(page) : 1;
  // const _size = size ? Number.parseInt(size) : 20;
  const data = {
    content: [
      {
        creatorId: 1,
        createdAt: '2021-10-28T19:38:49.000+00:00',
        modifierId: 1,
        lastModifiedAt: '2021-10-28T19:38:49.000+00:00',
        deletedAt: null,
        id: 1,
        name: '用户实践',
        slug: 'user-practice',
        weight: 10,
        description: '用户实践',
      },
      {
        creatorId: 1,
        createdAt: '2021-10-28T19:38:49.000+00:00',
        modifierId: 1,
        lastModifiedAt: '2021-10-28T19:38:49.000+00:00',
        deletedAt: null,
        id: 2,
        name: '原理解读',
        slug: 'principle-interpretation',
        weight: 10,
        description: '原理解读',
      },
      {
        creatorId: 1,
        createdAt: '2021-10-28T19:38:49.000+00:00',
        modifierId: 1,
        lastModifiedAt: '2021-10-28T19:38:49.000+00:00',
        deletedAt: null,
        id: 3,
        name: '测评',
        slug: 'evaluation',
        weight: 10,
        description: '测试与评价分析',
      },
      {
        creatorId: 1,
        createdAt: '2021-10-28T19:38:49.000+00:00',
        modifierId: 1,
        lastModifiedAt: '2021-10-28T19:38:49.000+00:00',
        deletedAt: null,
        id: 4,
        name: '运维实践',
        slug: 'operation-and-maintenance-practice',
        weight: 10,
        description: '运维实践',
      },
      {
        creatorId: 1,
        createdAt: '2021-10-28T19:38:49.000+00:00',
        modifierId: 1,
        lastModifiedAt: '2021-10-28T19:38:49.000+00:00',
        deletedAt: null,
        id: 5,
        name: 'TUG 技术探讨',
        slug: 'tug-technology-discussion',
        weight: 10,
        description: 'TUG 技术探讨',
      },
    ],
    page: {
      size: 20,
      totalElements: 5,
      totalPages: 1,
      number: 1,
    },
  };
  return successResp(data)(req, res);
};

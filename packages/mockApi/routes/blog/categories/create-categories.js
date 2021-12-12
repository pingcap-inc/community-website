const { successResp } = require('../../../utils');

module.exports = (req, res) => {
  const data = {
    code: 201,
    creatorId: 0,
    createdAt: '2021-11-10T08:02:43.489Z',
    modifierId: 0,
    lastModifiedAt: '2021-11-10T08:02:43.489Z',
    deletedAt: '2021-11-10T08:02:43.489Z',
    name: 'string',
    slug: 'string',
    weight: 0,
    description: 'string',
    _links: [
      {
        href: 'string',
        hreflang: 'string',
        title: 'string',
        type: 'string',
        deprecation: 'string',
        profile: 'string',
        name: 'string',
        templated: true,
      },
    ],
  };
  return successResp(data)(req, res);
};

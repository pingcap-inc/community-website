const { datatype, date, lorem, internet } = require('faker');

const { repeat } = require('../../../../utils');

const genUser = () => ({
  id: datatype.number(),
  username: internet.userName(),
  avatar_url: internet.avatar(),
});

const genTopic = (id) => ({
  id,
  slug: 'topic',
  category: {
    id: datatype.number(),
    slug: lorem.slug(2),
    name: lorem.word(4),
  },
  title: lorem.words(datatype.number({ min: 6, max: 9 })),
  excerpt: lorem.sentences(7),
  like_count: datatype.number(),
  reply_count: datatype.number(),
  views: datatype.number(),
  created_at: date.past(),
  creator: genUser(),
  urgencies: repeat(datatype.number(2), (item) => ({
    created_at: date.recent(),
    creator: genUser(),
  })),
});

const topicsList = repeat(datatype.number({ min: 15, max: 50 }), genTopic);

module.exports = {
  topicsList,
};

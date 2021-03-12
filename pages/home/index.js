import Home from './Home.component';
import { getExcerptByTopicId } from '../../utils';

async function getTopicFromAskTUG(key) {
  const api = `https://asktug.com/c/blog/${key}/l/latest.json?order=default&page=0&per_page=10`;
  const response = await fetch(api);
  const json = await response.json();
  json.topic_list.topics[0].excerpt = await getExcerptByTopicId(json.topic_list.topics[0].id);
  return json;
}

async function getTopTopicFromAskTUG() {
  const api = `https://asktug.com/top/weekly.json?order=default&page=0&per_page=10`;
  const response = await fetch(api);
  return await response.json();
}

export async function getServerSideProps(context) {
  const [howTo, practice, theory, top] = await Promise.all([
    getTopicFromAskTUG('how-to'),
    getTopicFromAskTUG('practice'),
    getTopicFromAskTUG('theory'),
    getTopTopicFromAskTUG(),
  ]);

  const topics = {
    howTo,
    practice,
    theory,
    top,
  };

  return {
    props: { topics },
  };
}

export default Home;

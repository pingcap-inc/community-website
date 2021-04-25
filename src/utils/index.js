import site from 'data/asktug_site.json';

export function getAvatarUrlByAvatarTemplateString(tplStr, size = 64) {
  return 'https://asktug.com/' + tplStr.replace('{size}', size);
}

export function getTopicUrlById(id) {
  return `https://asktug.com/t/topic/${id}`;
}

export function getUserUrlByUsername(username) {
  return `https://asktug.com/u/${username}`;
}

export function getCategoryById(id) {
  return site.categories.filter((category) => category.id === id)[0];
}

export async function getExcerptByTopicId(id, wordCountLimit = 70) {
  const api = getTopicUrlById(id) + '.json';
  const response = await fetch(api);
  const json = await response.json();
  const fullExcerpt = json.post_stream.posts[0].cooked.replace(/<\/?.+?>/g, '');
  return fullExcerpt.length > wordCountLimit ? fullExcerpt.slice(0, wordCountLimit) + ' ...' : fullExcerpt;
}

export * as featureToggle from './featureToggle';
export * as link from './link.utils';

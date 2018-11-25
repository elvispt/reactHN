export const CONFIG = {
  topStoriesUrl: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  itemUrl: id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  hnCommentsPage: id => `https://news.ycombinator.com/item?id=${id}`
};

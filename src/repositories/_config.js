export const CONFIG = {
  topStoriesUrl: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  itemUrl: id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  hnCommentsPage: id => `https://news.ycombinator.com/item?id=${id}`,
  minScoreForTopStory: 150,
  minCommentsForTopStory: 20,
  pages: {
    TOP: 1,
    NEW: 2,
    BEST: 3,
  },
  sortTypes: {
    SCORE: 'score',
    COMMENTS: 'descendants',
    AGE: 'time',
  },
  sortDirection: {
    ASC: 1,
    DESC: 2,
  },
};

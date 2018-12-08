import { CONFIG } from './_config.js';

let topStoriesIds = [];

export const _stories = {

  fetch: function () {
    return new Promise(function (resolve, reject) {
      if (topStoriesIds.length) {
        resolve(topStoriesIds);
      } else {
        fetchFromApi(resolve, reject);
      }
    });
  },

  fetchOne: (id) => {
    return fetch(CONFIG.itemUrl(id), {
      mode: "cors"
    })
      .then(response => response.json());
  }
};

function fetchFromApi(resolve, reject) {
  return fetch(CONFIG.topStoriesUrl)
    .then(response => response.json())
    .then(json => {
      topStoriesIds = json;
      resolve(topStoriesIds);
    });
}

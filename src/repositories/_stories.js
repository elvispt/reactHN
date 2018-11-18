let postsList = [];

export const _stories = {
  fetch: function () {
    return new Promise(function (resolve, reject) {
      if (postsList.length) {
        resolve(postsList);
      } else {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(json => {
            postsList = json;
            resolve(postsList);
          });
      }
    });
  }
};

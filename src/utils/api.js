import axios from "axios";

export const newsApi = axios.create({
  baseURL: "https://northcoders-news-isaak.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return newsApi
    .get("/articles", {
      params: {
        topic,
      },
    })
    .then(({ data }) => {
      const articleArray = data.articles;
      return articleArray;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => data.topics);
};

export const singleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const patchUpVote = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then((data) => {
      return data.data.article.votes;
    });
};

export const patchDownVote = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: -1,
    })
    .then((data) => {
      return data.data.article.votes;
    });
};

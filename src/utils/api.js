import axios from "axios";

const newsApi = axios.create({
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

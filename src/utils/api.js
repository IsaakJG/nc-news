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

import axios from "axios";

export const newsApi = axios.create({
  baseURL: "https://northcoders-news-isaak.herokuapp.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  return newsApi
    .get(`/articles`, {
      params: {
        topic,
        sort_by,
        order,
      },
    })
    .then(({ data }) => {
      return data.articles;
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

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (article_id, newComment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data;
  });
};

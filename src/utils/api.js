import axios from "axios";

export const newsApi = axios.create({
  baseURL: "https://northcoders-news-isaak.herokuapp.com/api",
});

// export const getArticles = () => {
//   return newsApi.get("/articles").then(({ data }) => {
//     console.log(data);
//   });
// };

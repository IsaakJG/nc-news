import axios from "axios";

export const newsApi = axios.create({
  baseURL: "https://northcoders-news-isaak.herokuapp.com/api",
});

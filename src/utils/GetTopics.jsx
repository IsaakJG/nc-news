import { newsApi } from "./api";
import { useState, useEffect } from "react";

export const GetTopics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    newsApi.get("/topics").then(({ data }) => setTopics(data.topics));
  });

  return topics;
};

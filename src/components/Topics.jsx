import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newsApi } from "../utils/api";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Topics = () => {
  const { topic } = useParams();
  const [singleTopic, setSingleTopic] = useState([]);

  useEffect(() => {
    newsApi.get("/articles").then(({ data }) => {
      const articleArray = data.articles;
      const filteredData = articleArray.filter((article) => {
        return article.topic === topic;
      });

      setSingleTopic(filteredData);
    });
  });

  return (
    <div>
      {singleTopic.map((topic) => (
        <Card key={topic.article_id}>
          <Link to={`/topics/${topic.topic}`}>
            <Card.Body>
              <Card.Title>{topic.title}</Card.Title>
              <Card.Text>By {topic.author}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Topics;

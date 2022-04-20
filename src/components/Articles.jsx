import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newsApi } from "../utils/api";
import { Card } from "react-bootstrap";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    newsApi.get("/articles").then(({ data }) => setArticles(data.articles));
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <Card key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>By {article.author}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Articles;

{
  /* <li key={article.article_id}>
  <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
</li>; */
}

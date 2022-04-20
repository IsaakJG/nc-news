import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import { Card } from "react-bootstrap";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic]);

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

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleArticle } from "../utils/api";
import { Card } from "react-bootstrap";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    singleArticle(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  return (
    <div>
      <Card key={article.article_id}>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>By {article.author}</Card.Text>
          <Card.Text>{article.body}</Card.Text>
          <Card.Footer>
            <small className="text-muted">Topic: {article.topic}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleArticle;

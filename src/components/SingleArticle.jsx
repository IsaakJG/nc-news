import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleArticle } from "../utils/api";
import { Card } from "react-bootstrap";

import Vote from "./Vote";
import Comments from "./Comments";

const SingleArticle = () => {
  //STATES
  const [article, setArticle] = useState([]);
  const [err, setErr] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    singleArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setErr(null);
      })
      .catch(() => {
        setErr("Article not found 😢");
      });
  }, [article_id]);

  if (err)
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{err}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );

  return (
    <div>
      <Card key={article.article_id}>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>By {article.author}</Card.Text>
          <Card.Text>{article.body}</Card.Text>
          <Vote votes={article.votes} article_id={article.article_id} />
          <Comments article_id={article.article_id} />
          <Card.Footer>
            <small className="text-muted">Topic: {article.topic}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleArticle;

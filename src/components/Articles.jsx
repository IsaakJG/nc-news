import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import { Card, Dropdown } from "react-bootstrap";

const Articles = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);
  const [sort_by, setSort_by] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const [sortButtonName, setSortButtonName] = useState("");
  const [orderButtonName, setOrderButtonName] = useState("DESC");

  useEffect(() => {
    getArticles(topic, sort_by, order).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic, sort_by, order]);

  const handleSortSelect = (e) => {
    console.log(typeof e);
    setSort_by(e);
    if (e === "title") {
      setSortButtonName("Title");
    } else if (e === "created_at") {
      setSortButtonName("Date");
    } else if (e === "comment_count") {
      setSortButtonName("Comment Count");
    } else if (e === "votes") {
      setSortButtonName("Votes");
    }
  };

  const handleOrderSelect = (e) => {
    setOrder(e);
    setOrderButtonName(e);
  };

  if (err)
    return (
      <Card className="my-2">
        <Card.Body>
          <Card.Title>{err}</Card.Title>
        </Card.Body>
      </Card>
    );

  return (
    <>
      <Dropdown className="d-inline mx-2" onSelect={handleSortSelect}>
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Sort By: {sortButtonName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item value="Title" eventKey="title">
            Title
          </Dropdown.Item>
          <Dropdown.Item eventKey="created_at">Date</Dropdown.Item>
          <Dropdown.Item eventKey="comment_count">Comment Count</Dropdown.Item>
          <Dropdown.Item eventKey="votes">Votes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2" onSelect={handleOrderSelect}>
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Order: {orderButtonName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="ASC">Ascending</Dropdown.Item>
          <Dropdown.Item eventKey="DESC">Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {articles.map((article) => (
        <Card className="my-2" key={article.article_id}>
          <Card.Body>
            <Link to={`/articles/${article.article_id}`}>
              <Card.Title>{article.title}</Card.Title>
            </Link>
            <Card.Text className="my-1">Author: {article.author}</Card.Text>
            <Card.Text className="my-1">
              Comments: {article.comment_count}
            </Card.Text>
            <Card.Text className="my-1">Votes: {article.votes}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Topic: {article.topic}</small>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
};

export default Articles;

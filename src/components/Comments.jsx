import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import { Card } from "react-bootstrap";

import PostComment from "./PostComment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
        setErr(null);
      })
      .catch(() => {
        setErr("Comments not found 😢");
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
    <>
      <br></br>
      <Card.Text>Comments:</Card.Text>
      <PostComment article_id={article_id} setComments={setComments} />
      {comments.map((comment) => (
        <Card className="my-2" key={comment.comment_id}>
          <Card.Body>
            <Card.Text style={{ fontSize: "13px" }}>{comment.body}</Card.Text>
            <Card.Text style={{ fontSize: "10px" }}>
              By {comment.author}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ fontSize: "10px" }}>
            <small className="text-muted">
              {new Date(comment.comment_id).toString()}
            </small>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
};

export default Comments;

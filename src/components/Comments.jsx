import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, deleteComment } from "../utils/api";
import { Card, Button } from "react-bootstrap";

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

  const handleDeleteClick = (comment_id) => {
    deleteComment(comment_id).catch((err) => {
      setErr("Could not delete comment 😢 Please try again!");
      console.log(err.response);
    });
    let newComments = [...comments];
    for (let i = 0; i < newComments.length; i++) {
      if (
        newComments[i].comment_id === comment_id &&
        newComments[i].author === "jessjelly"
      ) {
        newComments.splice(i, 1);
      }
    }
    setComments(newComments);
  };

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
            {comment.author === "jessjelly" && (
              <Button
                onClick={() => handleDeleteClick(comment.comment_id)}
                variant="outline-danger"
                size="sm"
              >
                Delete Comment 🗑
              </Button>
            )}
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

import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { postComment } from "../utils/api";

const PostComment = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState({
    username: "jessjelly",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, newComment).then((response) => {
      setComments((currComments) => {
        const newComments = [response, ...currComments];
        return newComments;
      });
      setNewComment({
        username: "jessjelly",
        body: "",
      });
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Add a comment..."
          value={newComment.body}
          onChange={(e) =>
            setNewComment((currComment) => {
              return { ...currComment, body: e.target.value };
            })
          }
          required
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Comment!
      </Button>
    </Form>
  );
};

export default PostComment;

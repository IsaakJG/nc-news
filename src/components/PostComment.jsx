import { useState } from "react";

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
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newComment.body}
        onChange={(e) =>
          setNewComment((currComment) => {
            return { ...currComment, body: e.target.value };
          })
        }
      ></textarea>
      <button>Post</button>
    </form>
  );
};

export default PostComment;

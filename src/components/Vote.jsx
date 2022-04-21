import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { patchUpVote, patchDownVote } from "../utils/api";

const Vote = ({ votes, article_id }) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [checked, setChecked] = useState(false);

  const handleUpVoteClick = () => {
    setVoteCount((currVoteCount) => currVoteCount + 1);
    patchUpVote(article_id).then((data) => {
      setVoteCount(data);
    });
  };

  const handleDownVoteClick = () => {
    setVoteCount((currVoteCount) => currVoteCount - 1);
    patchDownVote(article_id).then((data) => {
      setVoteCount(data);
    });
  };

  return (
    <>
      <Button onClick={handleUpVoteClick} variant="outline-success" size="sm">
        👍
      </Button>
      <span> </span>
      <Button onClick={handleDownVoteClick} variant="outline-danger" size="sm">
        👎
      </Button>
      <Card.Text>Votes: {voteCount}</Card.Text>
    </>
  );
};

export default Vote;

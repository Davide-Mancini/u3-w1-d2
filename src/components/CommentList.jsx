import { ListGroup } from "react-bootstrap";

const CommentList = function (props) {
  return (
    <>
      <ListGroup>
        {props.comments.map((review) => (
          <ListGroup.Item key={review._id}>{review.comment}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default CommentList;

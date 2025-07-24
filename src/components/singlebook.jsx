import { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import AddComment from "./AddComment";

class SingleBook extends Component {
  // console.log(libroSingolo);
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Card
          className={this.state.selected === true ? "border border-danger" : ""}
        >
          <Card.Img
            variant="top"
            src={this.props.libroSingolo.img}
            onClick={() => {
              this.setState({
                selected: !this.state.selected,
              });
            }}
          />

          <Card.Body>
            <Card.Title>{this.props.libroSingolo.title}</Card.Title>
          </Card.Body>
          {
            this.state.selected === true && (
              <>
                <CommentArea IdLibro={this.props.libroSingolo.asin} />
                <AddComment IdLibro={this.props.libroSingolo.asin} />
              </>
            )
            // console.log(this.props.libroSingolo.asin);
          }
        </Card>
      </>
    );
  }
}
export default SingleBook;

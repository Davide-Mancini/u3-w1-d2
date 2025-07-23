import { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

class SingleBook extends Component {
  // console.log(libroSingolo);
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Card
          className={
            this.state.selected === true ? "border border-danger" : this.state
          }
        >
          <Card.Img
            variant="top"
            src={this.props.libroSingolo.img}
            onClick={() => {
              this.setState({
                selected: true,
              });
            }}
          />

          <Card.Body>
            <Card.Title>{this.props.libroSingolo.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default SingleBook;

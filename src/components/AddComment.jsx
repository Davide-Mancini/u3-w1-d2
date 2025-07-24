import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
  };
  componentDidMount() {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.IdLibro,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjhmZjc4Y2RkZjAwMTU1ZDY3OTgiLCJpYXQiOjE3NTIyMTc4NTUsImV4cCI6MTc1MzQyNzQ1NX0.-ZbIr_OGNQjl0vH0tZmEDvdYPsu33joFSeNEcwGikBg",
        },
        body: JSON.stringify({
          comment: this.state.comment,
          rate: this.state.rate,
          elementId: this.props.libroId,
        }),
      }
    )
      .then((res) => {
        if (res.ok === true) {
          alert("iniviata");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              type="text"
              value={this.state.comment}
              onChange={(e) => {
                this.setState({ comment: e.target.value });
              }}
            />
          </Form.Group>
          <Button type="submit" variant="success">
            Invia Recensione
          </Button>
        </Form>
      </>
    );
  }
}
export default AddComment;

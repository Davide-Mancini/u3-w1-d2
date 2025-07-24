import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.IdLibro,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjhmZjc4Y2RkZjAwMTU1ZDY3OTgiLCJpYXQiOjE3NTIyMTc4NTUsImV4cCI6MTc1MzQyNzQ1NX0.-ZbIr_OGNQjl0vH0tZmEDvdYPsu33joFSeNEcwGikBg",
        },
      }
    )
      .then((res) => {
        if (res.ok === true) {
          return res.json();
        }
      })
      .then((arrayRecensioni) => {
        console.log(arrayRecensioni[0].comment);
        this.setState({ comments: arrayRecensioni });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log("RENDER FATTO");
    // console.log(this.state.comments);

    return (
      <>
        <CommentList comments={this.state.comments} />
        <AddComment libroId={this.props.IdLibro} />
      </>
    );
  }
}
export default CommentArea;

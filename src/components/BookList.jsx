import SingleBook from "./singlebook";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
const BookList = (prop) => {
  //   console.log(prop);
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>CERCA</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form>
      <Container>
        <Row>
          <>
            {prop.prop.map((libro) => {
              return (
                <Col xs={12} md={4} lg={3} key={libro.asin}>
                  <SingleBook libroSingolo={libro} />
                </Col>
              );
            })}
          </>
        </Row>
      </Container>
    </>
  );
};

export default BookList;

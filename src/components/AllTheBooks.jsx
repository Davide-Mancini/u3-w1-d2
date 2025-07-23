import { Col, Container, Row } from "react-bootstrap";

import librifantasy from "../data/fantasy.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class AllBooks extends Component {
  state = {
    activeBook: librifantasy,
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <h1>{librifantasy[0].category}</h1>
            {librifantasy.map((libro) => {
              // console.log(libro);
              return (
                <Col xs={12} md={4} lg={3} key={libro.asin}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={libro.img} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{libro.title}</Card.Title>
                      <Card.Text className="flex-grow-1">
                        {libro.price}
                      </Card.Text>
                      <Button variant="primary">Acquista Ora!</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}
export default AllBooks;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HeaderAndFooterExample() {
  return (
    <Card className="text-center mt-5">
      <Card.Body>
        <Card.Title>Il mio footer</Card.Title>
        <Card.Text>Non trovavo un footer su React-Bootstrap</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">All Rights Reserved</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;

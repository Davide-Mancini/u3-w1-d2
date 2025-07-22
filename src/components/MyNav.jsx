import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";

function CollapsibleExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid={true} className="m-0">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
            <NavDropdown title="Category" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Horror</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

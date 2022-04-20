import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>NC News</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <NavDropdown title="Topics" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/topics/coding">
              Coding
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/topics/football">
              Football
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/topics/cooking">
              Cooking
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

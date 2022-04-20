import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";

const NavBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>NC News</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <NavDropdown title="Topics" id="basic-nav-dropdown">
            {topics.map((topic) => (
              <NavDropdown.Item
                key={topic.slug}
                as={Link}
                to={`/articles/${topic.slug}`}
              >
                {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

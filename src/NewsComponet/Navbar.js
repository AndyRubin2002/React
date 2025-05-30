import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
export function NavbarWeather() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Kal Tak</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/news">
            <Nav.Link>All News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/topHeadline">
            <Nav.Link>Top Headline</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/weather">
            <Nav.Link>Weather</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      
  );
}


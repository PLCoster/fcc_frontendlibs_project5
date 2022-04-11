import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import styles from './styles/NavBar.module.css';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="#home" className={styles.navbarBrand}>
          25 + 5 Clock
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://plcoster.github.io/homepage/">
              Home
            </Nav.Link>
            <NavDropdown title="FreeCodeCamp Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://plcoster.github.io/fcc_frontendlibs_project1/">
                Quote Generator
              </NavDropdown.Item>
              <NavDropdown.Item href="https://plcoster.github.io/fcc_frontendlibs_project2/">
                Markdown Previewer
              </NavDropdown.Item>
              <NavDropdown.Item href="https://plcoster.github.io/fcc_frontendlibs_project3/">
                Drum Machine
              </NavDropdown.Item>
              <NavDropdown.Item href="https://plcoster.github.io/fcc_frontendlibs_project4/">
                JavaScript Calculator
              </NavDropdown.Item>
              <NavDropdown.Item href="https://plcoster.github.io/fcc_frontendlibs_project5/">
                25 + 5 Clock
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://plcoster.github.io/homepage/projects.html">
              All Projects
            </Nav.Link>
            <Nav.Link href="https://github.com/PLCoster">
              <i className="bi bi-github"></i> Github
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/plcoster">
              <i className="bi bi-linkedin"></i> LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

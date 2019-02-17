/**
 * Configs
 */
import headerNavItems from "../web-app-configs/header-nav-config";

/**'
 * React Bootstrap
 */
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => (
  <div className="header">
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/static/logos/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {" React Bootstrap"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {headerNavItems.map((item, index) => (
            <Nav.Link key={index} href={item.link}>
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
        <Nav>
          <Navbar.Text>Signed in as: </Navbar.Text>
          <NavDropdown title="Account Name" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;

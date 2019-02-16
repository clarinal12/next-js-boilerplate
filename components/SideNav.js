import React from "react";

/**
 * Configs
 */
import sideNavItems from "../web-app-configs/side-nav-config";

/**
 * React Bootstrap
 */
import { Button, Nav } from "react-bootstrap";

/**
 * FontAwesome
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee } from "@fortawesome/free-solid-svg-icons";

/**
 * Components
 */
import SideNavItem from "./SideNavItem";

export default class SideNav extends React.Component {
  state = {
    open: true
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;

    return (
      <div className={`side-nav ${open ? "open" : ""}`}>
        <Button
          onClick={this.toggleNav}
          className="side-nav-toggle"
          variant="light"
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <div className="side-nav-icons-panel">
          {sideNavItems.map((item, index) => (
            <Nav.Link key={index} href="#">
              <FontAwesomeIcon icon={faCoffee} />
            </Nav.Link>
          ))}
        </div>
        <div className={`side-nav-items-panel ${open ? "open" : ""}`}>
          {sideNavItems.map((item, index) => (
            <Nav.Link key={index} href="#">
              {item.name}
            </Nav.Link>
          ))}
        </div>
      </div>
    );
  }
}

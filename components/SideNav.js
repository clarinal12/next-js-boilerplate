import React from "react";

/**
 * Configs
 */
import sideNavItems from "../web-app-configs/side-nav-config";

/**
 * React Bootstrap
 */
import { Button, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";

/**
 * FontAwesome
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class SideNav extends React.Component {
  state = {
    open: true
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  renderNavIcons = item => {
    if (this.state.open) {
      return <FontAwesomeIcon icon={item.icon} />;
    } else {
      return (
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id={`tooltip-${item.name}`}>{item.name}</Tooltip>}
        >
          <FontAwesomeIcon icon={item.icon} />
        </OverlayTrigger>
      );
    }
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
            <Nav.Link key={index} href={item.link}>
              {this.renderNavIcons(item)}
            </Nav.Link>
          ))}
        </div>
        <div className={`side-nav-items-panel ${open ? "open" : ""}`}>
          {sideNavItems.map((item, index) => (
            <Nav.Link key={index} href={item.link}>
              {item.name}
            </Nav.Link>
          ))}
        </div>
      </div>
    );
  }
}

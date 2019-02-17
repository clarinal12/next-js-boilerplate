import React from "react";

/**
 * Configs
 */
import sideNavItems from "../web-app-configs/side-nav-config";

/**
 * React Bootstrap
 */
import {
  Button,
  Nav,
  OverlayTrigger,
  Tooltip,
  Row,
  Col
} from "react-bootstrap";

/**
 * FontAwesome
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class SideNav extends React.Component {
  state = {
    open: true
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  renderNavIcon = item => {
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
        <div className="side-nav-toggle-wrapper">
          <Button
            onClick={this.toggleNav}
            className="side-nav-toggle"
            variant="light"
          >
            <FontAwesomeIcon icon={open ? faArrowLeft : faArrowRight} />
          </Button>
        </div>
        <div className="links">
          {sideNavItems.map((item, index) => (
            <Nav.Link key={index} href={item.link}>
              <Row>
                <Col xs={9}>{item.name}</Col>
                <Col xs={3}>{this.renderNavIcon(item)}</Col>
              </Row>
            </Nav.Link>
          ))}
        </div>
      </div>
    );
  }
}

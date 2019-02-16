import React from "react";

/**
 * React Bootstrap
 */
import { Button } from "react-bootstrap";

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

  render() {
    const { open } = this.state;
    console.log(open);
    return (
      <div className={`side-nav ${open ? "open" : ""}`}>
        <Button
          onClick={this.toggleNav}
          className="side-nav-toggle"
          variant="light"
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>
    );
  }
}
